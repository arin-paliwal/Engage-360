export default function Platform() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-2">
          One Customer Platform
        </h2>
        <p className="text-gray-700 text-center mb-12 text-3xl">Everyone's Business</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
                title:"Employee Management, Management and Payroll",
                description:"Manage your employees, their payroll and their performance all in one place.",
                image:"/images/employees.jpg",
                color:"#e3eaef"
            },
            {
                title:"Accounts payable, Invoicing and Metrics",
                description:"Manage your accounts payable, invoicing and track your business metrics.",
                image:"/images/graphs.jpg",
                color:"#f3f1ea"
            },{
                title:"Task Management, Project Management and Time Tracking",
                description:"Manage your tasks, projects and track time spent on tasks.",
                image:"/images/todos.jpg",
                color:"#cfe3da"
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className={`p-6 rounded-lg bg-[${feature.color}]`}
            >
              <img
                src={feature.image}
                alt={feature.image}
                width={300}
                height={200}
                className="mb-4 rounded object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <a
                href="#"
                className="text-teal-600 hover:text-teal-700 mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
