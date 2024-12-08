import { FC, useState } from "react";
import { Job } from "../../../types/admin-dashboard/types";
import axiosInstance from "../../../api/axios";
import toast from "react-hot-toast";

interface componenentProps {
  setOpenAddJobModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddJobForm: FC<componenentProps> = ({
  setOpenAddJobModal,
}: componenentProps) => {
  const [job, setJob] = useState<Job>({
    id: "J1023",
    activeUntil: "2024-12-31",
    title: "Frontend Developer",
    description:
      "We are looking for a skilled frontend developer to join our team and contribute to building responsive and scalable web applications.",
    role: "Developer",
    type: "Full Time",
    aboutCompany:
      "TechCorp is an industry leader in software solutions, delivering cutting-edge products to a global client base.",
    techStack: ["React", "TypeScript", "Vite", "CSS", "Redux"],
    requirements: [
      "Proficiency in React and TypeScript",
      "Strong knowledge of modern JavaScript (ES6+)",
      "Experience with state management libraries like Redux",
      "Understanding of responsive design principles",
      "Ability to work in a fast-paced, collaborative environment",
    ],
    location: "Remote",
    candidates: [],
  });

  const [techStackInput, setTechStackInput] = useState("");
  const [requirementInput, setRequirementInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleTechStackAdd = () => {
    if (techStackInput.trim()) {
      setJob((prevJob) => ({
        ...prevJob,
        techStack: [...prevJob.techStack, techStackInput.trim()],
      }));
      setTechStackInput("");
    }
  };

  const handleRequirementAdd = () => {
    if (requirementInput.trim()) {
      setJob((prevJob) => ({
        ...prevJob,
        requirements: [...prevJob.requirements, requirementInput.trim()],
      }));
      setRequirementInput("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/jobs", JSON.stringify(job));
      const data = await response.data;
      toast.success("Job created successfully");
      setOpenAddJobModal(false);
      console.log("Job created:", data);
      setJob({
        id: "",
        activeUntil: "",
        title: "",
        description: "",
        role: "Developer",
        type: "Full Time",
        aboutCompany: "",
        techStack: [],
        requirements: [],
        location: "",
        candidates: [],
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[60vw] h-[90vh] overflow-auto p-6 bg-white dark:bg-black shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Add New Job</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium ">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={job.title}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium ">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={job.description}
          onChange={handleInputChange}
          required
          rows={3}
          className="mt-1 block w-full rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium ">
          Role
        </label>
        <select
          id="role"
          name="role"
          value={job.role}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
        >
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Finance">Finance</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium ">
          Type
        </label>
        <select
          id="type"
          name="type"
          value={job.type}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
        >
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="activeUntil" className="block text-sm font-medium ">
          Active Until
        </label>
        <input
          type="date"
          id="activeUntil"
          name="activeUntil"
          value={job.activeUntil}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aboutCompany" className="block text-sm font-medium ">
          About Company
        </label>
        <textarea
          id="aboutCompany"
          name="aboutCompany"
          value={job.aboutCompany}
          onChange={handleInputChange}
          required
          rows={3}
          className="mt-1 block w-full rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="techStack" className="block text-sm font-medium ">
          Tech Stack
        </label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            id="techStack"
            value={techStackInput}
            onChange={(e) => setTechStackInput(e.target.value)}
            className="mt-1 w-full block rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
          />
          <button
            type="button"
            onClick={handleTechStackAdd}
            className="ml-2 w-[10rem] px-4 py-2 bg-lightMode-accentBlue text-white rounded-md border-2 border-lightMode-accentBlue"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {job.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="requirements" className="block text-sm font-medium ">
          Requirements
        </label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            id="requirements"
            value={requirementInput}
            onChange={(e) => setRequirementInput(e.target.value)}
            className="mt-1 block w-full rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
          />
          <button
            type="button"
            onClick={handleRequirementAdd}
            className="ml-2 w-[10rem] px-4 py-2 bg-lightMode-accentBlue text-white rounded-md border-2 border-lightMode-accentBlue"
          >
            Add
          </button>
        </div>
        <ul className="mt-2 list-disc list-inside">
          {job.requirements.map((req, index) => (
            <li key={index} className="text-sm ">
              {req}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium ">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={job.location}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md p-2 focus:outline-none border-2 border-borders-primary dark:border-borders-secondary"
        />
      </div>
      <div className="flex items-center gap-4 w-full justify-end">
        <button
          onClick={() => setOpenAddJobModal(false)}
          className="w-[10rem] px-4 py-2 bg-red-600 text-white rounded-md "
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="w-[10rem] px-4 py-2 bg-lightMode-accentBlue text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? "Creating..." : "Create Job"}
        </button>
      </div>
    </form>
  );
};

export default AddJobForm;
