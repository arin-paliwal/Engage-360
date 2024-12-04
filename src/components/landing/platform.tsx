import { platform_data } from "../../data/landing-page";

export default function Platform() {
  return (
    <section className="">
      <h2 className="text-4xl font-semibold text-center mb-2">
        One Customer Platform
      </h2>
      <p className="text-gray-700 text-center mb-12 text-3xl">
        Everyone's Business
      </p>
      <div className="flex flex-row gap-4 justify-center">
        {platform_data.map((feature) => (
          <div
            key={feature.title}
            className="p-4 rounded-lg w-[23rem] h-[30rem] flex flex-col duration-300"
            style={{ backgroundColor: feature.color }}
          >
            <div className="w-full mb-4 h-[15rem] ">
              <img
                src={feature.image}
                alt={feature.image}
                className="rounded h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 p-3">
              <h3 className="px-3 py-1 rounded-md bg-gray-200 w-fit mb-3 text-sm">
                {feature.tag}
              </h3>
              <h3 className="font-medium text-xl">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
