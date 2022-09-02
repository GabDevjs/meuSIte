import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import ImageProfile from "../../assets/perfilpadrao.png";

export const ButtonProfile = () => {
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">Open user menu</span>
          <Image 
            src={ImageProfile}
            alt="profile"
            width={30}
            height={30}
            className="rounded-full"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <a
              href="#"
              className={" block px-4 py-2 text-sm text-gray-700"}
            >
              Your Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="#"
              className={" block px-4 py-2 text-sm text-gray-700"}
            >
              Settings
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="#"
              className={" block px-4 py-2 text-sm text-gray-700"}
            >
              Sign out
            </a>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
