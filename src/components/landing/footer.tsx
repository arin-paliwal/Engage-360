import { Copyright } from "lucide-react";

const Footer = () => {
  const handleEmailClick = () => {
    const emailAddress = "info@engage360.com";
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      emailAddress
    )}`;

    window.open(gmailComposeUrl, "_blank");
  };

  return (
    <div className="flex flex-col">
      <div className="bg-[#181818] text-white h-auto]">
        <div className="p-12">
          <div className="flex w-full flex-col ">
            <div className="flex justify-center sm:flex-row flex-col gap-[6rem]">
              <div className="flex sm:flex-row flex-col gap-[4rem]">
                <div className="flex flex-col w-[20rem]">
                  <h1 className="text-3xl font-semibold mb-4">Engage360</h1>
                  <h1 className="text-[#b1b1b1] cursor-pointer hover:text-white">
                    Phone: +91 8669340001
                  </h1>
                  <h1
                    onClick={handleEmailClick}
                    className="text-[#b1b1b1] cursor-pointer hover:text-white"
                  >
                    info@engage360.com
                  </h1>
                  <hr className="w-full h-[0.1rem] my-4 bg-secondary border-0 rounded" />
                  <h1 className="text-[#b1b1b1]">
                    Manage your workforce efficiently with Engage360, the ultimate HR dashboard for employee management, performance tracking, and more.
                  </h1>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1733263459274!5m2!1sen!2sin"
                  width="sm:400"
                  height="300"
                  className="border-0 rounded-md"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex gap-[4rem]">
                <div className="flex flex-col gap-1 sm:w-[15rem]">
                  <h1 className="text-xl">Quick Links</h1>
                  <hr className="w-full h-[0.1rem] my-4 bg-secondary border-0 rounded" />
                  <div className="flex flex-col gap-2">
                    {pages.map((page) => (
                      <a href={page.link} key={page.id}>
                        <h1 className="flex flex-col text-[#b1b1b1] cursor-pointer hover:text-white">
                          {page.name}
                        </h1>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1 sm:w-[50%]">
                  <h1 className="text-xl">User Links</h1>
                  <hr className="w-full h-[0.1rem] my-4 bg-secondary border-0 rounded" />
                  <div className="flex flex-col gap-2">
                    {pages2.map((page) => (
                      <a href={page.link} key={page.id}>
                        <h1 className="flex flex-col text-[#b1b1b1] cursor-pointer hover:text-white">
                          {page.name}
                        </h1>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#202020] flex sm:flex-row flex-col h-auto w-full text-[#b1b1b1] gap-6 p-3">
        <div className="sm:w-1/2 flex items-center justify-center h-full ">
          <h1 className="flex items-center">
            2024 Engage360 &nbsp;<Copyright size={16} /> &nbsp;All Rights Reserved
          </h1>
        </div>
        <div className="sm:w-1/2 flex items-center justify-center h-full ">
          <h1>Developed by Arin Paliwal</h1>
        </div>
        <div className="sm:w-1/2 flex items-center justify-center h-full cursor-pointer ">
          <div className="sm:px-4 flex sm:flex-row flex-col gap-8 w-full items-center justify-center">
            <div>
              Terms&nbsp;&&nbsp;Conditions
            </div>
            <div className="" onClick={() => window.scrollTo(0, 0)}>
              <h1>Back to Top</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const pages = [
  { id: 1, name: "About Us", link: "/about" },
  { id: 2, name: "Copyright", link: "/copyright" },
  { id: 3, name: "Privacy Policy", link: "/privacy-policy" },
  { id: 4, name: "FAQ's", link: "/faqs" },
  { id: 5, name: "Contact Us", link: "/contact" },
];
const pages2 = [
  { id: 6, name: "Login", link: "/onboarding/login" },
  { id: 7, name: "Register", link: "/onboarding/signup" },
  { id: 8, name: "Employee Dashboard", link: "/dashboard" },
  { id: 9, name: "My Profile", link: "/my-profile" },
  { id: 10, name: "Leave Requests", link: "/leave-requests" },
];
