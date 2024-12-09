import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  CalendarIcon,
  CalendarCheck,
  Clock,
  View,
  Info,
} from "lucide-react";
import { EventInterface } from "../../../types/admin-dashboard/types";
import axiosInstance from "../../../api/axios";

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [userEmail, setUserEmail] = useState<string>(
    JSON.parse(localStorage.getItem("currentUser") || "{}").email,
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(`/events`, {
        params: { assignedTo: userEmail },
      });
      setEvents(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [userEmail]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push({ day: "", isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    return days;
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false);
      }
    }

    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  return (
    <div className="flex flex-col h-screen p-6 overflow-y-scroll bg-white dark:bg-black">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-lightMode-accentBlue rounded-lg flex items-center justify-center">
            <CalendarIcon className="w-6 h-6 text-white" />
          </div>
          <div className="ml-2">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Schedule
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              View your meeting schedule and upcoming events.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-lightMode-background dark:bg-darkMode-secondaryBackground rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
                )
              }
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
                )
              }
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {monthYear}
            </h2>
          </div>
        </div>
        <div className="border rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-7 border-b dark:border-gray-700">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="p-4 text-sm font-medium text-center text-gray-600 dark:text-gray-300 border-r last:border-r-0 dark:border-gray-700"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {generateCalendarDays().map((day, index) => (
              <div
                key={index}
                className={`min-h-[120px] p-2 border-r border-b last:border-r-0 dark:border-gray-700 cursor-pointer hover:bg-white dark:bg-black duration-300 transform ${
                  !day.isCurrentMonth ? "bg-gray-50 dark:bg-gray-800" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {day.isCurrentMonth && (
                    <div className="flex justify-between">
                      <div>{day.day}</div>
                      {/* {hoveredIndex === index && (
                        <Info
                          className="text-blue-500 dark:text-blue-400"
                          size={18}
                        />
                      )} */}
                    </div>
                  )}
                </div>
                <div className="mt-2 space-y-1">
                  {events
                    .filter(
                      (event) =>
                        event.date ===
                        new Date(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          Number(day.day),
                        ).toDateString(),
                    )
                    .map((event, idx) => (
                      <div
                        key={idx}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                      >
                        {event.time} - {event.name}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
