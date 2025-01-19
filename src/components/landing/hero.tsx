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
    <main className="relative flex flex-col lg:flex-row bg-dots-pattern-hero lg:h-screen items-center justify-center">
      {/* <div className="absolute top-0 left-0 p-4 text-lg sm:p-6 sm:text-2xl">
    <h1 className="text-2xl sm:text-3xl font-semibold">Enagage360</h1>
  </div> */}
      <div className="w-full lg:w-1/2 flex justify-center p-4">
        <div className="flex flex-col justify-center gap-4">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-3 text-center lg:text-left">
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
          <p className="text-gray-600 text-sm sm:text-base mb-6 text-center lg:text-left">
            We provide a comprehensive suite of financial services{" "}
            <br className="hidden sm:block" />
            to help businesses grow and prosper.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
            <button
              className="border-2 border-lightMode-accentBlue bg-lightMode-accentBlue p-3 text-xs sm:text-sm w-full sm:w-[12rem] text-white rounded-md flex items-center gap-2 justify-center"
              onClick={() => navigate("/login")}
            >
              Get Started Now
              <ChevronRight size={16} />
            </button>
            <button className="border-2 border-borders-primary text-xs sm:text-sm dark:border-borders-secondary p-3 w-full sm:w-[12rem] rounded-md flex items-center gap-2 justify-center">
              View Live Demo
              <Tv size={16} />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 border-2 border-white dark:border-black rounded-full -ml-2 first:ml-0"
                  >
                    <img
                      src={`/avatars/${i + 1}.jpg`}
                      alt={`avatar-${i + 1}`}
                    />
                  </div>
                ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start items-center">
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
              <h1 className="text-xs sm:text-sm text-gray-600">
                Trusted by 2k+ Businesses
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex">
        <img
          src="/images/hero_11zon.jpg"
          alt="Platform Preview"
          className="object-cover h-48 sm:h-72 lg:h-screen w-full"
        />
      </div>
    </main>
  );
}
