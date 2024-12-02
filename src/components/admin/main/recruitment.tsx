"use client";

import { useState } from "react";
import { ChevronDown, Plus, Users2 } from "lucide-react";
import { jobs } from "../../../data/admin-dashboard";

const categoryColors: Record<string, string> = {
  Design: "#B6EDD8",
  Development: "#D5E3F8",
  "Business and Marketing": "#E3E5FC",
  "Project Manager": "#FFF2D7",
  HR: "#EAE4F9",
};

export default function Recruitment() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen p-6 bg-lightMode-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#3C41E9] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                Recruitment
              </h1>
              <p className="text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Manage recruitment process
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-[.6rem] text-sm flex items-center gap-2 text-lightMode-primaryText dark:text-darkMode-primaryText border border-gray-400 rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground"
            >
              <Users2 size={18} />
              <span>Active Jobs</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-[.6rem] text-sm flex items-center gap-2 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue text-white rounded-lg hover:opacity-90">
              <Plus size={18} />
              <span>Create New Job</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-darkMode-secondaryBackground rounded-xl p-5 border-2 border-borders-primary dark:border-borders-secondary"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="inline-flex px-3 py-1 rounded-md text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText border-2 border-borders-primary dark:border-borders-secondary">
                    Active until:&nbsp;
                    <span className="font-bold text-black">
                      {job.activeUntil}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-lightMode-primaryText dark:text-darkMode-primaryText">
                  {job.title}
                </h3>
                <p className="text-lightMode-secondaryText dark:text-darkMode-secondaryText mb-4 flex-grow text-sm">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm truncate">
                  <div
                    className="px-3 py-1 rounded-lg flex justify-center items-center"
                    style={{ backgroundColor: categoryColors[job.type[0]] }}
                  >
                    <span className="font-medium">{job.type[0]}</span>
                  </div>
                  <div
                    className="px-3 py-1 rounded-lg border-2 flex justify-center items-center"
                    style={{ backgroundColor: categoryColors[job.type[1]] }}
                  >
                    <span className="">{job.type[1]}</span>
                  </div>
                  <div
                    className="px-3 py-1 rounded-lg border-2 flex justify-center items-center"
                    style={{ backgroundColor: categoryColors[job.type[2]] }}
                  >
                    <span className="">{job.type[2]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
