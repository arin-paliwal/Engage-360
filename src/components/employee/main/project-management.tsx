import { useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  PlusIcon,
  FolderKanban,
  ChevronDown,
} from "lucide-react";

import getIcon from "../../../utility/get-file-icon";
import InitialAvatar from "../../../utility/initialAvatar";
import axiosInstance from "../../../api/axios";
import {
  ProjectInterface,
  WorkflowInterface,
} from "../../../types/employee-dashboard/project";

export default function ProjectManagement() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowInterface[]>([]);
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectInterface>(
    {} as ProjectInterface,
  );
  useEffect(() => {
    const fetchWorkflow = async () => {
      try {
        const response = await axiosInstance.get("/workflowSteps");
        setWorkflowSteps(response.data);
      } catch (error) {
        console.error("An error occurred while fetching workflow data.");
      }
    };
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("/initialProjects");
        setProjects(response.data);
        setSelectedProject(response.data[0]);
      } catch (error) {
        console.error("An error occurred while fetching project data.");
      }
    };
    fetchWorkflow();
    fetchProjects();
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [expandedTasks, setExpandedTasks] = useState<number[]>([]);

  const toggleExpand = (stepIndex: number) => {
    setExpandedTasks((prev) =>
      prev.includes(stepIndex)
        ? prev.filter((i) => i !== stepIndex)
        : [...prev, stepIndex],
    );
  };

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-lightMode-accentBlue rounded-lg flex items-center justify-center">
            <FolderKanban className="w-6 h-6 text-white" />
          </div>
          <div className="ml-2">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Project Management
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Manage your projects and track progress.
            </p>
          </div>
        </div>
        <div className="flex relative items-center gap-4" ref={modalRef}>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-lightMode-accentBlue text-white rounded-lg"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span>{selectedProject.name}</span>
            <ChevronDownIcon
              className={`transform duration-300
              ${isDropdownOpen ? " rotate-180 " : ""}`}
              size={18}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-12 right-1 w-56 rounded-md border-2 border-borders-primary dark:border-borders-secondary">
              <div className="py-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm bg-white hover:bg-lightMode-secondaryBackground dark:bg-black dark:hover:bg-darkMode-secondaryBackground"
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <main className="flex flex-col gap-12">
        <section className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">{selectedProject.name}</h3>
          <p className="text-lightMode-secondaryText dark:text-darkMode-secondaryText">
            {selectedProject.description}
          </p>
          <div className="flex flex-wrap gap-4 items-center mt-6">
            <div className="flex flex-col border-2 p-2 text-sm rounded-lg w-[10rem] border-borders-primary dark:border-borders-secondary">
              <span className="text-gray-500">Project Manager</span>
              <span className="font-medium">{selectedProject.lead}</span>
            </div>
            <div className="flex flex-col border-2 p-2 text-sm rounded-lg w-[10rem] border-borders-primary dark:border-borders-secondary">
              <span className="text-gray-500">Date Started</span>
              <span className="font-medium">{selectedProject.dateStarted}</span>
            </div>
            <div className="flex flex-col border-2 p-2 text-sm rounded-lg w-[10rem] border-borders-primary dark:border-borders-secondary">
              <span className="text-gray-500">Duration Needed</span>
              <span className="font-medium">{selectedProject.duration}</span>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex">
            <h2 className="text-2xl font-semibold">Files & Links</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex p-5 h-[4rem] justify-center items-center border-2 border-borders-primary dark:border-borders-secondary border-dotted rounded-lg">
              <PlusIcon
                className="text-lightMode-secondaryText dark:text-darkMode-secondaryText"
                size={20}
              />
            </button>
            {selectedProject?.attachedFiles?.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 h-[4rem] border-2 border-borders-primary border-dotted dark:border-borders-secondary rounded-lg"
              >
                <img
                  src={getIcon(file.type)}
                  alt={file.type}
                  className={`
                ${file.type === "docx" || file.type === "xlsx" || file.type === "pptx" || file.type == "csv" ? "w-14 h-14 ml-[-10px]" : "w-8 h-8"} rounded-lg  p-1
                  `}
                />
                <div className="flex flex-col">
                  <span className="text-sm">{file.name}</span>
                  <span className="text-xs text-gray-500">{file.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Work Progress</h2>
          {workflowSteps.map((step, stepIndex) => (
            <div key={stepIndex} className="space-y-3">
              <div className="space-y-4">
                {step.tasks
                  .slice(0, expandedTasks.includes(stepIndex) ? undefined : 1)
                  .map((task, taskIndex) => (
                    <div
                      key={taskIndex}
                      className="border-2 border-borders-primary dark:border-borders-secondary border-dashed rounded-lg p-4 space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <InitialAvatar name={task.assignee} size="sm" />
                          <div>
                            <p className="font-medium">{task.name}</p>
                            <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                              {task.assignee}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                          {task.timestamp}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {task.actions.map((action, actionIndex) => (
                          <div
                            key={actionIndex}
                            className="flex items-center gap-2 text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-lightMode-accentLightBlue dark:bg-darkMode-accentLightBlue" />
                            <span>
                              {action.action} by{" "}
                              <span className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                                {action.employee}
                              </span>
                              <span className="ml-1">({action.timestamp})</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                {step.tasks.length > 1 && (
                  <button
                    onClick={() => toggleExpand(stepIndex)}
                    className="flex items-center gap-2 text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText hover:text-lightMode-primaryText dark:hover:text-darkMode-primaryText transition-colors"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedTasks.includes(stepIndex) ? "rotate-180" : ""
                      }`}
                    />
                    Show{" "}
                    {expandedTasks.includes(stepIndex)
                      ? "less"
                      : `${step.tasks.length - 1} more`}{" "}
                    tasks
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
