

import { useState } from "react";
import { ArrowLeft, Search, Plus, Clock, Users, Link, Linkedin, PersonStanding } from "lucide-react";
import InitialAvatar from "../../../utility/initialAvatar";

interface Candidate {
  id: string;
  name: string;
  email: string;
  avatar: string;
  interviews: number;
  stages: number;
  status: "SOURCED" | "IN PROGRESS" | "INTERVIEW" | "HIRED" | "REJECTED";
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "Sonia Hoppe",
    email: "hao-sonia92@gmail.com",
    avatar: "/placeholder.svg?height=40&width=40",
    interviews: 4,
    stages: 1,
    status: "SOURCED",
  },
  {
    id: "2",
    name: "Wilbur Hackett",
    email: "wilbur-hack@yahoo.com",
    avatar: "/placeholder.svg?height=40&width=40",
    interviews: 2,
    stages: 1,
    status: "IN PROGRESS",
  },
  {
    id: "3",
    name: "Annette Dickinson",
    email: "anet-son@hotmail.com",
    avatar: "/placeholder.svg?height=40&width=40",
    interviews: 4,
    stages: 2,
    status: "INTERVIEW",
  },
  {
    id: "4",
    name: "Loretta Leuschke",
    email: "lor-lues@gmail.com",
    avatar: "/placeholder.svg?height=40&width=40",
    interviews: 5,
    stages: 4,
    status: "HIRED",
  },
  {
    id: "5",
    name: "Eunice Bergstrom",
    email: "eunice-83@hotmail.com",
    avatar: "/placeholder.svg?height=40&width=40",
    interviews: 2,
    stages: 1,
    status: "REJECTED",
  },
  // Add more candidates as needed...
];

enum StatusColors {
  SOURCED = "bg-lightMode-accentOrange/30",
  IN_PROGRESS = "bg-lightMode-accentGreen/30",
  INTERVIEW = "bg-lightMode-accentBlue/30",
  HIRED = "bg-lightMode-accentLightBlue/30",
  REJECTED = "bg-lightMode-accentPurple/30",
}

const statusStyles = {
  SOURCED: StatusColors.SOURCED,
  "IN PROGRESS": StatusColors.IN_PROGRESS,
  INTERVIEW: StatusColors.INTERVIEW,
  HIRED: StatusColors.HIRED,
  REJECTED: StatusColors.REJECTED,
};

const statusCount = {
  SOURCED: "05",
  "IN PROGRESS": "03",
  INTERVIEW: "03",
  HIRED: "01",
  REJECTED: "05",
};

export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedCandidates = filteredCandidates.reduce(
    (acc, candidate) => {
      if (!acc[candidate.status]) {
        acc[candidate.status] = [];
      }
      acc[candidate.status].push(candidate);
      return acc;
    },
    {} as Record<string, Candidate[]>
  );

  return (
    <div className="bg-lightMode-background dark:bg-darkMode-background">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold mt-4">Candidates</h2>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search name or email here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[300px] h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-darkMode-secondaryBackground text-lightMode-primaryText dark:text-darkMode-primaryText border-2 dark:border-borders-secondary border-borders-primary focus:outline-none focus:ring-2 focus:ring-lightMode-accentBlue dark:focus:ring-darkMode-accentBlue"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
          </div>
          <button className="h-10 px-4 rounded-lg bg-lightMode-accentBlue dark:bg-darkMode-accentBlue text-white flex items-center gap-2 hover:opacity-90">
            <Plus className="w-4 h-4" />
            Add Candidate
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {Object.entries(statusStyles).map(([status, style]) => (
          <div key={status} className="space-y-4">
            <div
              className={`px-3 w-full flex justify-between py-1.5 rounded-lg text-sm font-semibold items-center gap-2 ${style}`}
            >
              {status}
              <span className="px-1.5 py-0.5 rounded  dark:bg-darkMode-secondaryBackground text-xs">
                {statusCount[status as keyof typeof statusCount]}
              </span>
            </div>

            <div className="space-y-3">
              {groupedCandidates[status]?.map((candidate) => (
                <div
                  key={candidate.id}
                  className="p-3 bg-white dark:bg-darkMode-secondaryBackground rounded-lg border-2 border-borders-primary dark:border-borders-secondary text-sm flex flex-col"
                >
                  <div className="flex items-start gap-3">
                    {/* <img
                      src={`https://avatar.iran.liara.run/public/20`}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    /> */}
                    <InitialAvatar name={candidate.name} size="sm" borderRadius="full" />
                    <div>
                      <h3 className="font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {candidate.name}
                      </h3>
                      <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText truncate">
                        {candidate.email}
                      </p>
                    </div>
                  </div>
                  <hr className="border-[1.5px] border-borders-primary dark:border-borders-secondary my-6" />
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-sm hover:text-lightMode-accentBlue hover:dark:text-darkMode-accentBlue">
                      <PersonStanding className="" size={16} />
                      View Profile
                    </button>
                    <div className="flex items-center gap-3 text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {candidate.interviews}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {candidate.stages}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
