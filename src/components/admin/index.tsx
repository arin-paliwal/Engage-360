import { useAppContext } from "../../context";
import Dashboard from "./main/dashboard";
import Employee from "./main/employees";
import Payrolls from "./main/payrolls";
import Recruitment from "./main/recruitment";
import Schedule from "./main/schedule";
import CandidatesPage from "./recruitment/candidates";
import JobDescription from "./recruitment/job-description";

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
      case "R-JD":
        return <JobDescription />;
      case "R-Candidates":
        return <CandidatesPage />;
      
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
