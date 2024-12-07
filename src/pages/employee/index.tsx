import EmployeeDashboardComponent from "../../components/employee";
import EmployeeSidebar from "../../components/employee/common/employee-sidebar";
import withAuthCheck from "../../hoc";

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

export default withAuthCheck(EmployeeDashboard, 2);
