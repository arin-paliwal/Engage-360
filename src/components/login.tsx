import {
  ChevronLeft,
  Moon,
  Shield,
  Sun,
  Unlock,
  User2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import toast from "react-hot-toast";
import { create_access_token } from "../utility/access-token";

export default function Login() {
  const { theme, setTheme } = useTheme();
  const [formData, setFormData] = useState({
    employeeCode: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.get("/employees");
      const all_users = response.data;
      const matchedEmployee = all_users.find(
        (emp: { employeeId: string; password: string }) =>
          emp.employeeId === formData.employeeCode &&
          emp.password === formData.password
      );

      if (matchedEmployee) {
        if (matchedEmployee.role == 1) {
          toast.success("Admin login successful.");
          const token=create_access_token(1);
          localStorage.setItem("access_token", token);
          setTimeout(() => {
            navigate("/admin/dashboard");
          }, 1000);
        } else {
          toast.success("Employee login successful.");
          const token=create_access_token(2);
          localStorage.setItem("access_token", token);
          setTimeout(() => {
            navigate("/employee/dashboard");
          }, 1000);
        }
      } else {
        toast.error("Invalid employee code or password.");
      }
    } catch (err) {
      console.log("An error occurred while logging in. Please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="h-screen flex flex-wrap bg-lightMode-background dark:bg-darkMode-background">
      <div className="relative bg-dots-pattern-hero w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="absolute top-4 left-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 bg-lightMode-accentBlue text-white cursor-pointer hover:rotate-180 duration-300 transform rounded-full"
          >
            <ChevronLeft size={22} />
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-full hover:bg-lightMode-secondaryBackground hover:dark:bg-darkMode-secondaryBackground"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>
        <div className="max-w-md w-full">
          <div className="mb-8 text-center md:text-left">
            <div className="w-12 h-12 bg-lightMode-accentBlue rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4">
              <User2 size={24} color="#fff" />
            </div>
            <h1 className="text-2xl font-bold text-lightMode-primaryText dark:text-darkMode-primaryText">
              Employee Login
            </h1>
            <p className="text-lightMode-secondaryText dark:text-darkMode-secondaryText mt-2">
              Enter your employee code and password to access the Engage360
              dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-1">
                Employee Code*
              </label>
              <input
                type="text"
                name="employeeCode"
                value={formData.employeeCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-borders-primary dark:border-borders-secondary rounded-lg bg-white dark:bg-darkMode-secondaryBackground text-lightMode-primaryText dark:text-darkMode-primaryText focus:outline-none focus:ring-2 focus:ring-lightMode-accentBlue dark:focus:ring-darkMode-accentBlue"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-1">
                Password*
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-borders-primary dark:border-borders-secondary rounded-lg bg-white dark:bg-darkMode-secondaryBackground text-lightMode-primaryText dark:text-darkMode-primaryText focus:outline-none focus:ring-2 focus:ring-lightMode-accentBlue dark:focus:ring-darkMode-accentBlue"
                required
              />
            </div>


            <div className="text-sm flex items-center justify-between pt-4">
              <button
                type="submit"
                className="px-4 py-2 border-2 border-borders-primary dark:border-borders-secondary rounded-lg flex items-center gap-3 w-[10rem] justify-center"
              >
                Admin Login
                <Shield size={16} />
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-lightMode-accentBlue text-white rounded-lg flex items-center gap-3 w-[8rem] justify-center"
              >
                Login
                <Unlock size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <img
          src="/images/login_image.jpg"
          alt="Office workspace"
          className="object-cover h-screen w-screen"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <blockquote className="text-xl md:text-2xl font-medium mb-8 max-w-lg">
            Engage360 has been a game changer for our business. The insights and
            analytics have helped us make data-driven decisions and improve our
            customer experience.
          </blockquote>
          <h1 className="text-sm">Engage360 &copy; 2024 All rights reserved</h1>
        </div>
      </div>
    </div>
  );
}
