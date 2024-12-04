import {
  Mail,
  Phone,
  Smartphone,
  Video,
  Edit,
  MoreVertical,
  Download,
  User2,
  Anchor,
  PersonStanding,
  Cake,
  Database,
  MailCheck,
  Building,
  Info,
  Timer,
} from "lucide-react";
import InitialAvatar from "../../../utility/initialAvatar";

export default function Details() {
  const appointments = [
    {
      date: "12 Oct 2023",
      title: "Prosthetic Tooth Fabrication",
      doctor: "Drg. Wade Warren",
      color: "bg-blue-500",
    },
    {
      date: "12 Sep 2023",
      title: "Post-Surgical Care",
      doctor: "Drg.Marvin McKinney",
      color: "bg-red-500",
    },
    {
      date: "12 Aug 2023",
      title: "Implant Placement",
      doctor: "Drg.Floyd Miles",
      color: "bg-green-500",
    },
  ];
  return (
    <div className="h-screen overflow-auto p-6 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-lightMode-accentBlue rounded-lg flex items-center justify-center">
          <User2 className="w-6 h-6 text-white" />
        </div>
        <div className="ml-2">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Employee Details
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            View all your personal, professional and other details here.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <InitialAvatar name="Jerome Bellingham" borderRadius="full" />
            </div>
            <div>
              <h1 className="text-xl flex items-center gap-4 font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                Jerome Bellingham
                <span className="text-xs bg-lightMode-accentBlue/10  text-lightMode-accentBlue dark:text-darkMode-accentBlue rounded-md px-2 py-1 border border-lightMode-accentBlue">
                  Employee
                </span>
              </h1>
              <p className="text-sm flex items-center gap-2 text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-lg">
              <Mail className="" size={18} />
            </button>
            <button className="flex p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-lg">
              <Phone className="" size={18} />
            </button>
            <button className="flex p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-lg">
              <Video className="" size={18} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-darkMode-background rounded-xl p-6 border-2 border-borders-primary dark:border-borders-secondary">
            <h2 className="text-2xl font-semibold mb-7 text-lightMode-primaryText dark:text-darkMode-primaryText">
              Basic Informational
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-2">
                <PersonStanding size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Name
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    Jerome Bellingham
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Database size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Date of Joining
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    12 March 2023
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Cake size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Birthday
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    12 March 1993
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <MailCheck size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Registered Email
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    john@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Building size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Department
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    Software (Full-Time)
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Info size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Employee Code
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    EMP004
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Timer size={20} />
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Work Schedule
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-darkMode-background rounded-xl p-6 border-2 border-borders-primary dark:border-borders-secondary">
            <h2 className="text-2xl font-semibold mb-7 text-lightMode-primaryText dark:text-darkMode-primaryText">
              Your Timeline
            </h2>
            {appointments.map((appointment, index) => (
              <div key={index} className="relative pl-5">
                {index !== appointments.length - 1 && (
                  <div className="absolute left-[0.95rem] top-9 h-full w-px bg-borders-primary dark:bg-borders-secondary" />
                )}
                <div className="absolute left-2 top-5 w-4 h-4 rounded-full border-2 flex items-center justify-center border-blue-500">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">
                    {appointment.date}
                  </div>
                  <div className="border-2 border-borders-primary dark:border-borders-secondary p-3 rounded-lg">
                  <div className="font-medium mb-">{appointment.title}</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm">
                      {appointment.doctor}
                    </span>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Data Assurance Card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-lightMode-accentBlue to-lightMode-accentPurple rounded-xl p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="bg-white/20 rounded-lg p-2 inline-block mb-4">
                    <span className="text-2xl">234-234-232-32</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm opacity-80">Expiry</p>
                      <p>23/04/2024</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Status</p>
                      <p>Actived</p>
                    </div>
                  </div>
                </div>
                <button>
                  <MoreVertical className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Member Dentalica */}
            <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                  Member Dentalica
                </h2>
                <img
                  src="/placeholder.svg"
                  alt="Dental illustration"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    Start Date Joined
                  </p>
                  <p className="text-lightMode-primaryText dark:text-darkMode-primaryText">
                    12 Dec 2023
                  </p>
                </div>
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-lightMode-accentBlue">
                      32
                    </span>
                  </div>
                  <svg className="transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3C41E9"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-lightMode-secondaryText">
                    Days
                  </span>
                </div>
              </div>
              <button className="mt-4 text-lightMode-accentBlue hover:underline text-sm font-medium">
                Extend →
              </button>
            </div>
          </div>

          {/* History Dental */}
          <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-xl p-6 shadow-sm md:col-span-2">
            <h2 className="text-lg font-semibold mb-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
              History dental
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                    <th className="pb-4">ID</th>
                    <th className="pb-4">Type Treatment</th>
                    <th className="pb-4">Date</th>
                    <th className="pb-4">Result Treatment</th>
                    <th className="pb-4">Payment Status</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "#12324",
                      type: "Implant",
                      date: "12 Jun 2023",
                      result: "Well done",
                      status: "Pending",
                    },
                    {
                      id: "#20324",
                      type: "Route canal",
                      date: "4 May 2023",
                      result: "Well done",
                      status: "Paid",
                    },
                    // Add more rows as needed
                  ].map((item, index) => (
                    <tr key={index} className="border-t border-borders-primary">
                      <td className="py-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {item.id}
                      </td>
                      <td className="py-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {item.type}
                      </td>
                      <td className="py-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {item.date}
                      </td>
                      <td className="py-4 text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {item.result}
                      </td>
                      <td className="py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            item.status === "Paid"
                              ? "bg-lightMode-accentGreen/10 text-lightMode-accentGreen"
                              : "bg-lightMode-accentOrange/10 text-lightMode-accentOrange"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button>
                          <MoreVertical className="w-5 h-5 text-lightMode-secondaryText" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Agreement Documents */}
          <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
                Agreement of document
              </h2>
              <button>
                <MoreVertical className="w-6 h-6 text-lightMode-secondaryText" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Agreement_Meditation.zip", size: "2.3 mb" },
                { name: "Provision of information.pdf", size: "1.2 mb" },
                { name: "Agreement_Meditation.zip", size: "2.3 mb" },
                { name: "Provision of information.pdf", size: "1.2 mb" },
              ].map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-background"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-lightMode-secondaryBackground dark:bg-darkMode-background rounded">
                      <div className="w-8 h-8 flex items-center justify-center">
                        📄
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">
                        {doc.name}
                      </p>
                      <p className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText">
                        {doc.size}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-background rounded-full">
                    <Download className="w-4 h-4 text-lightMode-secondaryText" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
