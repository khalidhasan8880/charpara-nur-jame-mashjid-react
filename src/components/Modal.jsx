import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const Modal = ({ className, title, descrip, stopAudioTimer, isOpen, setIsOpen }) => {
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
      
     {/* <div className="fixed inset-0 bg-black/30" aria-hidden="true" /> */}
     <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white sm:px-10 px-5 py-5 w-1/2">
          <Dialog.Title className="sm:text-3xl text-xl font-bold">Set time</Dialog.Title>
          <Dialog.Description className="text-sm text-gray-300">Audio will automatically stop after the given time.</Dialog.Description>
    <div className="flex flex-col gap-1 my-2">
      <button onClick={()=>stopAudioTimer(5)} className="px-6 py-3 border rounded-md hover:bg-slate-200 font-semibold transition-hover duration-100">5 min</button>
      <button onClick={()=>stopAudioTimer(10)} className="px-6 py-3 border rounded-md hover:bg-slate-200 font-semibold transition-hover duration-100">10 min</button>
      <button onClick={()=>stopAudioTimer(15)} className="px-6 py-3 border rounded-md hover:bg-slate-200 font-semibold transition-hover duration-100">15 min</button>
      <button onClick={()=>stopAudioTimer(20)} className="px-6 py-3 border rounded-md hover:bg-slate-200 font-semibold transition-hover duration-100">20 min</button>
      <button onClick={()=>stopAudioTimer(25)} className="px-6 py-3 border rounded-md hover:bg-slate-200 font-semibold transition-hover duration-100">25 min</button>
    </div>
        </Dialog.Panel>
      </div>
    </Dialog>
    </Transition>
  );
};
