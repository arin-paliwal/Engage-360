import {
  Mail,
  Phone,
  Smartphone,
  Video,
  Edit,
  MoreVertical,
  Download,
  User2,
  Anchor,
  PersonStanding,
  Cake,
  Database,
  MailCheck,
  Building,
  Info,
  Timer,
  IndianRupee,
  ArrowUp01,
  ArrowUpRightSquare,
  ArrowUpRight,
  File,
  CloudDownload,
} from "lucide-react";
import InitialAvatar from "../../../utility/initialAvatar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { EmployeeInterface } from "../../../types/common";
import { appointments, documents, payrolls } from "../../../data/employee-dashboard";

export default function Details() {
  const [userData, setUserData] = useState<EmployeeInterface>(
    JSON.parse(localStorage.getItem("currentUser") || "{}") as EmployeeInterface
  );
  const currentDate = new Date();
  const firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const formattedDate = firstDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const remainingDays = Math.max(0, (lastDate.getDate() - currentDate.getDate()));
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const size = 100;
  const strokeWidth = 10;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const targetProgress = (18 / 30) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(targetProgress);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const progressOffset = ((100 - progress) / 100) * circumference;

  return (
    <div className="h-screen overflow-auto p-6 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-lightMode-accentBlue rounded-lg flex items-center justify-center">
          <User2 className="w-6 h-6 text-white" />
        </div>
        <div className="ml-2">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Employee Details
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            View all your personal, professional and other details here.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <InitialAvatar name="Jerome Bellingham" borderRadius="full" />
            </div>
            <div>
              <h1 className="text-xl flex items-center gap-4 font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                {userData.name}
                <span className="text-xs bg-lightMode-accentBlue/10  text-lightMode-accentBlue dark:text-darkMode-accentBlue rounded-md px-2 py-1 border border-lightMode-accentBlue">
                  Employee
                </span>
              </h1>
              <p className="text-sm flex items-center gap-2 text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                {userData.jobTitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-lg">
              <Mail className="" size={18} />
            </button>
            <button className="flex p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-lg">
              <Phone className="" size={18} />
            </button>
            <button className="flex p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-lg">
              <Video className="" size={18} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-darkMode-background rounded-xl p-6 border-2 border-borders-primary dark:border-borders-secondary">
            <h2 className="text-2xl font-semibold mb-7 text-lightMode-primaryText dark:text-darkMode-primaryText">
              Basic Informational
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-2">
                <PersonStanding size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Name
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {userData.name}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Database size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Date of Joining
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {userData.dateOfJoining}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Cake size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Birthday
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {userData.dateOfBirth}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <MailCheck size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Registered Email
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {userData.email}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Building size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Department
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {userData.department} ({userData.contractType})
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Info size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Employee Code
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {userData.employeeId}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Timer size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Work Schedule
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {userData.workSchedule.startTime} - {userData.workSchedule.endTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-darkMode-background rounded-xl p-6 border-2 border-borders-primary dark:border-borders-secondary">
            <h2 className="text-2xl font-semibold mb-7 text-lightMode-primaryText dark:text-darkMode-primaryText">
              Your Timeline
            </h2>
            {appointments.map((appointment, index) => (
              <div key={index} className="relative pl-5">
                {index !== appointments.length - 1 && (
                  <div className="absolute left-[0.95rem] top-9 h-full w-px bg-borders-primary dark:bg-borders-secondary" />
                )}
                <div className="absolute left-2 top-5 w-4 h-4 rounded-full border-2 flex items-center justify-center border-blue-500">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">
                    {appointment.date}
                  </div>
                  <div className="border-2 border-borders-primary dark:border-borders-secondary p-3 rounded-lg">
                    <div className="font-medium mb-">{appointment.action}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm">{appointment.perfomed_by}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="flex bg-[#171717] p-6 flex-col text-white text-sm gap-5 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between">
                <h1 className="">
                  {userData.jobTitle} @ {userData.department}
                </h1>
                <h1 className="">Engage360</h1>
              </div>
              <div className="flex items-center justify-between">
                <img src="/logos/chip.svg" alt="Chip logo" />
                <img src="/logos/contactless.svg" alt="Chip logo" />
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col mt-8">
                  <h1 className="">{userData.employeeId}</h1>
                  <h1 className="text-gray-200">{userData.name}</h1>
                  <h1 className="text-gray-200">DOJ : {userData.dateOfJoining}</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-end">Valid upto</h1>
                  <h1 className="text-gray-200">
                    {/* date of joining + 3 years */}
                    {new Date(userData.dateOfJoining).getFullYear() + 5}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 bg-white dark:bg-darkMode-background rounded-xl px-4 py-7 border-2 border-borders-primary dark:border-borders-secondary">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                  Current Payroll
                </h2>
                <div className="flex p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-full hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground cursor-pointer">
                  <IndianRupee className="" size={18} />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-[100px] h-[100px]">
                  <svg
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    className="transform -rotate-90"
                  >
                    <circle
                      cx={center}
                      cy={center}
                      r={radius}
                      fill="none"
                      stroke={theme === "dark" ? "#1E1E1E" : "#F3F4F6"}
                      strokeWidth={strokeWidth}
                    />
                    <circle
                      cx={center}
                      cy={center}
                      r={radius}
                      fill="none"
                      stroke="#3C41E9"
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={progressOffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold">{remainingDays}</span>
                    <span className="text-sm opacity-80">Days</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Current Payroll Start
                  </h1>
                  <h1 className="font-bold">{formattedDate}</h1>
                  <button className="flex items-center justify-center mt-3 text-sm border-2 gap-2 border-borders-primary dark:border-borders-secondary rounded-lg px-1 py-1">
                    Raise Issue
                    <ArrowUpRight className="" size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-darkMode-background rounded-xl p-4 border-2 border-borders-primary dark:border-borders-secondary md:col-span-2">
            <h2 className="text-lg font-bold mb-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
              Payrolls History
            </h2>
            <div className="overflow-x-auto border-2 border-borders-primary dark:border-borders-secondary rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-lightMode-secondaryBackground dark:bg-darkMode-secondaryBackground text-lightMode-secondaryText dark:text-darkMode-secondaryText text-sm">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Invoice No.</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payrolls.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-borders-primary dark:border-borders-secondary"
                    >
                      <td className="px-4 py-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {item.id}
                      </td>
                      <td className="px-4 py-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {item.type}
                      </td>
                      <td className="px-4 py-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {item.invoice}
                      </td>
                      <td className="px-4 py-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {item.amount}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-2 py-1 rounded-md text-sm ${
                            item.status === "Paid"
                              ? "bg-lightMode-accentGreen/10 border-2 border-lightMode-accentGreen/10 text-lightMode-accentGreen"
                              : "bg-lightMode-accentOrange/10 border-2 border-lightMode-accentOrange/10 text-lightMode-accentOrange"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white dark:bg-darkMode-background rounded-xl p-4 border-2 border-borders-primary dark:border-borders-secondary">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-lightMode-primaryText dark:text-darkMode-primaryText">
                Submitted Documents
              </h2>
            </div>
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-background border-2 border-borders-primary dark:border-borders-secondary cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded">
                      <File className="w-6 h-6 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {doc.name}
                      </p>
                      <p className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                        {doc.size}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-background rounded-full">
                    <CloudDownload
                      className=" text-lightMode-secondaryText"
                      size={19}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
