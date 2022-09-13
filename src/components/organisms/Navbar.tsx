import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ItemsNavbar, LogoNavabar } from "../atoms";
import {
  BsFillBasket3Fill,
  BsFillTelephoneFill,
  BsInfoCircleFill,
  BsWhatsapp,
} from "react-icons/bs";
import { useEffect, useState } from "react";

const ItemsNavbarOptions = [
  {
    name: "Sobre",
    icon: BsInfoCircleFill,
  },
  {
    name: "Produtos",
    icon: BsFillBasket3Fill,
  },
  {
    name: "Contato",
    icon: BsFillTelephoneFill,
  },
];

export const Navbar = () => {
  const [navPosition, setNavPosition] = useState("-translate-y-80 md:-translate-y-28");
  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setNavPosition("translateY-y-0")
      : setNavPosition("-translate-y-96 md:-translate-y-28");
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
        className={` mx-2 md:mx-5 xl:mx-10 mt-2 rounded-lg shadow-md fixed top-0 right-0 left-0 ${navPosition} z-50 transition-transform duration-500`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto vidro max-w-7xl px-4 sm:px-6 lg:px-28">
              <div className="flex h-14 items-center justify-between py-3">
                {/* items Navbar */}

                <div className="w-44">
                  <LogoNavabar />
                </div>

                <div className="hidden md:ml-6 md:flex justify-between ">
                  <ItemsNavbar items={ItemsNavbarOptions} />
                </div>
                <div className="hidden md:ml-6 md:flex justify-center items-center ">
                  <div className=" flex justify-center items-center w-full">
                    <button className="  custom-btn  btn-11 px-5 rounded-lg py-2 lg:py-3 bg-[#25d366] shadow-xl  hover:bg-secondy-green hover:scale-110 ease-in-out transition-all duration-300">
                      <span>
                        <BsWhatsapp className="inline lg:mr-2 text-lg" />
                      </span>
                      <span className="text-sm lg:text-base">Whatsapp</span>
                    </button>
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className=" flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500">
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
                    <ItemsNavbar items={ItemsNavbarOptions} />
                  </div>
                  <div className="flex justify-center items-center py-3">
                    <button className="  custom-btn  btn-11 px-16 rounded-lg mt-3 py-4 bg-[#25d366] shadow-xl  hover:bg-secondy-green hover:scale-110 ease-in-out transition-all duration-300">
                      <span>
                        <BsWhatsapp className="inline lg:mr-2 text-lg" />
                      </span>
                      <span>Entre em Contato</span>
                    </button>
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
