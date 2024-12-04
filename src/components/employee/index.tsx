import { useAppContext } from "../../context";
import Attendance from "./main/attendance";
import Details from "./main/details";
import ProjectManagement from "./main/project-management";
import Schedule from "./main/schedule";
import ToDoList from "./main/to-do";

const EmployeeDashboardComponent = () => {
  const { state } = useAppContext();

  const renderComponent = () => {
    switch (state.employeeState) {
      case "Attendance":
        return <Attendance />;
      case "ToDo":
        return <ToDoList />;
      case "ProjectManagement":
        return <ProjectManagement />;
      case "Details":
        return <Details />;
      case "Schedule":
        return <Schedule />;

      default:
        return <div>Please select a valid admin state.</div>;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default EmployeeDashboardComponent;
