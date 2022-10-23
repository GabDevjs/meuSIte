import { Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ItemsNavbar, LogoNavabar, ThemeToggle } from "../atoms";
import {
  BsFillBasket3Fill,
  BsFillTelephoneFill,
  BsInfoCircleFill,
  BsWhatsapp,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";



const ItemsNavbarOptions = [
  {
    name: "Sobre",  
    icon: BsInfoCircleFill,
    href: "#sobre",
  },
  {
    name: "Projetos",
    icon: BsFillBasket3Fill,
    href: "#Projetos",
  },
  {
    name: "Contato",
    icon: BsFillTelephoneFill,
    href: "#contato",
  },
];

export const Navbar = () => {
  const [navPosition, setNavPosition] = useState(
    "-translate-y-80 md:-translate-y-0"
  );
  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setNavPosition("translate-y-0")
      : setNavPosition("translate-y-0");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <Popover
        as="nav"
        className={` mx-6 sm:mx-10 md:mx-28  mt-2  fixed top-0 right-0 left-0  z-50 transition-transform duration-500 md:duration-700 ${navPosition}`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto vidro bg-zinc-700 bg-opacity-20 dark:bg-zinc-400 dark:bg-opacity-20 border border-zinc-400 rounded-3xl  dark:border-opacity-25 md:rounded-full max-w-4xl px-6 sm:px-10 lg:px-28">
              <div className="flex h-12 xl:h-14 items-center justify-between py-3">
                {/* items Navbar */}

                <div className="">
                  <LogoNavabar />
                </div>

                <div className="hidden  md:flex justify-between  items-center">
                  <ItemsNavbar items={ItemsNavbarOptions} />
                  <ThemeToggle />
                </div>

                {/* Mobile menu button */}
                <div className=" flex md:hidden">
                  <Popover.Button className="flex items-center justify-between w-full text-lg p-1.5 border border-zinc-200 border-opacity-10 bg-zinc-100 bg-opacity-10 rounded-full hover:scale-110 transition-all duration-200">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
              
            </div>
            <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        >
                <Popover.Panel className="md:hidden absolute right-5 vidro bg-zinc-900 bg-opacity-20 dark:bg-zinc-400 dark:bg-opacity-20 px-5  rounded-xl  dark:border-opacity-25 md:rounded-full mt-2">
                  <div className="space-y-1 px-2 py-1">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <div className="border-b  border-black border-opacity-5 space-y-4 ">
                      {ItemsNavbarOptions.map((item: any, index: any) => {
                        return (
                          <span
                            key={index}
                            className="flex justify-center items-center h-full w-full py-2 px-3"
                          >
                            <Popover.Button>
                            <Link 
                                href={item.href}
                            >
                            <a
                                className="text-base xl:text-base  text-stone-800 dark:text-stone-200 font-medium hover:text-primary-orange hover:scale-110 transition-all flex justify-between items-center cursor-pointer"
                                onClick={() => {
                                  open = !open;
                                }}
                              >
                                <span className="mr-1">
                                  <item.icon />
                                </span>
                                {item.name}
                              </a>
                            </Link>
                            </Popover.Button>
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex justify-end items-center py-2">
                    <ThemeToggle />
                     
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
