import { useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  CheckCircleIcon,
  XCircleIcon,
  PlusIcon,
  LinkIcon,
  FileIcon,
  FolderKanban,
  MousePointer2,
  File,
} from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import getIcon from "../../../utility/get-file-icon";

interface Project {
  id: string;
  name: string;
  description: string;
  lead: string;
  duration: string;
  timeNeeded: string;
  dateStarted: string;
  attachedFiles: {
    name: string;
    type: string;
  }[];
}

const projects: Project[] = [
  {
    id: "1",
    name: "StrataScratch",
    description:
      "StrataScratch is a data science interview platform with over 900+ real interview questions from top companies. Questions span SQL, Python, statistics, probability, modeling, product sense, and system design.",
    lead: "John Doe",
    duration: "3 months",
    timeNeeded: "400 hours",
    dateStarted: "2024-01-15",
    attachedFiles: [
      {
        name: "Project Plan",
        type: "pdf",
      },
      {
        name: "Meeting Notes",
        type: "docx",
      },
      {
        name: "Design Mockups",
        type: "pdf",
      },
      {
        name: "User Stories",
        type: "csv",
      },
      {
        name: "Database Schema",
        type: "sql",
      },
      {
        name: "API Documentation",
        type: "pdf",
      },
    ],
  },
  {
    id: "2",
    name: "HealthBridge",
    description:
      "HealthBridge is a telehealth platform connecting patients with licensed medical professionals, enabling consultations, prescriptions, and health monitoring through a secure app.",
    lead: "Jane Smith",
    duration: "6 months",
    timeNeeded: "800 hours",
    dateStarted: "2023-09-10",
    attachedFiles: [
      {
        name: "Project Plan",
        type: "pdf",
      },
      {
        name: "Market Research",
        type: "docx",
      },
      {
        name: "Telemedicine Guidelines",
        type: "pdf",
      },
      {
        name: "API Endpoints",
        type: "json",
      },
    ],
  },
  {
    id: "3",
    name: "GreenTech Insights",
    description:
      "A sustainability-focused analytics tool providing businesses insights into their carbon footprint and suggesting actionable strategies to achieve net-zero emissions.",
    lead: "Michael Johnson",
    duration: "4 months",
    timeNeeded: "600 hours",
    dateStarted: "2023-11-01",
    attachedFiles: [
      {
        name: "Project Charter",
        type: "pdf",
      },
      {
        name: "Carbon Footprint Model",
        type: "xlsx",
      },
      {
        name: "Sustainability Guidelines",
        type: "pdf",
      },
      {
        name: "API Documentation",
        type: "pdf",
      },
    ],
  },
  {
    id: "4",
    name: "EduMentor AI",
    description:
      "An AI-driven personalized education platform offering students tailored lesson plans, interactive quizzes, and progress tracking for academic success.",
    lead: "Sophia Lee",
    duration: "5 months",
    timeNeeded: "700 hours",
    dateStarted: "2024-02-01",
    attachedFiles: [
      {
        name: "Curriculum Overview",
        type: "docx",
      },
      {
        name: "AI Algorithm Specifications",
        type: "pdf",
      },
      {
        name: "Interactive Quizzes",
        type: "zip",
      },
      {
        name: "Progress Tracker",
        type: "xlsx",
      },
    ],
  },
  {
    id: "5",
    name: "CityWorks 360",
    description:
      "A civic engagement app where citizens can report issues, track municipal projects, and engage with city officials for better urban governance.",
    lead: "Emma Brown",
    duration: "3 months",
    timeNeeded: "500 hours",
    dateStarted: "2024-03-15",
    attachedFiles: [
      {
        name: "App Design",
        type: "pdf",
      },
      {
        name: "User Flow Diagrams",
        type: "svg",
      },
      {
        name: "API Documentation",
        type: "json",
      },
      {
        name: "Issue Reporting Guidelines",
        type: "docx",
      },
    ],
  },
];

