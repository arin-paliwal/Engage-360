import EmployeeDashboardComponent from "../../components/employee";
import EmployeeSidebar from "../../components/employee/common/employee-sidebar";

const EmployeeDashboard = () => {
  return (
    <div className="flex">
      <EmployeeSidebar />
      <div className="flex-1 ml-64">
        <EmployeeDashboardComponent />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
