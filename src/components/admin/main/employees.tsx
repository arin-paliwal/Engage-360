import { useEffect, useState } from "react";
import {
  DownloadCloudIcon,
  Plus,
  Users2Icon,
  GitBranchPlusIcon,
  TimerOff,
  Users2,
  BriefcaseBusiness,
} from "lucide-react";
import OrganisationChart from "../employee/organisational-chart";
import Timeoff from "../employee/time-offs";
import ManageEmployee from "../employee/manage-employees";
import { TabProps } from "../../../types/admin-dashboard/types";
import AddUserForm from "../employee/add-employee-form";
import exportAsCsv from "../common/export";
import axiosInstance from "../../../api/axios";

export default function Employee() {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "manage"
  );
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const tabs = [
    {
      id: "manage",
      label: "Manage Employees",
      icon: <Users2Icon size={18} />,
      component: <ManageEmployee />,
    },
    {
      id: "chart",
      label: "Organization Chart",
      icon: <GitBranchPlusIcon size={18} />,
      component: <OrganisationChart />,
    },
    {
      id: "timeoff",
      label: "Request Time Off",
      icon: <TimerOff size={18} />,
      component: <Timeoff />,
    },
  ];
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/employees");
      setEmployees(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  return (
    <div className="h-screen flex flex-col">
      <div className="px-6 pt-6 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue rounded-lg flex items-center justify-center">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                Employee
              </h1>
              <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Manage your employee
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="px-4 py-[.6rem] text-sm flex items-center gap-2 text-lightMode-primaryText dark:text-darkMode-primaryText border-2 rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground border-borders-primary dark:border-borders-secondary"
              onClick={() => exportAsCsv(employees)}
            >
              <DownloadCloudIcon className="w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
              Export
            </button>
            <button
              className="px-4 py-[.6rem] text-sm flex items-center gap-2 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue text-white rounded-lg hover:opacity-90"
              onClick={() => setIsAddingEmployee(true)}
            >
              <Plus className="w-5 h-5" />
              Add Employee
            </button>
          </div>
        </div>
        <div className="flex gap-8 border-b border-borders-primary dark:border-borders-secondary">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabId={tab.id}
              icon={tab.icon}
              label={tab.label}
            />
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-darkMode-background overflow-x-auto p-6 w-full">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
      {isAddingEmployee && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <AddUserForm setIsAddingEmployee={setIsAddingEmployee} />
        </div>
      )}
    </div>
  );
}
const Tab = ({ activeTab, setActiveTab, tabId, icon, label }: TabProps) => {
  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center gap-2 px-1 py-3 border-b-2  ${
        activeTab === tabId
          ? "border-lightMode-accentBlue dark:border-darkMode-accentBlue text-lightMode-accentBlue dark:text-darkMode-accentBlue"
          : "border-transparent text-lightMode-secondaryText dark:text-darkMode-secondaryText"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};
