

import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { Edit2, EditIcon, ZoomIn, ZoomOut } from "lucide-react";
import { useTheme } from "next-themes";
import InitialAvatar from "../../../utility/initialAvatar";

interface Employee {
  name: string;
  role: string;
  image: string;
  department?: string;
  children?: Employee[];
}

const orgData: Employee = {
  name: "Cameron Williamson",
  role: "Founder - CEO",
  image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
  children: [
    {
      name: "Leslie Alexander",
      role: "Head of Project Manager",
      image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
      department: "Business and Marketing",
      children: [
        {
          name: "Cody Firmansyah",
          role: "Senior Project Manager",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
        {
          name: "Jenni William",
          role: "Project Manager",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
      ],
    },
    {
      name: "Brooklyn Simmons",
      role: "Creative Director",
      image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
      department: "Design",
      children: [
        {
          name: "Ralph Edwards",
          role: "Senior UX Designer",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
        {
          name: "Brooklyn Hehe",
          role: "Senior Graphic Design",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
        {
          name: "Vidi Gutierrezz",
          role: "UX Designer",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
        {
          name: "Pablo Hive",
          role: "Graphic Design",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
      ],
    },
    {
      name: "Cody Fisher",
      role: "Head of Development",
      image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
      department: "Development",
      children: [
        {
          name: "Asther Mulyani",
          role: "Senior Front-End",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
        {
          name: "Jenny Wilson",
          role: "QA Engineering",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
        {
          name: "Eden Khoiruddin",
          role: "Back-End",
          image: `https://avatar.iran.liara.run/public/${getRandomNumber()}`,
        },
      ],
    },
  ],
};


const EmployeeNode: React.FC<{ employee: Employee }> = ({ employee }) => (
  <div className="flex flex-col items-center">
    <div className="relative flex flex-col items-center">
      <div className="flex flex-col items-center justify-center p-3 bg-white dark:bg-black rounded-lg border-2 border-borders-primary dark:border-borders-secondary shadow-sm min-w-[200px]">
        <InitialAvatar name={employee.name} size="sm" borderRadius="full" />
        <div className="mt-2 text-center">
          <div className="font-medium text-sm">{employee.name}</div>
          <div className="text-xs text-gray-500">{employee.role}</div>
        </div>
      </div>
    </div>
  </div>
);

const renderTree = (data: Employee): React.ReactNode => (
  <TreeNode label={<EmployeeNode employee={data} />}>
    {data.children?.map((child, index) => (
      <React.Fragment key={index}>{renderTree(child)}</React.Fragment>
    ))}
  </TreeNode>
);

export default function OrganizationalChart() {
  const {theme} = useTheme();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-lightMode-primaryText dark:text-darkMode-primaryText">
          Organisational Chart
        </h2>
        <div className="flex items-center gap-4">
          <button className="px-4 py-[.6rem] text-sm flex items-center gap-2 text-lightMode-primaryText dark:text-darkMode-primaryText border-2  rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground border-borders-primary dark:border-borders-secondary">
            <EditIcon
              className="text-lightMode-primaryText dark:text-darkMode-primaryText"
              size={18}
            />
            Edit Organisation
          </button>
        </div>
      </div>
      <div
        className="flex w-[calc(100vw-19.5rem)]
    h-[calc(100vh-260px)] overflow-auto componentScroll  
    bg-dots-pattern border-2 border-borders-primary dark:border-borders-secondary rounded-xl p-8"
      >
        <div>
          <Tree
            lineWidth={"2px"}
            lineColor={theme === "dark" ? "#4B5563" : "#E5E7EB"}
            lineBorderRadius={"10px"}
            label={<EmployeeNode employee={orgData} />}
          >
            {orgData.children?.map((child, index) => (
              <React.Fragment key={index}>{renderTree(child)}</React.Fragment>
            ))}
          </Tree>
        </div>
      </div>
    </div>
  );
}
export function getRandomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}
