import AdminDashboard from "../pages/admin";
import EmployeeDashboard from "../pages/employee";
import LandingPage from "../pages/landing-page";
import LoginPage from "../pages/login-page";
import { RouteConfigInterface } from "../types/routes";

export const routesConfig: RouteConfigInterface[] = [
  { path: "/", Component: LandingPage },
  { path: "/login", Component: LoginPage },
  { path: "/admin/dashboard", Component: AdminDashboard },
  { path: "/employee/dashboard", Component: EmployeeDashboard },
];
