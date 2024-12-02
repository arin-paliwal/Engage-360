import { Search, MoreVertical } from 'lucide-react'

interface Employee {
  id: number
  name: string
  email: string
  phone: string
  department: string
  jobTitle: string
  contractType: string
  attendance: string
  avatar: string
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    email: "brok-simms@gmail.com",
    phone: "(+62) 928 7273 7262",
    department: "Design",
    jobTitle: "Creative Director",
    contractType: "Onsite - Fulltime",
    attendance: "120h 32m",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 2,
    name: "Cody Fisher",
    email: "cody_fisher99@gmail.com",
    phone: "(+62) 928 7273 7262",
    department: "Development",
    jobTitle: "Head of Development",
    contractType: "Onsite - Fulltime",
    attendance: "120h 32m",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 3,
    name: "Ralph Edwards",
    email: "ralp_wedpg@gmail.com",
    phone: "(+62) 928 7273 7262",
    department: "Design",
    jobTitle: "Sr. UI/X Designer",
    contractType: "Onsite - Fulltime",
    attendance: "120h 32m",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 4,
    name: "Bessie Cooper",
    email: "bess_coo@mail.com",
    phone: "(+62) 928 7273 7262",
    department: "HR",
    jobTitle: "Sr. HR",
    contractType: "Onsite - Fulltime",
    attendance: "120h 32m",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 5,
    name: "Leslie Alexander",
    email: "alexander_le@mail.com",
    phone: "(+62) 928 7273 7262",
    department: "PM",
    jobTitle: "Head of PM",
    contractType: "Onsite - Fulltime",
    attendance: "120h 32m",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

const getDepartmentColor = (department: string) => {
  const colors = {
    'Design': 'bg-[#E2F9F3] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen',
    'Development': 'bg-[#E5F3FF] text-lightMode-accentLightBlue dark:bg-darkMode-accentLightBlue/20 dark:text-darkMode-accentLightBlue',
    'HR': 'bg-[#F4E8FF] text-lightMode-accentPurple dark:bg-darkMode-accentPurple/20 dark:text-darkMode-accentPurple',
    'PM': 'bg-[#FFF4E5] text-lightMode-accentOrange dark:bg-darkMode-accentOrange/20 dark:text-darkMode-accentOrange'
  }
  return colors[department as keyof typeof colors] || ''
}

export default function ManageEmployee() {
  return (
    <div className=''>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-lightMode-primaryText dark:text-darkMode-primaryText">
          Manage Employees
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search keyword..."
              className="w-64 h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-darkMode-secondaryBackground text-lightMode-primaryText dark:text-darkMode-primaryText border-2 focus:outline-none focus:border-lightMode-accentBlue dark:focus:border-darkMode-accentBlue"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-lg border border-borders-primary">
        <div className="grid grid-cols-[2fr,1.5fr,1fr,1.5fr,1fr,1fr,0.5fr] px-6 py-4 border-b border-borders-primary">
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Employee Name</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Phone Number</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Department</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Job Title</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Contract Type</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Attendance</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText"></div>
        </div>
        {employees.map((employee,index) => (
          <div key={employee.id} className="text-sm grid grid-cols-[2fr,1.5fr,1fr,1.5fr,1fr,1fr,0.5fr] px-6 py-4 border-b border-borders-primary last:border-b-0">
            <div className="flex items-center gap-3">
              <img src={`
              https://avatar.iran.liara.run/public/${index}
                `} alt="" className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">{employee.name}</div>
                <div className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">{employee.email}</div>
              </div>
            </div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">{employee.phone}</div>
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm ${getDepartmentColor(employee.department)}`}>
                {employee.department}
              </span>
            </div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">{employee.jobTitle}</div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">{employee.contractType}</div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">{employee.attendance}</div>
            <div className="flex items-center justify-end gap-2">
              <button className="p-1 hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground rounded">
                <MoreVertical className="w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

