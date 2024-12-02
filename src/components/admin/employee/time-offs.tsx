"use client"

import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Search, Check, X } from 'lucide-react';
import { getRandomNumber } from "./organisational-chart";

interface TimeOffRequest {
  id: number;
  employee: { name: string; avatar: string; };
  leaveType: "Annual Leave" | "Sick Leave";
  leaveFrom: string;
  leaveTo: string;
  days: number;
  status: "Pending" | "Approved";
}

const timeOffRequests: TimeOffRequest[] = [
  { id: 1, employee: { name: "Brooklyn Simmons", avatar: "/placeholder.svg?height=40&width=40" }, leaveType: "Annual Leave", leaveFrom: "Jan 23, 2024", leaveTo: "Jan 24, 2024", days: 1, status: "Pending", },
  { id: 2, employee: { name: "Ralph Edwards", avatar: "/placeholder.svg?height=40&width=40" }, leaveType: "Sick Leave", leaveFrom: "Jan 23, 2024", leaveTo: "Jan 27, 2024", days: 4, status: "Pending", },
  { id: 3, employee: { name: "Leslie Alexander", avatar: "/placeholder.svg?height=40&width=40" }, leaveType: "Annual Leave", leaveFrom: "Jan 12, 2024", leaveTo: "Jan 14, 2024", days: 2, status: "Approved", },
  { id: 4, employee: { name: "Cody Fisher", avatar: "/placeholder.svg?height=40&width=40" }, leaveType: "Sick Leave", leaveFrom: "Jan 04, 2024", leaveTo: "Jan 06, 2024", days: 2, status: "Approved", },
  { id: 5, employee: { name: "Arlene McCoy", avatar: "/placeholder.svg?height=40&width=40" }, leaveType: "Annual Leave", leaveFrom: "Jan 03, 2024", leaveTo: "Jan 08, 2024", days: 5, status: "Approved", },
];

const leaveTypeStyles = {
  "Annual Leave": "bg-[#E5F3FF] text-lightMode-accentLightBlue dark:bg-darkMode-accentLightBlue/20 dark:text-darkMode-accentLightBlue",
  "Sick Leave": "bg-[#E2F9F3] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen",
};

const statusStyles = {
  Pending: "bg-[#FFF4E5] text-lightMode-accentOrange dark:bg-darkMode-accentOrange/20 dark:text-darkMode-accentOrange",
  Approved: "bg-[#E2F9F3] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen",
};

export default function Timeoff() {
  const [openPopupId, setOpenPopupId] = useState<number | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setOpenPopupId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMoreClick = (id: number) => {
    setOpenPopupId(openPopupId === id ? null : id);
  };

  const handleAccept = (id: number) => {
    console.log(`Accepted request ${id}`);
    setOpenPopupId(null);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleted request ${id}`);
    setOpenPopupId(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-lightMode-primaryText dark:text-darkMode-primaryText">
          Request Time Off
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search keyword..."
              className="w-64 h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-darkMode-secondaryBackground text-lightMode-primaryText dark:text-darkMode-primaryText border-2 focus:outline-none focus:border-lightMode-accentBlue dark:focus:border-darkMode-accentBlue"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-lg border border-borders-primary">
        {/* Table Header */}
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr,0.5fr,1fr,.2fr] px-6 py-4 border-b border-borders-primary">
          {["Employee Name", "Leave Type", "Leave From", "Leave To", "Days", "Status", "Action"].map(
            (header, index) => (
              <div
                key={index}
                className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText"
              >
                {header}
              </div>
            )
          )}
        </div>

        {timeOffRequests.map((request) => (
          <div
            key={request.id}
            className="grid grid-cols-[2fr,1fr,1fr,1fr,0.5fr,1fr,.2fr] px-6 py-4 border-b border-borders-primary last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <img src={`https://avatar.iran.liara.run/public/${getRandomNumber()}`} alt="" className="w-10 h-10 rounded-full" />
              <div className="font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">
                {request.employee.name}
              </div>
            </div>
            <div className="flex items-center">
              <span
                className={`px-3 py-1 rounded-full text-sm ${leaveTypeStyles[request.leaveType]}`}
              >
                {request.leaveType}
              </span>
            </div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">
              {request.leaveFrom}
            </div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">
              {request.leaveTo}
            </div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">
              {request.days}
            </div>
            <div className="flex items-center">
              <span
                className={`px-3 py-1 rounded-full text-sm ${statusStyles[request.status]}`}
              >
                {request.status}
              </span>
            </div>
            <div className="flex items-center gap-2 relative">
              {request.status === "Pending" && (
                <>
                  <button
                    onClick={() => handleMoreClick(request.id)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightMode-accentBlue dark:focus:ring-darkMode-accentBlue"
                    aria-label="More options"
                  >
                    <MoreVertical className="w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
                  </button>
                  {openPopupId === request.id && (
                    <div
                      ref={popupRef}
                      className="absolute top-8 right-0 mt-2 w-48 bg-white dark:bg-darkMode-secondaryBackground rounded-md shadow-lg z-10 border border-borders-primary"
                    >
                      <button
                        onClick={() => handleAccept(request.id)}
                        className="w-full text-left px-4 py-2 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 text-lightMode-accentGreen dark:text-darkMode-accentGreen" />
                        Accept
                      </button>
                      <button
                        onClick={() => handleDelete(request.id)}
                        className="w-full text-left px-4 py-2 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                      >
                        <X className="w-4 h-4 text-red-500" />
                        Delete
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

