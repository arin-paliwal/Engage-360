import {
  CircleArrowOutUpRight,
  DownloadCloudIcon,
  IndianRupee,
  Info,
  Search,
} from "lucide-react";
import { useState } from "react";
import InitialAvatar from "../../../utility/initialAvatar";

interface Employee {
  id: string;
  name: string;
  avatar: string;
  payrollId: string;
  startDate: string;
  endDate: string;
  hours: number;
  amount: number;
  status: "Paid" | "Unpaid";
}

const employees: Employee[] = [
  {
    id: "1",
    name: "Brooklyn Simmons",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515726",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 22,
    amount: 2020.0,
    status: "Paid",
  },
  {
    id: "2",
    name: "Cody Fisher",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515727",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 22,
    amount: 2020.0,
    status: "Unpaid",
  },
  {
    id: "3",
    name: "Savannah Nguyen",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515728",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 30,
    amount: 2500.0,
    status: "Paid",
  },
  {
    id: "4",
    name: "Darlene Robertson",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515729",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 18,
    amount: 1500.0,
    status: "Unpaid",
  },
  {
    id: "5",
    name: "Wade Warren",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515730",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 40,
    amount: 3500.0,
    status: "Paid",
  },
  {
    id: "6",
    name: "Esther Howard",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515731",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 25,
    amount: 2200.0,
    status: "Paid",
  },
  {
    id: "7",
    name: "Eleanor Pena",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515732",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 20,
    amount: 1800.0,
    status: "Unpaid",
  },
  {
    id: "8",
    name: "Marvin McKinney",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515733",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 15,
    amount: 1400.0,
    status: "Paid",
  },
  {
    id: "9",
    name: "Kathryn Murphy",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515734",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 35,
    amount: 3200.0,
    status: "Unpaid",
  },
  {
    id: "10",
    name: "Ralph Edwards",
    avatar: "/placeholder.svg?height=32&width=32",
    payrollId: "#6515735",
    startDate: "Dec 29, 2023",
    endDate: "Jan 28, 2024",
    hours: 28,
    amount: 2400.0,
    status: "Paid",
  },
];

export default function Payrolls() {

  return (
    <div className="p-6 bg-lightMode-background dark:bg-darkMode-background min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue rounded-lg flex items-center justify-center">
            <IndianRupee className="w-6 h-6 text-white" />
          </div>
          <div className="ml-2">
            <h1 className="text-2xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
              Payrolls
            </h1>
            <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
              Manage all your playrolls and make sure everyone gets paid.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-lightMode-primaryText dark:text-darkMode-primaryText border-2 border-borders-primary dark:border-borders-secondary rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground">
            <DownloadCloudIcon
              size={18}
              className=" text-lightMode-primaryText dark:text-darkMode-primaryText"
            />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-lightMode-accentBlue dark:bg-darkMode-accentBlue rounded-lg hover:bg-opacity-90">
            <CircleArrowOutUpRight size={18} className="" />
            Pay All Invoices
          </button>
        </div>
      </div>
      <div className="p-4 mb-8 bg-white dark:bg-darkMode-secondaryBackground rounded-lg border border-borders-primary dark:border-borders-secondary">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
              Payment Method
            </h2>
            <Info
              className="text-lightMode-secondaryText dark:text-darkMode-secondaryText"
              size={18}
            />
          </div>
          <button className="text-sm px-4 py-[.4rem] rounded-lg flex items-center border-2 border-borders-primary dark:border-borders-secondary">
            <h1 className="text-lightMode-secondaryText dark:text-darkMode-secondaryText">
              Change Payment Method
            </h1>
          </button>
        </div>
        <div className="flex items-center gap-12">
          <div>
            <p className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-1">
              Cardholder name
            </p>
            <p className="text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
              Rocks Company Ltd
            </p>
          </div>
          <div>
            <p className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-1">
              Account Number
            </p>
            <p className="text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
              **** **** **** 6573
            </p>
          </div>
          <div>
            <p className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-1">
              Expiration
            </p>
            <p className="text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
              12/28
            </p>
          </div>
          <div>
            <p className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-1">
              Payment Method
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                Debit Card
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-lg border border-borders-primary dark:border-borders-secondary">
        <div className="p-4 border-b border-borders-primary dark:border-borders-secondary">
          <div className="flex items-center justify-between  gap-4">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">List Payroll</h2>
            </div>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
              <input
                type="text"
                placeholder="Search keyword..."
                className="w-full pl-10 pr-4 py-2 text-sm border-2 border-borders-primary dark:border-borders-secondary rounded-lg bg-transparent text-lightMode-primaryText dark:text-darkMode-primaryText placeholder-lightMode-secondaryText dark:placeholder-darkMode-secondaryText focus:outline-none focus:ring-2 focus:ring-lightMode-accentBlue dark:focus:ring-darkMode-accentBlue"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-borders-primary dark:border-borders-secondary">
                <th className="px-4 py-3 text-left text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                  Employee Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                  Start Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                  End Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                  Type Days
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                  Total Hours
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                  Invoice Amount
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                  Status
                </th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-borders-primary dark:border-borders-secondary"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {/* <img
                        src={`https://avatar.iran.liara.run/public/20`}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      /> */}
                      <InitialAvatar name={employee.name} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">
                          {employee.name}
                        </p>
                        <p className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                          {employee.payrollId}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {employee.startDate}
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {employee.endDate}
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {employee.hours}
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {employee.hours}h 35m
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    ${employee.amount.toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        employee.status === "Paid"
                          ? "bg-lightMode-accentBlue/10 text-lightMode-accentBlue dark:bg-darkMode-accentBlue/10 dark:text-darkMode-accentBlue"
                          : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      
                      <button className="px-3 py-1 text-sm border-2 border-borders-primary dark:border-borders-secondary rounded hover:bg-opacity-90">
                        Pay
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
