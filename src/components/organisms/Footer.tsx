import Link from "next/link";
import { BsBehance, BsGithub, BsLinkedin } from "react-icons/bs";

export const navigation = {
  social: [
    {
      name: "Github",
      href: "https://github.com/GabDevjs",
      icon: BsGithub,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/flavio-gabriel77/",
      icon: BsLinkedin,
    },
    {
      name: "Behance",
      href: "https://www.behance.net/flaviogabriel?tracking_source=search_projects_recommended%7CLanding%20page%20-%20pizzaria",
      icon: BsBehance,
    },
  ],
};

export const Footer = () => {
  return (
    <footer
      className="bg-black "
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="flex justify-evenly items-center space-x-14 flex-wrap">
          <div className="space-y-8 xl:col-span-1 ">
            <div className="flex justify-center items-center space-x-10">
              {navigation.social.map((item, index) => (
                <div data-aos="zoom-in" key={index}>
                  <div className="bg-gray-900 dark:bg-zinc-600 bg-opacity-20 p-3  hover:scale-125 rounded-full group shadow-xl shadow-zinc-400 dark:shadow-zinc-700 flex justify-center flex-col max-w-xs text-gray-800 border border-gray-500 border-opacity-30 dark:hover:border-primary-orange hover:border-primary-orange hover:shadow-primary-orange dark:hover:shadow-primary-orange dark:border-zinc-400 transition-all duration-300 cursor-pointer">
                    <Link href={item.href}>
                      <a
                    
                        className="text-gray-700 dark:text-gray-300
                    group-hover:text-primary-orange"
                        target="_blank"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="  pt-8 flex justify-center items-center">
          <p
            data-aos="fade-up "
            className="text-xs sm:text-sm text-center text-gray-800 dark:text-gray-100 xl:text-center"
          >
            &copy; 2022 GabDevJs , Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
