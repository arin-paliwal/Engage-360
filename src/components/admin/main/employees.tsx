import { useState } from "react";
import {
  DownloadCloudIcon,
  Plus,
  Users2Icon,
  GitBranchPlusIcon,
  TimerOff,
} from "lucide-react";
import OrganisationChart from "../employee/organisational-chart";
import Timeoff from "../employee/time-offs";
import ManageEmployee from "../employee/manage-employees";
import { TabProps } from "../../../types/admin-dashboard/types";

export default function Employee() {
  const [activeTab, setActiveTab] = useState("manage");
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
  return (
    <div className="h-screen flex flex-col">
      <div className="px-6 pt-6 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue rounded-lg flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  fill="white"
                />
                <path
                  d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                Employee
              </h1>
              <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Manage your employee
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-[.6rem] text-sm flex items-center gap-2 text-lightMode-primaryText dark:text-darkMode-primaryText border border-gray-400 rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground">
              <DownloadCloudIcon className="w-5 h-5 text-lightMode-primaryText dark:text-darkMode-primaryText" />
              Export
            </button>
            <button className="px-4 py-[.6rem] text-sm flex items-center gap-2 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue text-white rounded-lg hover:opacity-90">
              <Plus className="w-5 h-5" />
              Add Employee
            </button>
          </div>
        </div>
        <div className="flex gap-8 border-b border-borders-primary">
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
      <div className="bg-white overflow-x-auto p-6 w-full">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
}
const Tab = ({ activeTab, setActiveTab, tabId, icon, label }: TabProps) => {
  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center gap-2 px-1 py-3 border-b-2 ${
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