const workflowSteps = [
  {
    title: "Project Preparation",
    tasks: [
      {
        name: "Requirements Collection",
        completed: true,
        assignee: "Rustam Musaiev",
        timestamp: "2 weeks ago",
      },
      {
        name: "Home Page Prototype",
        completed: true,
        assignee: "Rustam Musaiev",
        timestamp: "1 week ago",
      },
      {
        name: "Prototypes Of All Pages",
        completed: true,
        assignee: "Rustam Musaiev",
        timestamp: "1 week ago",
      },
    ],
  },
  {
    title: "UX/UI",
    tasks: [
      {
        name: "Home Page Prototype",
        completed: true,
        assignee: "Sergey Lopatin",
        timestamp: "5 days ago",
      },
      {
        name: "Prototypes Of All Pages",
        completed: true,
        assignee: "Sergey Lopatin",
        timestamp: "1 day ago",
      },
    ],
  },
  {
    title: "Development",
    tasks: [
      {
        name: "Backend Setup",
        completed: false,
        assignee: "Alex Johnson",
        timestamp: "In progress",
      },
      {
        name: "Frontend Implementation",
        completed: false,
        assignee: "Sarah Lee",
        timestamp: "Not started",
      },
    ],
  },
  {
    title: "Testing",
    tasks: [
      {
        name: "Unit Testing",
        completed: false,
        assignee: "Mike Brown",
        timestamp: "Not started",
      },
      {
        name: "Integration Testing",
        completed: false,
        assignee: "Lisa Wang",
        timestamp: "Not started",
      },
    ],
  },
];

export default function ProjectManagement() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            <MousePointer2 className="" size={18} />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white border-2">
              <div className="py-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm  hover:bg-gray-700"
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <main className="flex flex-col gap-6">
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
        <section className="flex flex-col gap-2">
          <div className="flex">
            <h2 className="text-2xl font-semibold">Files & Links</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex p-5 h-[4rem] justify-center items-center border-2 border-borders-primary dark:border-borders-secondary border-dotted rounded-lg">
              <PlusIcon className="text-lightMode-secondaryText dark:text-darkMode-secondaryText" size={20} />
            </button>
            {selectedProject.attachedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 h-[4rem] border-2 border-borders-primary dark:border-borders-secondary rounded-lg"
              >
                <img src={getIcon(file.type)} alt={file.type} className={`
                ${file.type === "docx" || file.type === "xlsx" || file.type === "pptx" || file.type=="csv" ? "w-14 h-14 ml-[-10px]" : "w-8 h-8"} rounded-lg bg-white p-1
                  `} />
                <div className="flex flex-col">
                  <span className="text-sm">{file.name}</span>
                  <span className="text-xs text-gray-500">{file.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Work Progress Timeline */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Work Progress</h2>
          <VerticalTimeline lineColor="#4B5563">
            {workflowSteps.map((step, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", color: "#000" }}
                contentArrowStyle={{ borderRight: "7px solid #1F2937" }}
                date={`Step ${index + 1}`}
                iconStyle={{
                  background: step.tasks.every((task) => task.completed)
                    ? "#10B981"
                    : "#4B5563",
                  color: "#fff",
                }}
                icon={
                  step.tasks.every((task) => task.completed) ? (
                    <CheckCircleIcon className="w-full h-full p-2" />
                  ) : (
                    <XCircleIcon className="w-full h-full p-2" />
                  )
                }
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <div className="space-y-2">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start space-x-2">
                      <div
                        className={`mt-1 h-4 w-4 rounded-full flex-shrink-0 ${
                          task.completed ? "bg-green-500" : "bg-gray-500"
                        }`}
                      />
                      <div>
                        <p className="font-medium">{task.name}</p>
                        <p className="text-sm ">
                          {task.assignee} • {task.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>
      </main>
    </div>
  );
}
