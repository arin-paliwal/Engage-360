export interface EmployeeInterface {
  id: number | string;
  password: string | number
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  jobTitle: string;
  contractType: "Full-time" | "Part-time" | "Contract" | "Internship";
  avatar: string | null;
  dateOfJoining: string;
  dateOfBirth: string;
  managerId: number | null;
  skills: string[];
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
  salary: {
    amount: number;
    currency: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "AED";
  };
  workSchedule: {
    startTime: string;
    endTime: string;
    workingDays: string[];
    averageStartTime: string;
    averageEndTime: string;
  };
  timeline?:{
    hired: string;
    prohabation: string;
    permanent: string;
  }
  performanceRating: number | null;
  probationStatus: string;
  projectsAssigned: string[];
  notes: string;
}
