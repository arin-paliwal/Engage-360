import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Badge,
  ChevronDownIcon,
  CircleArrowOutDownLeft,
  Clock,
  ClockAlert,
  Download,
  List,
  LogIn,
  LogOut,
  Sigma,
  SquareIcon,
  Timer,
  User,
} from "lucide-react";
import { EmployeeInterface } from "../../../types/common";
import exportAsCsv from "../../admin/common/export";

const attendanceData = [
  {
    date: "March 08 2023",
    status: "On Time",
    checkIn: "08:53",
    checkOut: "17:15",
  },
  {
    date: "March 07 2023",
    status: "Late",
    checkIn: "08:27",
    checkOut: "17:09",
  },
  { date: "March 06 2023", status: "Absent", checkIn: "-", checkOut: "-" },
  {
    date: "March 05 2023",
    status: "On Time",
    checkIn: "08:55",
    checkOut: "17:10",
  },
  {
    date: "March 04 2023",
    status: "On Time",
    checkIn: "08:58",
    checkOut: "17:06",
  },
  {
    date: "March 03 2023",
    status: "Late",
    checkIn: "08:40",
    checkOut: "17:02",
  },
];

export default function Attendance() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const userData: EmployeeInterface = JSON.parse(localStorage.getItem('currentUser') || '{}') as EmployeeInterface;

  const handleDownloadInfo = () => {
    const data = {
      ...userData,
      attendanceData
    }
    console.log(data);
    exportAsCsv([data], 'attendance-info');
  }

  return (
    <div className="h-screen text-lightMode-primaryText dark:text-darkMode-primaryText">
      <div className="">
        <div className="flex flex-col p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-lightMode-accentBlue rounded-lg flex items-center justify-center">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <div className="ml-2">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  Attendance
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  View your attendance history and work hours.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4"
            onClick={handleDownloadInfo}
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-lightMode-accentBlue text-white rounded-lg">
                <Download className="w-4 h-4" />
                Download Info
              </button>
            </div>
          </div>
          <div className="flex items-center gap-8 mt-6">
            <div className="flex">
            <img
              src="https://avatar.iran.liara.run/public/33"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            </div>
            <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <h1 className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Name
              </h1>
              <h2 className="text-xl font-semibold">
                {userData.name}
              </h2>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Employee Code
              </h1>
              <h2 className="text-xl font-semibold">{userData.employeeId}</h2>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Role
              </h1>
              <h2 className="text-xl font-semibold">
                {userData.jobTitle}
              </h2>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Phone
              </h1>
              <h2 className="text-xl font-semibold">
                {userData.phone}
              </h2>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Email
              </h1>
              <h2 className="text-xl font-semibold">
                {userData.email}
              </h2>
            </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <StatCard
              icon={<Sigma className="w-5 h-5" />}
              value={userData.workSchedule.workingDays.length.toString()}
              label="Total Working Days"
            />
            <StatCard
              icon={<LogIn className="w-5 h-5" />}
              value={userData.workSchedule.averageStartTime}
              label="Avg Check In Time"
            />
            <StatCard
              icon={<LogOut className="w-5 h-5" />}
              value={userData.workSchedule.averageEndTime}
              label="Avg Check Out Time"
            />
            <StatCard
              icon={<Badge className="w-5 h-5" />}
              value="Healthy"
              label="Attendance Status"
            />
          </div>
        </div>
        <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue rounded"></div>
              Attendance History
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded-l-lg ${
                    viewType === "grid"
                      ? "bg-lightMode-secondaryBackground dark:bg-darkMode-background"
                      : "hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-background"
                  }`}
                >
                  <SquareIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded-r-lg ${
                    viewType === "list"
                      ? "bg-lightMode-secondaryBackground dark:bg-darkMode-background"
                      : "hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-background"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              
            </div>
          </div>

          <div
            className={`grid ${viewType === "grid" ? "grid-cols-3" : "grid-cols-1"} gap-4`}
          >
            {attendanceData.map((record, index) => (
              <AttendanceCard key={index} {...record} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="border-2 border-borders-primary dark:border-borders-secondary rounded-xl p-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-lightMode-secondaryBackground dark:bg-darkMode-secondaryBackground rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-xl font-semibold">{value}</p>
          <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function AttendanceCard({
  date,
  status,
  checkIn,
  checkOut,
}: {
  date: string;
  status: string;
  checkIn: string;
  checkOut: string;
}) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Time":
        return "bg-lightMode-accentGreen/10 dark:bg-darkMode-accentGreen/10 text-lightMode-accentGreen dark:text-darkMode-accentGreen border-2 border-lightMode-accentGreen dark:border-darkMode-accentGreen";
      case "Late":
        return "bg-lightMode-accentOrange/10 dark:bg-darkMode-accentOrange/10 text-lightMode-accentOrange dark:text-darkMode-accentOrange border-2 border-lightMode-accentOrange dark:border-darkMode-accentOrange";
      case "Absent":
        return "bg-red-500/10 text-red-500 border-2 border-red-500";
      default:
        return "bg-gray-500/10 text-gray-500 border-2 border-gray-500";
    }
  };

  return (
    <div className="border-2 border-borders-primary dark:border-borders-secondary rounded-xl p-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <p className="text-sm">{date}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-md text-sm ${getStatusColor(status)}`}
        >
          {status}
        </span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div>
          <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-1">
            Check In Time
          </p>
          <p className="font-medium">{checkIn}</p>
        </div>
        <div className="text-end">
          <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-1">
            Check Out Time
          </p>
          <p className="font-medium">{checkOut}</p>
        </div>
      </div>
    </div>
  );
}
