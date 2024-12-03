'use client'

import {
  BarChart3,
  Users,
  UserPlus,
  DollarSign,
  Calendar,
  Settings,
  HelpCircle,
  Sun,
  Moon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useAppContext } from "../../../context"

export default function Sidebar() {
  const { state, dispatch } = useAppContext()
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed w-64 border-r border-borders-primary dark:border-borders-secondary h-screen z-50 bg-lightMode-background dark:bg-darkMode-background rounded-md">
      <div className="p-4 border-b border-borders-primary dark:border-borders-secondary">
        <div className="flex items-center gap-2">
          <img src="/logos/logo-icon.png" alt="logo" className="w-8 h-10" />
          <span className="font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">Engage360</span>
          <div className="flex items-center gap-2 ml-auto">
            {theme === "dark" ? (
              <Sun
                onClick={() => setTheme("light")}
                className="w-5 h-5 cursor-pointer text-darkMode-primaryText hover:text-darkMode-accentBlue transition-colors"
              />
            ) : (
              <Moon
                onClick={() => setTheme("dark")}
                className="w-5 h-5 cursor-pointer text-lightMode-primaryText hover:text-lightMode-accentBlue transition-colors"
              />
            )}
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText px-3 py-2">
          MAIN MENU
        </div>
        <nav className="space-y-1">
          {[
            // { name: "Dashboard", icon: BarChart3 },
            { name: "Employee", icon: Users },
            { name: "Recruitment", icon: UserPlus },
            { name: "Payroll", icon: DollarSign },
            { name: "Schedule", icon: Calendar },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() =>
                dispatch({ type: "SET_ADMIN_STATE", payload: item.name })
              }
              className={`flex items-center border-2 gap-3 w-full px-3 py-2 text-sm rounded-md transition-colors ${
                state.adminState === item.name
                  ? "bg-lightMode-accentBlue/20 text-lightMode-accentBlue dark:bg-darkMode-accentBlue/10 dark:text-darkMode-accentBlue border-lightMode-accentBlue dark:border-darkMode-accentBlue"
                  : "text-lightMode-primaryText dark:text-darkMode-primaryText border-transparent hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  state.adminState === item.name
                    ? "text-lightMode-accentBlue dark:text-darkMode-accentBlue"
                    : "text-lightMode-secondaryText dark:text-darkMode-secondaryText"
                }`}
              />
              {item.name}
            </button>
          ))}
        </nav>
        <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText px-3 py-2 mt-4">
          DEPARTMENT
        </div>
        <nav className="space-y-1">
          {[
            { name: "Business and Marketing", color: "bg-lightMode-accentBlue dark:bg-darkMode-accentBlue" },
            { name: "Design", color: "bg-lightMode-accentGreen dark:bg-darkMode-accentGreen" },
            { name: "Project Manager", color: "bg-lightMode-accentOrange dark:bg-darkMode-accentOrange" },
            { name: "Human Resource", color: "bg-lightMode-accentPurple dark:bg-darkMode-accentPurple" },
            { name: "Development", color: "bg-lightMode-accentLightBlue dark:bg-darkMode-accentLightBlue" },
          ].map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground transition-colors"
            >
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              {item.name}
            </button>
          ))}
        </nav>
        <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText px-3 py-2 mt-4">
          OTHER
        </div>
        <nav className="space-y-1">
          {[
            { name: "Setting", icon: Settings },
            { name: "Help Center", icon: HelpCircle },
          ].map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground transition-colors"
            >
              <item.icon className="w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

