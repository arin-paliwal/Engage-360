import { OrganisationEmployee } from "../../types/admin-dashboard/types";

export const orgData: OrganisationEmployee = {
  name: "Cameron Williamson",
  role: "Founder - CEO",
  children: [
    {
      name: "Leslie Alexander",
      role: "Head of Project Manager",
      department: "Business and Marketing",
      children: [
        {
          name: "Cody Firmansyah",
          role: "Senior Project Manager",
        },
        {
          name: "Jenni William",
          role: "Project Manager",
        },
      ],
    },
    {
      name: "Brooklyn Simmons",
      role: "Creative Director",
      department: "Design",
      children: [
        {
          name: "Ralph Edwards",
          role: "Senior UX Designer",
        },
        {
          name: "Brooklyn Hehe",
          role: "Senior Graphic Design",
        },
        {
          name: "Vidi Gutierrezz",
          role: "UX Designer",
        },
        {
          name: "Pablo Hive",
          role: "Graphic Design",
        },
      ],
    },
    {
      name: "Cody Fisher",
      role: "Head of Development",
      department: "Development",
      children: [
        {
          name: "Asther Mulyani",
          role: "Senior Front-End",
        },
        {
          name: "Jenny Wilson",
          role: "QA Engineering",
        },
        {
          name: "Eden Khoiruddin",
          role: "Back-End",
        },
      ],
    },
  ],
};
