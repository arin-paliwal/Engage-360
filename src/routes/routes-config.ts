import AdminDashboard from "../pages/admin";
import EmployeeDashboard from "../pages/employee";
import LandingPage from "../pages/landing-page";
import LoginPage from "../pages/login-page";
import { RouteConfigInterface } from "../types/routes";

export const routesConfig: RouteConfigInterface[] = [
  { path: "/", Component: LandingPage, isPrivate: false },
  { path: "/login", Component: LoginPage, isPrivate: false },
  { path: "/admin/dashboard", Component: AdminDashboard, isPrivate: true },
  { path: "/employee/dashboard", Component: EmployeeDashboard, isPrivate: true },

];
