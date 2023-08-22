import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const Modal = ({ className, title, descrip, isOpen, setIsOpen }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out  "
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    //   as={Fragment}
      >
      
     <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <Dialog onClose={() => setIsOpen(false)}>
     
      <div className=" flex-center  p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white">
          <Dialog.Title>
            <h2 className="font-bold sm:text-3xl text-xl ">Set Time</h2>
          </Dialog.Title>

          {/* ... */}
        </Dialog.Panel>
      </div>
      </Dialog>
    </Transition>
  );
};
