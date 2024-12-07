import AdminDashboardComponent from "../../components/admin";
import Sidebar from "../../components/admin/common/admin-sidebar";
import withAuthCheck from "../../hoc";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <AdminDashboardComponent />
      </div>
    </div>
  );
};

export default withAuthCheck(AdminDashboard, 1);
