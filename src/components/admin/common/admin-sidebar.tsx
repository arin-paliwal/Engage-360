import { useState } from "react";
import {
  BarChart3,
  Users,
  UserPlus,
  DollarSign,
  Calendar,
  Settings,
  HelpCircle,
  ChevronDown,
  SidebarClose,
} from "lucide-react";
import { useAppContext } from "../../../context";

export default function Sidebar() {
  const { state, dispatch } = useAppContext();

  return (
    <div className="fixed w-64 border-r h-screen z-50
     bg-white rounded-md">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <img src="/logos/logo-icon.png" alt="logo" className="w-8 h-10" />
          <span className="font-semibold">Engage360</span>
          {/* <SidebarClose className="ml-auto text-gray-400" size={20} /> */}
        </div>
      </div>
      <div className="p-2">
        <div className="text-sm font-medium text-gray-500 px-3 py-2">
          MAIN MENU
        </div>
        <nav className="space-y-1">
          {[
            { name: "Dashboard", icon: BarChart3, color: "text-gray-500" },
            { name: "Employee", icon: Users, color: "text-gray-500" },
            { name: "Recruitment", icon: UserPlus, color: "text-gray-500" },
            { name: "Payroll", icon: DollarSign, color: "text-gray-500" },
            { name: "Schedule", icon: Calendar, color: "text-gray-500" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() =>
                dispatch({ type: "SET_ADMIN_STATE", payload: item.name })
              }
              className={`flex items-center border gap-3 w-full px-3 py-2 text-sm rounded-md ${
                state.adminState === item.name
                  ? "bg-blue-50 text-lightMode-accentBlue border-lightMode-accentBlue"
                  : "text-gray-700 border-transparent hover:bg-gray-100"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  state.adminState === item.name ? "text-blue-500" : item.color
                }`}
              />

              {item.name}
            </button>
          ))}
        </nav>
        <div className="text-sm font-medium text-gray-500 px-3 py-2 mt-4">
          DEPARTMENT
        </div>
        <nav className="space-y-1">
          {[
            { name: "Business and Marketing", color: "bg-blue-600" },
            { name: "Design", color: "bg-emerald-500" },
            { name: "Project Manager", color: "bg-orange-500" },
            { name: "Human Resource", color: "bg-purple-500" },
            { name: "Development", color: "bg-blue-500" },
          ].map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              {item.name}
            </button>
          ))}
        </nav>
        <div className="text-sm font-medium text-gray-500 px-3 py-2 mt-4">
          OTHER
        </div>
        <nav className="space-y-1">
          {[
            { name: "Setting", icon: Settings },
            { name: "Help Center", icon: HelpCircle },
          ].map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <item.icon className="w-5 h-5 text-gray-500" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
