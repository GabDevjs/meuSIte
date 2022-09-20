import { Disclosure, Transition } from "@headlessui/react";
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
    "-translate-y-80 md:-translate-y-20"
  );
  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setNavPosition("translate-y-0")
      : setNavPosition("-translate-y-[28rem] md:-translate-y-20");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <Disclosure
        as="nav"
        className={` mx-2  mt-2  fixed top-0 right-0 left-0  z-50 transition-transform duration-500 md:duration-700 ${navPosition}`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto vidro rounded-3xl md:rounded-full max-w-6xl px-4 sm:px-6 lg:px-28">
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
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="md:hidden border-t border-black border-opacity-5">
                  <div className="space-y-1 px-5 pt-2 pb-3">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <div className="border-b  border-black border-opacity-5 space-y-8 ">
                      {ItemsNavbarOptions.map((item: any, index: any) => {
                        return (
                          <span
                            key={index}
                            className="flex justify-center items-center h-full w-full py-2 px-3"
                          >
                            <Disclosure.Button>
                            <Link 
                                href={item.href}
                            >
                            <a
                                className="text-base xl:text-base  font-medium hover:text-primary-orange hover:scale-110 transition-all flex justify-between items-center cursor-pointer"
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
                            </Disclosure.Button>
                          </span>
                        );
                      })}
                    </div>
                    <div className=" py-2 flex justify-center items-center w-full">
                      <ThemeToggle />
                    </div>
                    <div className="flex justify-center items-center pb-3">
                      <Link
                        href="https://wa.me/5511981154749?text=Olá,%20Flavio!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
                        target="_blank"
                        aria-label="Whatsapp"
                      
                        
                      >
                      <a
                      
                        className="  custom-btn  btn-11 px-5 rounded-lg py-2 lg:py-3 bg-[#25d366] shadow-xl  hover:bg-secondy-green hover:scale-110 ease-in-out transition-all duration-300"
                      >
                        <span>
                          <BsWhatsapp className="inline lg:mr-2 text-lg" />
                        </span>
                        <span className="text-sm lg:text-base">Whatsapp</span>
                      </a>
                      </Link>
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};
