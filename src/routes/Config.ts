import AdminDashboard from "../pages/admin";
import LandingPage from "../pages/landing-page";
import LoginPage from "../pages/login-page";
import SignupPage from "../pages/signup-page";
import { RouteConfigInterface } from "../types/routes";

export const routesConfig: RouteConfigInterface[] = [
  { path: "/", Component: LandingPage, isPrivate: false },
  { path: "/login", Component: LoginPage, isPrivate: false },
  { path: "/register", Component: SignupPage, isPrivate: false },
  { path: "/admin/dashboard", Component: AdminDashboard, isPrivate: true },
];
