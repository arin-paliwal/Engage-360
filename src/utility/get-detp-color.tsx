export const getDepartmentColor = (department: string) => {
  const colors = {
    Design:
      "bg-[#E2F9F3] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen",
    Development:
      "bg-[#E5F3FF] text-lightMode-accentLightBlue dark:bg-darkMode-accentLightBlue/20 dark:text-darkMode-accentLightBlue",
    HR: "bg-[#F4E8FF] text-lightMode-accentPurple dark:bg-darkMode-accentPurple/20 dark:text-darkMode-accentPurple",
    Management:
      "bg-[#FFF4E5] text-lightMode-accentOrange dark:bg-darkMode-accentOrange/20 dark:text-darkMode-accentOrange",
    Sales:
      "bg-[#FFF0F0] text-lightMode-accentPurple dark:bg-darkMode-accentPurple/20 dark:text-darkMode-accentPurple",
    Marketing:
      "bg-[#F0F0FF] text-lightMode-accentBlue dark:bg-darkMode-accentBlue/20 dark:text-darkMode-accentBlue",
    Support:
      "bg-[#F0FFF0] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen",
  };
  return (
    colors[department as keyof typeof colors] ||
    "bg-[#FFF4E5] text-lightMode-accentOrange dark:bg-darkMode-accentOrange/20 dark:text-darkMode-accentOrange"
  );
};
export const leaveTypeStyles = {
  "Annual Leave":
    "bg-[#E5F3FF] text-lightMode-accentLightBlue dark:bg-darkMode-accentLightBlue/20 dark:text-darkMode-accentLightBlue",
  "Sick Leave":
    "bg-[#E2F9F3] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen",
  "Maternity Leave":
    "bg-[#FFF4E5] text-lightMode-accentOrange dark:bg-darkMode-accentOrange/20 dark:text-darkMode-accentOrange",
  "Paternity Leave":
    "bg-[#F4E8FF] text-lightMode-accentPurple dark:bg-darkMode-accentPurple/20 dark:text-darkMode-accentPurple",
  "Unpaid Leave":
    "bg-[#FFEBED] text-red-500 dark:bg-red-500/20 dark:text-red-500",
  "Compassionate Leave":
    "bg-[#F0F0FF] text-lightMode-accentBlue dark:bg-darkMode-accentBlue/20 dark:text-darkMode-accentBlue",
};
export const statusStyles = {
  Pending:
    "bg-[#FFF4E5] text-lightMode-accentOrange dark:bg-darkMode-accentOrange/20 dark:text-darkMode-accentOrange",
  Approved:
    "bg-[#E2F9F3] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen",
  Rejected: "bg-[#FFEBED] text-red-500 dark:bg-red-500/20 dark:text-red-500",
};
