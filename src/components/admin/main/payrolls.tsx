import {
  Check,
  CircleArrowOutUpRight,
  DownloadCloudIcon,
  IndianRupee,
  Info,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import InitialAvatar from "../../../utility/initialAvatar";
import axiosInstance from "../../../api/axios";
import { EmployeePayrolls } from "../../../types/admin-dashboard/types";
import toast from "react-hot-toast";
import exportAsCsv from "../common/export";

export default function Payrolls() {
  const [payrolls, setPayrolls] = useState<EmployeePayrolls[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/employee_payrolls");
      setPayrolls(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
  
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);
  const filteredPayrolls = payrolls?.filter((payroll) =>
    payroll.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const updateStatus = async (id: string, status: "Paid" | "Unpaid") => {
    var getPayroll = payrolls.find((payroll) => payroll.id === id);
    if (getPayroll) {
      getPayroll.status = "Paid";
    }
    const response = await axiosInstance.put(`/employee_payrolls/${id}`, {
      ...getPayroll
    });
    if (response.status === 200) {
      toast.success("Payroll updated successfully");
      const updatedPayrolls = payrolls.map((payroll) => {
        if (payroll.id === id) {
          return { ...payroll, status };
        }
        return payroll;
      });
      setPayrolls(updatedPayrolls);
    }
  };
  const updateAllStatuses = async (status: "Paid" | "Unpaid") => {
    const updatedPayrolls = payrolls.map((payroll) => ({
      ...payroll,
      status,
    }));
  
    try {
      await Promise.all(
        updatedPayrolls.map((payroll) =>
          axiosInstance.put(`/employee_payrolls/${payroll.id}`, payroll)
        )
      );
  
      setPayrolls(updatedPayrolls);
  
      toast.success("All payrolls updated successfully");
    } catch (error) {
      console.error("Error updating payrolls:", error);
      toast.error("Failed to update payrolls. Please try again.");
    }
  };
  

  return (
    <div className="p-6 bg-lightMode-background dark:bg-darkMode-background min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-lightMode-accentBlue  rounded-lg flex items-center justify-center">
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
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-lightMode-primaryText dark:text-darkMode-primaryText border-2 border-borders-primary dark:border-borders-secondary rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground"
          onClick={() => exportAsCsv(payrolls, "payrolls")}
          >
            <DownloadCloudIcon
              size={18}
              className=" text-lightMode-primaryText dark:text-darkMode-primaryText"
            />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-lightMode-accentBlue  rounded-lg hover:bg-opacity-90"
          onClick={() => updateAllStatuses("Paid")}
          >
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
              {filteredPayrolls.map((payroll) => (
                <tr
                  key={payroll.id}
                  className="border-b border-borders-primary dark:border-borders-secondary"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <InitialAvatar name={payroll.name} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">
                          {payroll.name}
                        </p>
                        <p className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                          {payroll.payrollId}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {payroll.startDate}
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {payroll.endDate}
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {payroll.hours}
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    {payroll.hours}h 35m
                  </td>
                  <td className="px-4 py-3 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
                    ${payroll.amount.toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        payroll.status === "Paid"
                          ? "bg-lightMode-accentBlue/10 text-lightMode-accentBlue /10 dark:text-darkMode-accentBlue"
                          : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {payroll.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {payroll.status === "Unpaid" ?(<button className="px-3 py-1 text-sm border-2 border-borders-primary dark:border-borders-secondary rounded hover:bg-opacity-90"
                      onClick={() => updateStatus(payroll.id, "Paid")}>
                        Pay
                      </button>):(
                        <div className="text-sm flex items-center gap-1">
                          Paid
                        <Check className="w-5 h-5 text-green-500" />
                        
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
        {filteredPayrolls.length == 0 && 
      <div className="flex justify-center items-center h-[50vh]">
        <img src="/images/empty.svg" alt="No data" className="mt-6 block justify-center" width={400} height={300} />
      </div>
      }
      </div>
    </div>
  );
}
