import { platform_data } from "../../data/landing-page";

export default function Platform() {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-12">
  <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4">
    One Customer Platform
  </h2>
  <p className="text-gray-700 text-center mb-12 text-lg sm:text-xl lg:text-3xl">
    Everyone's Business
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
    {platform_data.map((feature) => (
      <div
        key={feature.title}
        className="p-4 rounded-lg flex flex-col duration-300"
        style={{ backgroundColor: feature.color }}
      >
        <div className="w-full mb-4 h-48 sm:h-56 lg:h-64">
          <img
            src={feature.image}
            alt={feature.image}
            className="rounded h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <h3 className="px-3 py-1 rounded-md bg-gray-200 w-fit mb-3 text-xs sm:text-sm">
            {feature.tag}
          </h3>
          <h3 className="font-medium text-lg sm:text-xl">{feature.title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
