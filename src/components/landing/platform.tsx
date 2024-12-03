export default function Platform() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-2">
          One Customer Platform
        </h2>
        <p className="text-gray-700 text-center mb-12 text-3xl">
          Everyone's Business
        </p>
        <div className="grid md:grid-cols-3 gap-8 px-6 py-8">
          {[
            {
              title: "Employee Management and Payroll",
              description:
                "Manage your employees, their payroll and their performance all in one place.",
              image: "/images/employees.jpg",
              color: "#E6F7FF",
              tag: "Employee Management",
            },
            {
              title: "Accounts payable and Metrics",
              description:
                "Manage your accounts payable, invoicing and track your business metrics.",
              image: "/images/graphs.jpg",
              color: "#FBFAF5",
              tag: "Accounting",
            },
            {
              title: "Task and Project Management",
              description:
                "Manage your tasks, projects and track time spent on tasks.",
              image: "/images/todos.jpg",
              color: "#F5F9FC",
              tag: "Task Management",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-4 rounded-lg w-full flex flex-col duration-300"
              style={{ backgroundColor: feature.color }}
            >
              <div className="w-full mb-4 h-full">
                <img
                  src={feature.image}
                  alt={feature.image}
                  className="w-full h-full rounded object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 px-4">
                <h3 className="px-2 py-1 rounded-md bg-[#cfd5da] w-fit mb-3 text-xs">
                  {feature.tag}
                </h3>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
