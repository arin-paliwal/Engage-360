import { useAppContext } from "../../context";
import Dashboard from "./main/dashboard";
import Employee from "./main/employees";
import Payrolls from "./main/payrolls";
import Recruitment from "./main/recruitment";
import Schedule from "./main/schedule";

const AdminDashboardComponent = () => {
  const { state } = useAppContext(); 

  const renderComponent = () => {
    switch (state.adminState) {
      case "Dashboard":
        return <Dashboard />;
      case "Employee":
        return <Employee />;
      case "Recruitment":
        return <Recruitment />;
      case "Payroll":
        return <Payrolls />;
      case "Schedule":
        return <Schedule />;
      default:
        return <div>Please select a valid admin state.</div>;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default AdminDashboardComponent;
