import { ChevronRight, StarIcon, Tv } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex px-6 flex-row h-full items-center justify-center">
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-4xl tracking-wide md:text-6xl mb-3">
            A Revolutionary and
            <br /> Reliable Solution for
            <br />
            <span className="text-gray-600">Global Finance</span>
          </div>
          <p className="text-gray-600 mb-8">
            We provide a comprehensive suite of financial services <br /> to
            help businesses grow and prosper.
          </p>
          <div className="flex items-center gap-2 mb-3">
            <button className="border-2 border-lightMode-accentBlue bg-lightMode-accentBlue p-3 text-sm w-[12rem] text-white rounded-md flex items-center gap-2 justify-center">
              Get Started Now
              <ChevronRight size={16} />
            </button>
            <button className="border-2 border-borders-primary text-sm dark:border-borders-secondary p-3 w-[12rem] rounded-md flex items-center gap-2 justify-center">
              View Live Demo
              <Tv size={16} />
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex">
              <div className="w-8 h-8 border-2 border-white dark:border-black rounded-full">
                <img src={`https://avatar.iran.liara.run/public/45`} />
              </div>
              <div className="w-8 h-8 ml-[-.5em] border-2 border-white dark:border-black rounded-full">
                <img src={`https://avatar.iran.liara.run/public/46`} />
              </div>
              <div className="w-8 h-8 ml-[-.5em] border-2 border-white dark:border-black rounded-full">
                <img src={`https://avatar.iran.liara.run/public/47`} />
              </div>
              <div className="w-8 h-8 ml-[-.5em] border-2 border-white dark:border-black rounded-full">
                <img src={`https://avatar.iran.liara.run/public/48`} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    size={16}
                    fill="#71717a"
                    className="text-lightMode-secondaryText"
                  />
                ))}
              </div>
              <h1 className="text-sm text-gray-600">
                Trusted by 2k+ Businesses
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex">
        <img
          src="/images/hero.jpg"
          alt="Platform Preview"
          className="bject-cover rounded-lg h-[calc(100vh-4rem)]"
        />
      </div>
    </section>
  );
}
