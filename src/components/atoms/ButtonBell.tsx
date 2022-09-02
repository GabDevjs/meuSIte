import { Popover, Transition } from "@headlessui/react";
import { BsBellFill } from "react-icons/bs";

export const ButtonBell = () => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <button
          type="button"
          className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="sr-only">View notifications</span>
          <BsBellFill className="h-4 w-4" aria-hidden="true" />
        </button>
      </Popover.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute -ml-28 z-50 bg-white shadow-lg border rounded-lg ">
          <div className="flex justify-center items-center">
            <div className="flex justify-center flex-col p-3">
              <div>
                <div className="flex justify-between items-center px-3">
                  <div className="flex items-center">
                    <BsBellFill className="h-4 w-4" aria-hidden="true" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      Notifications
                    </span>
                  </div>
                </div>
                {/* notificaões  */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
