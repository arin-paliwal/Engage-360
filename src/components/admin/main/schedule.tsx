import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  CalendarIcon,
  CalendarCheck,
  Clock,
} from "lucide-react";
import { EventInterface } from "../../../types/admin-dashboard/types";
import axiosInstance from "../../../api/axios";
import toast from "react-hot-toast";

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [userEmails, setUserEmails] = useState<string[]>(
    localStorage.getItem("emails")
      ? JSON.parse(localStorage.getItem("emails")!)
      : [],
  );
  const [newEvent, setNewEvent] = useState<EventInterface>({
    id: "",
    date: "",
    name: "",
    description: "",
    time: "",
    assignedTo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/events");
      setEvents(response.data);
      const lastEvent = response.data[response.data.length - 1];
      setNewEvent((prev) => ({
        ...prev,
        id: String(Number(lastEvent.id) + 1),
      }));
    };
    fetchData();
  }, []);

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

  const addEvent = async () => {
    if (selectedDate && newEvent.name.trim()) {
      const eventDate = new Date(
        Date.UTC(
          selectedDate.getUTCFullYear(),
          selectedDate.getUTCMonth(),
          selectedDate.getUTCDate(),
        ),
      );
      setEvents((prev) => [
        ...prev,
        { ...newEvent, date: eventDate.toDateString() },
      ]);
      const toBeAddedEvent = { ...newEvent, date: eventDate.toDateString() };
      const response = await axiosInstance.post("/events", toBeAddedEvent);
      console.log(response.data);
      toast.success("Event added successfully");
      setModalOpen(false);
      // setNewEvent({ date: "", name: "", description: "", time: "" });
    }
  };

  const handleDateClick = (day: number | string) => {
    const selected = new Date(
      Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), Number(day)),
    );
    setSelectedDate(selected);
    setModalOpen(true);
    // setNewEvent({ date: "", name: "", description: "", time: "" });
  };

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

  const handleAddEventButtonClick = () => {
    const now = new Date();
    setSelectedDate(
      new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())),
    );
    setModalOpen(true);
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
          <div className="w-10 h-10 bg-lightMode-accentBlue dark:bg-blue-600 rounded-lg flex items-center justify-center">
            <CalendarIcon className="w-6 h-6 text-white" />
          </div>
          <div className="ml-2">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Schedule
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Manage your events, meetings, and appointments here.
            </p>
          </div>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 font-medium text-white bg-lightMode-accentBlue rounded-lg hover:bg-opacity-90 transition-colors"
          onClick={handleAddEventButtonClick}
        >
          <CalendarCheck size={18} />
          Add Event
        </button>
      </div>

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
                  !day.isCurrentMonth
                    ? "bg-gray-50 dark:bg-darkMode-secondaryBackground"
                    : ""
                }`}
                onClick={() => day.isCurrentMonth && handleDateClick(day.day)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {day.isCurrentMonth && (
                    <div className="flex justify-between">
                      <div>{day.day}</div>
                      {hoveredIndex === index && (
                        <PlusCircle
                          className="text-blue-500 dark:text-blue-400"
                          size={20}
                        />
                      )}
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

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white dark:bg-black p-8 rounded-lg shadow-lg w-[32rem] max-w-full"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Add Event
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Date
                </label>
                <input
                  id="eventDate"
                  type="date"
                  value={
                    selectedDate ? selectedDate.toISOString().split("T")[0] : ""
                  }
                  onChange={(e) => {
                    const [year, month, day] = e.target.value
                      .split("-")
                      .map(Number);
                    setSelectedDate(new Date(Date.UTC(year, month - 1, day)));
                  }}
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded resize-none dark:text-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="eventName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Event Name
                </label>
                <input
                  id="eventName"
                  type="text"
                  value={newEvent.name}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, name: e.target.value })
                  }
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded resize-none dark:text-white focus:outline-none"
                  placeholder="Enter event name"
                />
              </div>
              <div>
                <label
                  htmlFor="eventDescription"
                  className="block text-sm font-medium mb-1 text-lightMode-secondaryText dark:text-darkMode-secondaryText"
                >
                  Description
                </label>
                <textarea
                  id="eventDescription"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded h-24 resize-none dark:text-white focus:outline-none"
                  placeholder="Enter event description"
                />
              </div>
              <div>
                <label
                  htmlFor="eventTime"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Time
                </label>
                <div className="relative">
                  <input
                    id="eventTime"
                    type="time"
                    value={newEvent.time}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, time: e.target.value })
                    }
                    className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded pl-8 resize-none dark:text-white focus:outline-none"
                  />
                  <Clock
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="assignedTo"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Assigned To
                </label>
                <select
                  id="assignedTo"
                  value={newEvent.assignedTo}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, assignedTo: e.target.value })
                  }
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded resize-none dark:text-white focus:outline-none"
                >
                  <option value="" disabled>
                    Select assigned person
                  </option>
                  {userEmails.map((email) => (
                    <option key={email} value={email}>
                      {email}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-lightMode-accentBlue text-white rounded hover:bg-blue-600 transition-colors"
                onClick={addEvent}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
