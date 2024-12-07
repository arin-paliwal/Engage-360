import { useEffect, useState } from "react";
import { ChevronDown, Plus, UserPlus, Users2 } from "lucide-react";
import JobDescription from "../recruitment/job-description";
import axiosInstance from "../../../api/axios";
import { Job } from "../../../types/admin-dashboard/types";

export default function Recruitment() {
  const [isOpen, setIsOpen] = useState(false);
  const [subState, setSubState] = useState(localStorage.getItem("recruitmentSubState") || "Active Jobs");

  useEffect(() => {
    localStorage.setItem("recruitmentSubState", subState);
  }, [subState]);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/jobs");
      setJobs(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);


  return (
    <>
      {subState === "Active Jobs" ? (
        <div className="min-h-screen p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-lightMode-accentBlue flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                    Recruitment
                  </h1>
                  <p className="text-lightMode-secondaryText dark:text-darkMode-secondaryText text-sm">
                    Manage recruitment process
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="px-4 py-[.6rem] text-sm flex items-center gap-2 text-lightMode-primaryText dark:text-darkMode-primaryText border-2 border-borders-primary dark:border-borders-secondary rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground"
                >
                  <Users2 size={18} />
                  <span>Active Jobs</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="px-4 py-[.6rem] text-sm flex items-center gap-2 bg-lightMode-accentBlue dark:bg-lightMode-accentBlue text-white rounded-lg hover:opacity-90">
                  <Plus size={18} />
                  <span>Create New Job</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => {
                    setSubState("Job Description");
                    localStorage.setItem("selectedJob", JSON.stringify(job));
                  }}
                  className="bg-white dark:bg-darkMode-secondaryBackground rounded-xl p-5 border-2 border-borders-primary dark:border-borders-secondary hover:bg-lightMode-secondaryBackground dark:hover:bg-black cursor-pointer flex gap-4 duration-300 transform"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex px-3 py-1 rounded-md text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText border-2 border-borders-primary dark:border-borders-secondary">
                        Active until:&nbsp;
                        <span className="font-bold text-black dark:text-white">
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
                        className="px-3 py-1 rounded-lg flex justify-center items-center bg-lightMode-accentBlue text-white"
                      >
                        <span className="font-medium">
                          {job.role}
                        </span>
                      </div>
                      <div
                        className="px-3 py-1 rounded-lg border-2 border-lightMode-accentBlue flex justify-center items-center"
                      >
                        <span className="">{job.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <JobDescription subState={subState} setSubState={setSubState} />
      )}
    </>
  );
}
