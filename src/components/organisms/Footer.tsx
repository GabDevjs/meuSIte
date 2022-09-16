import { BsBehance, BsGithub, BsLinkedin } from "react-icons/bs";

const navigation = {
  social: [
    {
      name: "icon github",
      href: "https://github.com/GabDevjs",
      icon: BsGithub,
    },
    {
      name: "icon linkedin",
      href:  "https://www.linkedin.com/in/flavio-gabriel77/",
      icon: BsLinkedin
    },
    {
      name: "icon behance",
      href: "https://www.behance.net/flaviogabriel?tracking_source=search_projects_recommended%7CLanding%20page%20-%20pizzaria",
      icon: BsBehance
    }
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-300 dark:bg-zinc-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:py-14 lg:px-8">
        <div className="flex justify-evenly items-center space-x-14 flex-wrap">
          <div className="space-y-8 xl:col-span-1 ">
            <div className="flex justify-center items-center space-x-10">
              {navigation.social.map((item) => (
                <div
                key={item.name}
                
                
                className='bg-gray-900 dark:bg-gray-400 bg-opacity-20 p-3  hover:scale-125 rounded-full group  transition-all duration-300 cursor-pointer'
                >
                  <a
                    href={item.href}
                    className="text-gray-500 dark:text-gray-600
                    group-hover:text-primary-orange"
                    target="_blank"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-8 w-8" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12  pt-8 flex justify-center items-center">
          <p 
            data-aos="fade-up "
          className="text-base text-gray-800 dark:text-gray-100 xl:text-center">
            &copy; 2022 GabDevJs , Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
