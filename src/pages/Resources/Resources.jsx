import { Menu, Transition } from "@headlessui/react";
import {  useState } from "react";
import { FaBars,  } from "react-icons/fa";
import BanglaResources from "./BanglaResources";
import EnglishResources from "./EnglishResources";

export default function Example() {
  const [content, setContent] = useState("Bangla");
  // console.log(content);
  // const [Type, setType]= useState('Audio')
  const contentSet=(content)=>{
    setContent(content)
  }
  return (
    <section>
      <div className=" text-right sm:mb-2 mb-9">
        <Menu as="div" className="inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2  font-medium ">
              Content
              <FaBars
                className="ml-2 -mr-1 h-5 w-5 "
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
              <button
                    onClick={() => contentSet("Bangla")}
                    className={`${
                      content == "Bangla"
                        ? "bg-violet-500 text-white"
                        : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    Bangla
                  </button>
                  <button
                    onClick={() => contentSet("English")}
                    className={`${
                      content == "English"
                        ? "bg-violet-500 text-white"
                        : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    English
                  </button>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {content == "Bangla" ? (
        <BanglaResources></BanglaResources>
      ) : (
        <EnglishResources></EnglishResources>
      )}
    </section>
  );
}
