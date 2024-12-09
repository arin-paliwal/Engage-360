import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Edit,
  Calendar,
  Building,
  Briefcase,
  MapPin,
  ChevronLeft,
  X,
  Pencil,
  UserPlus,
} from "lucide-react";
import CandidatesPage from "./candidates";
import { Job } from "../../../types/admin-dashboard/types";

export default function JobDescription({
  subState,
  setSubState,
}: {
  subState: string;
  setSubState: Dispatch<SetStateAction<string>>;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [job, setJob] = useState<Job>(
    JSON.parse(localStorage.getItem("selectedJob") || "{}"),
  );

  const handleEditDescription = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveDescription = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 font-sans text-lightMode-primaryText dark:text-darkMode-primaryText">
      <header className="mb-6">
        <button
          className="flex items-center text-lightMode-secondaryText dark:text-darkMode-secondaryText hover:text-lightMode-accentBlue dark:hover:text-darkMode-accentBlue transition-colors"
          onClick={() => {
            setSubState("Active Jobs");
          }}
        >
          <ChevronLeft className="mr-2" size={18} />
          <span>Back to Job List</span>
        </button>
        <h1 className="text-2xl font-bold mt-4">{job.title}</h1>
      </header>
      <nav className="flex border-b-2 border-borders-primary dark:border-borders-secondary mb-6">
        {["Job Description", "Candidates"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 flex items-center gap-3 transition-colors ${
              subState === tab
                ? "border-b-2 border-lightMode-accentBlue dark:border-darkMode-accentBlue text-lightMode-accentBlue dark:text-darkMode-accentBlue"
                : "text-lightMode-secondaryText dark:text-darkMode-secondaryText hover:text-lightMode-primaryText dark:hover:text-darkMode-primaryText"
            }`}
            onClick={() => setSubState(tab)}
          >
            {tab === "Job Description" ? (
              <Pencil size={18} />
            ) : (
              <UserPlus size={18} />
            )}
            {tab}
          </button>
        ))}
      </nav>
      {subState === "Job Description" ? (
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                Job Description
              </h1>
              <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                View and edit job description details
              </p>
            </div>
            <button
              className="flex items-center gap-1 border-2 px-3 py-2 text-sm border-borders-primary dark:border-borders-secondary rounded-lg"
              onClick={handleEditDescription}
            >
              <Edit className="mr-1" size={18} />
              <span> Description</span>
            </button>
          </div>
          <hr className="border-borders-primary dark:border-borders-secondary mb-6" />
          <div className="flex flex-col lg:flex-row gap-6">
            <main className="w-[70%] flex flex-col">
              <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-lg p-6 mb-6">
                <section className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">About Company</h3>
                  <p className="text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    {job.aboutCompany}
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">What you'll do</h3>
                  <p className="text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-2">
                    Areas you will work on:
                  </p>
                  <ul className="list-disc pl-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    {job?.techStack?.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
                  <ul className="list-disc pl-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    {job?.requirements?.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>
            <aside className="w-[30%]">
              <div className="bg-lightMode-secondaryBackground dark:bg-darkMode-secondaryBackground rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Job Overview</h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Calendar,
                      label: "Active until",
                      value: job.activeUntil,
                    },
                    {
                      icon: Building,
                      label: "Department Type",
                      value: job.role,
                    },
                    { icon: Briefcase, label: "Job Type", value: job.type },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: job.location,
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <item.icon className="w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      ) : (
        <CandidatesPage />
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Job Description</h2>
              <button
                onClick={handleCloseModal}
                className="text-lightMode-secondaryText dark:text-darkMode-secondaryText hover:text-lightMode-primaryText dark:hover:text-darkMode-primaryText transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSaveDescription}>
              <div className="mb-4">
                <label
                  htmlFor="aboutCompany"
                  className="block text-sm font-medium mb-1"
                >
                  About Company
                </label>
                <textarea
                  id="aboutCompany"
                  rows={4}
                  className="w-full p-2 border rounded-md bg-lightMode-background dark:bg-darkMode-background text-lightMode-primaryText dark:text-darkMode-primaryText border-borders-primary dark:border-borders-secondary"
                  value={job.aboutCompany}
                  onChange={(e) =>
                    setJob({ ...job, aboutCompany: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="responsibilities"
                  className="block text-sm font-medium mb-1"
                >
                  Responsibilities
                </label>
                <textarea
                  id="responsibilities"
                  rows={6}
                  className="w-full p-2 border rounded-md bg-lightMode-background dark:bg-darkMode-background text-lightMode-primaryText dark:text-darkMode-primaryText border-borders-primary dark:border-borders-secondary"
                  value={job.techStack.join("\n")}
                  onChange={(e) =>
                    setJob({ ...job, techStack: e.target.value.split("\n") })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="requirements"
                  className="block text-sm font-medium mb-1"
                >
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  rows={6}
                  className="w-full p-2 border rounded-md bg-lightMode-background dark:bg-darkMode-background text-lightMode-primaryText dark:text-darkMode-primaryText border-borders-primary dark:border-borders-secondary"
                  value={job.requirements.join("\n")}
                  onChange={(e) =>
                    setJob({ ...job, requirements: e.target.value.split("\n") })
                  }
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-borders-primary dark:border-borders-secondary rounded-md text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-background transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue text-white rounded-md hover:bg-lightMode-accentLightBlue dark:hover:bg-darkMode-accentLightBlue transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
