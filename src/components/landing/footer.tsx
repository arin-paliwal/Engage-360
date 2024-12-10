import { Copyright } from "lucide-react";

const Footer = () => {
  const handleEmailClick = () => {
    const emailAddress = "info@engage360.com";
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      emailAddress,
    )}`;

    window.open(gmailComposeUrl, "_blank");
  };

  return (
    <div className="flex flex-col">
      {/* Main Footer Section */}
      <div className="bg-[#181818] text-white">
        <div className="p-6 sm:p-12">
          <div className="flex flex-col gap-6 sm:gap-[6rem] lg:flex-row">
            {/* Branding and Map */}
            <div className="flex flex-col gap-6 xl:flex-row sm:gap-[4rem]">
              <div className="flex flex-col w-full sm:w-[20rem]">
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
                <p className="text-[#b1b1b1]">
                  Manage your workforce efficiently with Engage360, the ultimate
                  HR dashboard for employee management, performance tracking,
                  and more.
                </p>
              </div>
              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1733263459274!5m2!1sen!2sin"
                // width="100%"
                height="300"
                className="border-0 rounded-md"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Links Section */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-[4rem]">
              <div className="flex flex-col gap-2 w-full sm:w-[15rem]">
                <h1 className="text-xl font-semibold">Quick Links</h1>
                <hr className="w-full h-[0.1rem] my-4 bg-secondary border-0 rounded" />
                <div className="flex flex-col gap-2">
                  {pages.map((page) => (
                    <a href={page.link} key={page.id}>
                      <h1 className="text-[#b1b1b1] cursor-pointer hover:text-white">
                        {page.name}
                      </h1>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-[15rem]">
                <h1 className="text-xl font-semibold">User Links</h1>
                <hr className="w-full h-[0.1rem] my-4 bg-secondary border-0 rounded" />
                <div className="flex flex-col gap-2">
                  {pages2.map((page) => (
                    <a href={page.link} key={page.id}>
                      <h1 className="text-[#b1b1b1] cursor-pointer hover:text-white">
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

      {/* Bottom Footer Section */}
      <div className="bg-[#202020] flex flex-col sm:flex-row gap-6 sm:gap-0 p-3 text-[#b1b1b1] text-center">
        <div className="sm:w-1/3 flex justify-center">
          <h1 className="flex items-center">
            2024 Engage360 &nbsp;
            <Copyright size={16} />
            &nbsp; All Rights Reserved
          </h1>
        </div>
        <div className="sm:w-1/3 flex justify-center">
          <h1>Developed by Arin Paliwal</h1>
        </div>
        <div className="sm:w-1/3 flex flex-col sm:flex-row justify-center gap-4">
          <div>Terms&nbsp;&&nbsp;Conditions</div>
          <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            Back to Top
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
