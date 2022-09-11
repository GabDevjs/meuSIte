import { Disclosure, Transition } from "@headlessui/react";
import { BsFillCaretDownFill, BsWhatsapp } from "react-icons/bs";
import { Button } from "./Button";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

export const WhatsappBar = () => {
  return (
    <div className="w-full -z-20 left-0 right-0 top-0">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button>
              <div className="whats  w-screen text-white">
                <div className="mx-auto flex h-8 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
                  {/* Currency selector */}
                  <div className="flex justify-center items-center">
                    <div className="flex items-center space-x-6">
                      <div>
                        <BsWhatsapp className="inline" />
                      </div>
                      <h3 className="text-sm font-semibold  md:text-lg w-full">
                        Entre em contato conosco via Whatsapp
                      </h3>
                      <div>
                        <BsFillCaretDownFill
                          className={` ${
                            open ? "transform rotate-180 transition-all" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <div className="whats w-full flex-col flex border-t border-black border-opacity-10 justify-center items-center py-8 text-white">
                  <h1 className="text-2xl font-semibold">
                    Ficou interesado? Entre em contato!
                  </h1>
                  <div className="flex justify-center items-center w-full">
            
                    <div className="flex justify-center items-center p-4 flex-col w-full md:w-[40%]">
                      <p className="max-w-md text-lg" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quo omnis reprehenderit similique voluptatum,
                        cupiditate magnam laborum deserunt consectetur numquam
                        officiis.
                      </p>
                      <Button
                        name="WhatsApp"
                        className="px-16 rounded-lg mt-3 py-4 bg-[#25d366] shadow-xl  hover:bg-secondy-green hover:scale-110 btn-2 ease-in-out transition-all duration-300 "
                      > 
                        <BsWhatsapp className="inline" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};
