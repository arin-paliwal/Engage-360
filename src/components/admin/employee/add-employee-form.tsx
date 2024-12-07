import React, { useState } from "react";
import { EmployeeInterface } from "../../../types/common";
import { X } from "lucide-react";
import axiosInstance from "../../../api/axios";
import toast from "react-hot-toast";

interface AddUserReactProps {
  setIsAddingEmployee: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddUserForm: React.FC<AddUserReactProps> = ({ setIsAddingEmployee }) => {
  const [formData, setFormData] = useState<Partial<EmployeeInterface>>({
    id: "101",
    password: "welcome123",
    employeeId: "IND001",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.in",
    phone: "+91-9876543210",
    department: "IT",
    jobTitle: "Frontend Developer",
    contractType: "Full-time",
    avatar: null,
    dateOfJoining: "2023-11-01",
    dateOfBirth: "1992-08-15",
    managerId: 100,
    skills: ["HTML", "CSS", "JavaScript", "Angular"],
    address: {
      street: "12th Cross, MG Road",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560001",
      country: "India",
    },
    emergencyContact: {
      name: "Sunita Kumar",
      phone: "+91-8765432109",
      relation: "Spouse",
    },
    salary: {
      amount: 700000,
      currency: "INR",
    },
    workSchedule: {
      startTime: "10:00",
      endTime: "18:00",
      workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      averageStartTime: "10:15",
      averageEndTime: "18:10",
    },
    timeline: {
      hired: "2023-10-01",
      prohabation: "2024-03-31",
      permanent: "2024-04-01",
    },
    performanceRating: 4.3,
    probationStatus: "On Probation",
    projectsAssigned: ["E-Commerce Platform", "Internal Dashboard"],
    notes:
      "Strong coding skills with experience in Angular and responsive design.",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNestedChange = (
    category: string,
    field: string,
    value: string | number
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [category]: {
        ...(prevState[category as keyof EmployeeInterface] as object),
        [field]: value,
      },
    }));
  };

  const handleSubmit =async  (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axiosInstance.post("/employees",JSON.stringify(formData));
        console.log(response);
        toast.success("Employee added successfully");
        setIsAddingEmployee(false);
        window.location.reload();
    } catch (error) {
      toast.error("Error adding employee");
    }
  };

  return (
    <div className="h-[90vh] w-[90vw] rounded-lg z-50 overflow-auto bg-lightMode-background dark:bg-darkMode-background text-lightMode-primaryText dark:text-darkMode-primaryText">
      <form
        onSubmit={handleSubmit}
        className="bg-lightMode-secondaryBackground dark:bg-darkMode-secondaryBackground p-8 rounded-lg shadow-md"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-6 text-lightMode-accentBlue dark:text-darkMode-accentBlue">
            Add New Employee
          </h2>
          <X
            className="cursor-pointer "
            onClick={() => setIsAddingEmployee(false)}
          />
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Phone"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            placeholder="Employee ID"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            required
          />
          <input
            type="text"
            name="department"
            value={formData.department}
            placeholder="Department"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            placeholder="Job Title"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
          <select
            name="contractType"
            value={formData.contractType}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          >
            <option value="">Select Contract Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            placeholder="Date of Joining"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            placeholder="Date of Birth"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
        </div>

        {/* Address */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-lightMode-accentGreen dark:text-darkMode-accentGreen">
            Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
                value={formData.address?.street}
              type="text"
              placeholder="Street"
              onChange={(e) =>
                handleNestedChange("address", "street", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
            <input
              type="text"
              placeholder="City"
              value={formData.address?.city}
              onChange={(e) =>
                handleNestedChange("address", "city", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
            <input
              type="text"
              placeholder="State"
                value={formData.address?.state}
              onChange={(e) =>
                handleNestedChange("address", "state", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
            <input
              type="text"
              placeholder="Postal Code"
                value={formData.address?.postalCode}
              onChange={(e) =>
                handleNestedChange("address", "postalCode", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
            <input
              type="text"
              placeholder="Country"
                value={formData.address?.country}
              onChange={(e) =>
                handleNestedChange("address", "country", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-lightMode-accentOrange dark:text-darkMode-accentOrange">
            Emergency Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              value={formData.emergencyContact?.name}
              placeholder="Name"
              onChange={(e) =>
                handleNestedChange("emergencyContact", "name", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
            <input
              type="tel"
              placeholder="Phone"
                value={formData.emergencyContact?.phone}
              onChange={(e) =>
                handleNestedChange("emergencyContact", "phone", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
            <input
              type="text"
                value={formData.emergencyContact?.relation}
              placeholder="Relation"
              onChange={(e) =>
                handleNestedChange(
                  "emergencyContact",
                  "relation",
                  e.target.value
                )
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
          </div>
        </div>

        {/* Salary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-lightMode-accentPurple dark:text-darkMode-accentPurple">
            Salary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
                value={formData.salary?.amount}
              placeholder="Amount"
              onChange={(e) =>
                handleNestedChange(
                  "salary",
                  "amount",
                  parseFloat(e.target.value)
                )
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
            <select
              onChange={(e) =>
                handleNestedChange("salary", "currency", e.target.value)
              }
              value={formData.salary?.currency}
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="AED">AED</option>
            </select>
          </div>
        </div>

        {/* Work Schedule */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-lightMode-accentLightBlue dark:text-darkMode-accentLightBlue">
            Work Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="time"
              value={formData.workSchedule?.startTime}
              placeholder="Start Time"
              onChange={(e) =>
                handleNestedChange("workSchedule", "startTime", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
            <input
              type="time"
              placeholder="End Time"
              value={formData.workSchedule?.endTime}
              onChange={(e) =>
                handleNestedChange("workSchedule", "endTime", e.target.value)
              }
              className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            />
          </div>
        </div>

        {/* Additional Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="number"
            name="managerId"
            placeholder="Manager ID"
            value={formData.managerId||""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
          <input
            type="text"
            name="skills"
            value={formData.skills}
            placeholder="Skills (comma-separated)"
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value.split(",") })
            }
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
          <input
            type="number"
            name="performanceRating"
            placeholder="Performance Rating"
            value={formData.performanceRating||""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
          <input
            type="text"
            name="probationStatus"
            placeholder="Probation Status"
            value={formData.probationStatus}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
        </div>

        {/* Projects Assigned */}
        <div className="mb-6">
          <input
            type="text"
            value={formData.projectsAssigned?.join(",") || ""}
            name="projectsAssigned"
            placeholder="Projects Assigned (comma-separated)"
            onChange={(e) =>
              setFormData({
                ...formData,
                projectsAssigned: e.target.value.split(","),
              })
            }
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
          />
        </div>

        {/* Notes */}
        <div className="mb-6">
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-borders-primary dark:border-borders-secondary bg-lightMode-background dark:bg-darkMode-background"
            rows={4}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-lightMode-accentBlue dark:bg-darkMode-accentBlue text-white font-bold py-2 px-4 rounded hover:bg-lightMode-accentLightBlue dark:hover:bg-darkMode-accentLightBlue transition-colors duration-300"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
