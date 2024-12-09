import { useState, useRef, useEffect } from "react";
import { MoreVertical, Search, Check, X } from "lucide-react";
import InitialAvatar from "../../../utility/initialAvatar";
import axiosInstance from "../../../api/axios";
import toast from "react-hot-toast";
import { leaveTypeStyles, statusStyles } from "../../../utility/get-detp-color";
import { TimeOffRequest } from "../../../types/admin-dashboard/types";

export default function Timeoff() {
  const [openPopupId, setOpenPopupId] = useState<number | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [timeOffRequests, setTimeOffRequests] = useState<TimeOffRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("timeOffs");
      setTimeOffRequests(response.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
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
  const handleAccept = async (id: number) => {
    try {
      await axiosInstance.patch(`timeOffs/${id}`, { status: "Approved" });
      setTimeOffRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id ? { ...request, status: "Approved" } : request,
        ),
      );
      setOpenPopupId(null);
      toast.success("Request approved");
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const handleReject = async (id: number) => {
    try {
      await axiosInstance.patch(`timeOffs/${id}`, { status: "Rejected" });
      setTimeOffRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id ? { ...request, status: "Rejected" } : request,
        ),
      );
      setOpenPopupId(null);
      toast.success("Request rejected");
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);
  const filteredTimeOffs = timeOffRequests.filter((employee) =>
    employee.employee.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-lightMode-primaryText dark:text-darkMode-primaryText">
          Request Time Off
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keyword..."
              className="w-64 h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-darkMode-secondaryBackground text-lightMode-primaryText dark:text-darkMode-primaryText border-2 border-borders-primary dark:border-borders-secondary focus:outline-none focus:border-lightMode-accentBlue dark:focus:border-darkMode-accentBlue"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-lg border-2 border-borders-primary dark:border-borders-secondary">
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr,0.5fr,1fr,.2fr] px-6 py-4 border-b-2 border-borders-primary dark:border-borders-secondary">
          {[
            "Employee Name",
            "Leave Type",
            "Leave From",
            "Leave To",
            "Days",
            "Status",
            "Action",
          ].map((header, index) => (
            <div
              key={index}
              className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText"
            >
              {header}
            </div>
          ))}
        </div>
        {filteredTimeOffs.map((request) => (
          <div
            key={request.id}
            className="grid grid-cols-[2fr,1fr,1fr,1fr,0.5fr,1fr,.2fr] px-6 py-4 border-b-2 border-borders-primary dark:border-borders-secondary last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <InitialAvatar name={request.employee.name} size="sm" />
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
                  className="absolute top-8 right-0 mt-2 w-48 bg-white dark:bg-darkMode-secondaryBackground rounded-md shadow-lg z-10 border-2 border-borders-primary dark:border-borders-secondary"
                >
                  <button
                    onClick={() => handleAccept(request.id)}
                    className="w-full text-left px-4 py-2 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-lightMode-accentGreen dark:text-darkMode-accentGreen" />
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="w-full text-left px-4 py-2 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  >
                    <X className="w-4 h-4 text-red-500" />
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {filteredTimeOffs.length == 0 && (
        <div className="flex justify-center items-center h-[50vh]">
          <img
            src="/images/empty.svg"
            alt="No data"
            className="mt-6 block justify-center"
            width={400}
            height={300}
          />
        </div>
      )}
    </div>
  );
}
