export interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabId: string;
  icon: React.ReactNode;
  label: string;
}

export interface JobInterface {
  id: number;
  title: string;
  description: string;
  activeUntil: string;
  type: string[];
}

export interface Job {
  id: string;
  activeUntil: string;
  title: string;
  description: string;
  role:
    | "Developer"
    | "Designer"
    | "Manager"
    | "HR"
    | "Marketing"
    | "Sales"
    | "Finance";
  type: "Full Time" | "Part Time" | "Internship";
  aboutCompany: string;
  techStack: string[];
  requirements: string[];
  location: string;
  candidates: candidateInterface[];
}

export interface candidateInterface {
  name: string;
  email: string;
  profile: string;
  appliedBeforeTimes: number;
  status: "Sourced" | "In-Progress " | "Interviewed" | "Hired" | "Rejected";
  rating: number;
}

export interface EmployeePayrolls {
  id: string;
  name: string;
  avatar: string;
  payrollId: string;
  startDate: string;
  endDate: string;
  hours: number;
  amount: number;
  status: "Paid" | "Unpaid";
}
