import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Plus, UserPlus, Users2 } from "lucide-react";
import JobDescription from "../recruitment/job-description";
import axiosInstance from "../../../api/axios";
import { Job } from "../../../types/admin-dashboard/types";
import toast from "react-hot-toast";
import AddJobForm from "../recruitment/create-job";

export default function Recruitment() {
  const [isOpen, setIsOpen] = useState(false);
  const [subState, setSubState] = useState(
    localStorage.getItem("recruitmentSubState") || "Active Jobs",
  );
  const [activeJobState, setActiveJobState] = useState("Active Jobs");

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("recruitmentSubState", subState);
  }, [subState]);
  const [fetchedJobs, setFetchedJobs] = useState<Job[]>([]);
  const [jobs, setJobs] = useState<Job[]>(fetchedJobs);
  const [openJobs, setOpenJobs] = useState<Job[]>([]);
  const [closedJobs, setClosedJobs] = useState<Job[]>([]);
  const [openAddJobModal, setOpenAddJobModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/jobs");
      setFetchedJobs(response.data);
      setOpenJobs(
        response.data.filter(
          (job: Job) => new Date(job.activeUntil) > new Date(),
        ),
      );
      setJobs(
        response.data.filter(
          (job: Job) => new Date(job.activeUntil) > new Date(),
        ),
      );
      setClosedJobs(
        response.data.filter(
          (job: Job) => new Date(job.activeUntil) < new Date(),
        ),
      );
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
              <div className="flex relative items-center gap-4" ref={modalRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="px-4 py-[.6rem] text-sm flex items-center gap-2 text-lightMode-primaryText dark:text-darkMode-primaryText border-2 border-borders-primary dark:border-borders-secondary rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground"
                >
                  <Users2
                    size={18}
                    className="text-lightMode-secondaryText dark:text-darkMode-secondaryText"
                  />
                  <span>{activeJobState}</span>
                  <ChevronDown
                    className={` duration-300 transform text-lightMode-secondaryText dark:text-darkMode-secondaryText ${isOpen ? " rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {isOpen && (
                  <div className="absolute top-12 w-[10rem] z-30 bg-white dark:bg-black flex flex-col  rounded-md border-2 border-borders-primary dark:border-borders-secondary">
                    <button
                      onClick={() => {
                        if (activeJobState === "Active Jobs") return;
                        setActiveJobState("Active Jobs");
                        setJobs(openJobs);
                        toast.remove();
                        toast.success("Switched to Active Jobs");
                      }}
                      className="flex justify-center relative py-2 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground "
                    >
                      Active Jobs
                      {activeJobState === "Active Jobs" && (
                        <span className="absolute left-3 text-lightMode-accentBlue dark:text-lightMode-accentBlue">
                          <Check size={18} />
                        </span>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        if (activeJobState === "Closed Jobs") return;
                        setActiveJobState("Closed Jobs");
                        setJobs(closedJobs);
                        toast.remove();
                        toast.success("Switched to Closed Jobs");
                      }}
                      className="py-2 text-sm text-lightMode-primaryText dark:text-darkMode-primaryText hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground "
                    >
                      Closed Jobs
                      {activeJobState === "Closed Jobs" && (
                        <span className="absolute left-3 text-lightMode-accentBlue dark:text-lightMode-accentBlue">
                          <Check size={18} />
                        </span>
                      )}
                    </button>
                  </div>
                )}
                <button
                  className="px-4 py-[.6rem] text-sm flex items-center gap-2 bg-lightMode-accentBlue dark:bg-lightMode-accentBlue text-white rounded-lg hover:opacity-90"
                  onClick={() => setOpenAddJobModal(true)}
                >
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
                    if (activeJobState !== "Closed Jobs") {
                      setSubState("Job Description");
                      localStorage.setItem("selectedJob", JSON.stringify(job));
                    }
                  }}
                  className={`bg-white dark:bg-darkMode-secondaryBackground rounded-xl p-5 border-2 border-borders-primary dark:border-borders-secondary 
                  hover:bg-lightMode-secondaryBackground dark:hover:bg-black flex gap-4 duration-300 transform 
                  ${activeJobState === "Closed Jobs" ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
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
                      <div className="px-3 py-1 rounded-lg flex justify-center items-center bg-lightMode-accentBlue text-white">
                        <span className="font-medium">{job.role}</span>
                      </div>
                      <div className="px-3 py-1 rounded-lg border-2 border-lightMode-accentBlue flex justify-center items-center">
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
      {openAddJobModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <AddJobForm setOpenAddJobModal={setOpenAddJobModal} />
        </div>
      )}
    </>
  );
}
