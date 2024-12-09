import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { Edit2, EditIcon, ZoomIn, ZoomOut } from "lucide-react";
import { useTheme } from "next-themes";
import InitialAvatar from "../../../utility/initialAvatar";
import { orgData } from "../../../data/admin-dashboard";
import { OrganisationEmployee } from "../../../types/admin-dashboard/types";

const EmployeeNode: React.FC<{ employee: OrganisationEmployee }> = ({
  employee,
}) => (
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

const renderTree = (data: OrganisationEmployee): React.ReactNode => (
  <TreeNode label={<EmployeeNode employee={data} />}>
    {data.children?.map((child, index) => (
      <React.Fragment key={index}>{renderTree(child)}</React.Fragment>
    ))}
  </TreeNode>
);

export default function OrganizationalChart() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-lightMode-primaryText dark:text-darkMode-primaryText">
          Organisational Chart
        </h2>
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
