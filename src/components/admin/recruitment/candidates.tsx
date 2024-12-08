import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  Plus,
  Clock,
  Users,
  PersonStanding,
  Star,
} from "lucide-react";
import InitialAvatar from "../../../utility/initialAvatar";
import { candidateInterface } from "../../../types/admin-dashboard/types";
import toast from "react-hot-toast";
import axiosInstance from "../../../api/axios";

enum StatusColors {
  SOURCED = "bg-lightMode-accentOrange/30",
  INPROGRESS = "bg-lightMode-accentGreen/30",
  INTERVIEWED = "bg-lightMode-accentBlue/30",
  HIRED = "bg-lightMode-accentLightBlue/30",
  REJECTED = "bg-lightMode-accentPurple/30",
}

const statusStyles = {
  SOURCED: StatusColors.SOURCED,
  INPROGRESS: StatusColors.INPROGRESS,
  INTERVIEWED: StatusColors.INTERVIEWED,
  HIRED: StatusColors.HIRED,
  REJECTED: StatusColors.REJECTED,
};

export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(
    JSON.parse(localStorage.getItem("selectedJob") || "{}")
  );
  const [candidates, setCandidates] = useState<candidateInterface[]>(
    JSON.parse(localStorage.getItem("selectedJob") || "[]").candidates
  );
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCandidate, setNewCandidate] = useState<candidateInterface>({
    name: "Arin Paliwal",
    email: "arin@gmail.com",
    profile: "www.linkedin.com/arinpaliwal",
    appliedBeforeTimes: 4,
    status: "Sourced",
    rating: 3,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const filteredEmployees = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const groupedCandidates = filteredEmployees.reduce(
    (acc, candidate) => {
      const normalizedStatus = candidate.status.toUpperCase();
      if (!acc[normalizedStatus]) {
        acc[normalizedStatus] = [];
      }
      acc[normalizedStatus].push(candidate);
      return acc;
    },
    {} as Record<string, candidateInterface[]>
  );

  const handleAddCandidate = async () => {
    if(!newCandidate.name || !newCandidate.email) {
      toast.error("Name and Email are required");
      return;
    }
    try {
      const response = await axiosInstance.get(`/jobs/${selectedJob.id}`);
      const updatedJob = response.data;
      updatedJob.candidates.push(newCandidate);
      const newJob = await axiosInstance.put(
        `/jobs/${selectedJob.id}`,
        updatedJob
      );
      setSelectedJob(newJob.data);
      toast.success("Candidate added successfully");
      setCandidates((prevCandidates) => [...prevCandidates, newCandidate]);
      localStorage.setItem("selectedJob", JSON.stringify(newJob.data));
    } catch (error) {
      console.log(error);
      toast.error("Failed to add candidate");
    }

    setIsModalOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewCandidate({
      ...newCandidate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold mt-4">Candidates</h2>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search name or email here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[300px] h-10 pl-10 pr-4 rounded-lg text-lightMode-primaryText dark:text-darkMode-primaryText border-2 dark:border-borders-secondary border-borders-primary focus:outline-none focus:ring-2 focus:ring-lightMode-accentBlue dark:focus:ring-darkMode-accentBlue"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="h-10 px-4 rounded-lg bg-lightMode-accentBlue text-white flex items-center gap-2 hover:opacity-90"
          >
            <Plus className="w-4 h-4" />
            Add Candidate
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg w-[60vw]">
            <h3 className="text-xl font-semibold mb-4">Add New Candidate</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCandidate.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newCandidate.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="profile" className="block text-sm font-medium">
                  Profile
                </label>
                <input
                  type="text"
                  id="profile"
                  name="profile"
                  value={newCandidate.profile}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="appliedBeforeTimes"
                  className="block text-sm font-medium"
                >
                  Times Applied
                </label>
                <input
                  type="number"
                  id="appliedBeforeTimes"
                  name="appliedBeforeTimes"
                  value={newCandidate.appliedBeforeTimes}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={newCandidate.status}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded"
                >
                  <option value="Sourced">Sourced</option>
                  <option value="In-Progress">In Progress</option>
                  <option value="Interviewed">Interviewed</option>
                  <option value="Hired">Hired</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="rating" className="block text-sm font-medium">
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={newCandidate.rating}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-borders-primary dark:border-borders-secondary rounded"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="border-2 border-borders-primary dark:border-borders-secondary p-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCandidate}
                  className="border-2 border-lightMode-accentBlue bg-lightMode-accentBlue text-white p-2 rounded"
                >
                  Add Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-5 gap-4">
        {Object.entries(statusStyles).map(([status, style]) => (
          <div key={status} className="space-y-4">
            <div
              className={`px-3 w-full flex justify-between py-1.5 rounded-lg text-sm font-semibold items-center gap-2 ${style}`}
            >
              {status}
              <span className="px-1.5 py-0.5 rounded dark:bg-darkMode-secondaryBackground text-xs">
                {groupedCandidates[status]?.length || 0}
              </span>
            </div>

            <div className="space-y-3">
              {groupedCandidates[status]?.map((candidate, index) => (
                <div
                  key={index}
                  className="p-3 bg-white dark:bg-darkMode-secondaryBackground rounded-lg border-2 border-borders-primary dark:border-borders-secondary text-sm flex flex-col"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex w-10 shrink-0">
                      <InitialAvatar
                        name={candidate.name}
                        size="sm"
                        borderRadius="full"
                      />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <h3 className="font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {candidate.name}
                      </h3>
                      <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText truncate overflow-hidden">
                        {candidate.email}
                      </p>
                    </div>
                  </div>

                  <hr className="border-[1.5px] border-borders-primary dark:border-borders-secondary my-6" />
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-sm hover:text-lightMode-accentBlue hover:dark:text-darkMode-accentBlue">
                      <PersonStanding size={16} />
                      View Profile
                    </button>
                    <div className="flex items-center gap-3 text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {candidate.appliedBeforeTimes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star
                          className="w-4 h-4"
                          fill="#FFE234"
                          stroke="#FFE234"
                        />
                        {candidate.rating}
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
