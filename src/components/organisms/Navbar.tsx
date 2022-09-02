import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, ItemsNavbar, LogoNavabar } from "../atoms";
import { MdComputer } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const ItemsNavbarOptions = [
  {
    name: "Home",
    icon: FaHome,
  },
  {
    name: "About",
  },
  {
    name: "Product",
  },
];

export const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-100 shadow-md fixed top-0 right-0 left-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between py-3">
              {/* items Navbar */}

              <div className="w-44">
                <LogoNavabar />
              </div>

              <div className="hidden md:ml-6 md:flex justify-between ">
                <ItemsNavbar items={ItemsNavbarOptions} />
              </div>
              <div className="hidden md:ml-6 md:flex justify-between ">
                <Button
                  name="Sistema Boreal"
                  className="px-5 py-3 bg-primary-blue hover:bg-secondy-blue text-white transition-all delay-75 hover:shadow-xl  hover:shadow-primary-blue hover:drop-shadow-2xl"
                >
                  <MdComputer className="inline lg:mr-2 text-lg" />
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className=" flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
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
            <Disclosure.Panel className="md:hidden border-t">
              <div className="space-y-1 px-5 pt-2 pb-3">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <div className="border-b space-y-8 " >
                  <ItemsNavbar items={ItemsNavbarOptions} />
                </div>
                <div className="flex justify-center items-center py-3">
                  <Button
                    name="Sistema Boreal"
                    className="px-5 py-3 bg-slate-500 text-white"
                  >
                    <MdComputer className="inline lg:mr-2 text-lg" />
                  </Button>{" "}
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
