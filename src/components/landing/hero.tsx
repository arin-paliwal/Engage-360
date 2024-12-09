import { ChevronRight, Moon, StarIcon, Sun, Tv } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  const navigate = useNavigate();
  const words = [
    "Businesses",
    "Startups",
    "Enterprises",
    "SMEs",
    "Corporations",
  ];
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <section className="relative flex bg-dots-pattern-hero flex-row h-screen items-center justify-center">
      <div className="absolute top-0 left-0 p-6 text-2xl">
        <h1 className="text-3xl font-semibold">Enagage360</h1>
      </div>
      <div className="absolute top-0 right-1/2 p-6 text-2xl"></div>
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-4xl tracking-wide md:text-6xl mb-3">
            A Revolutionary and
            <br /> Reliable Solution for
            <br />
            <span className="text-gray-600">
              <TypewriterComponent
                options={{
                  strings: words,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 0.2,
                }}
              />
            </span>
          </div>
          <p className="text-gray-600 mb-8">
            We provide a comprehensive suite of financial services <br /> to
            help businesses grow and prosper.
          </p>
          <div className="flex items-center gap-2 mb-6">
            <button
              className="border-2 border-lightMode-accentBlue bg-lightMode-accentBlue p-3 text-sm w-[12rem] text-white rounded-md flex items-center gap-2 justify-center"
              onClick={() => navigate("/login")}
            >
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
                <img src={`/avatars/1.jpg`} />
              </div>
              <div className="w-8 h-8 ml-[-.5em] border-2 border-white dark:border-black rounded-full">
                <img src={`/avatars/2.jpg`} />
              </div>
              <div className="w-8 h-8 ml-[-.5em] border-2 border-white dark:border-black rounded-full">
                <img src={`/avatars/3.jpg`} />
              </div>
              <div className="w-8 h-8 ml-[-.5em] border-2 border-white dark:border-black rounded-full">
                <img src={`/avatars/4.jpg`} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
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
          className="bject-cover h-screen"
        />
      </div>
    </section>
  );
}
