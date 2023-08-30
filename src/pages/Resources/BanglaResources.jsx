import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa";

const BanglaResources = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // State to store selected option
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store selected option

  const typeChangeHandler = (event) => {
    setSelectedType(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Option:", selectedType);
    // You can perform any further actions with the selected option here
  };
  return (
    <section>
      <a
        className="shadow-md bg-blue-100 rounded-2xl h-10 w-full p-2"
        href="https://www.nakbanglapodcast.com/">
        Noman Ali Khan - All Audio
      </a>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-full flex-center gap-x-2 text-xl font-semibold text-center bg-slate-100">
        <FaPlus size={20}></FaPlus> Add a free Bangla resources
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900">
                    Add Your Resource
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      We cannot allow the uploading of photos, audio, or videos
                      from your personal phone.
                      <br />
                      <br />
                      If you know of any Islamic resources, please share only
                      website links or direct links to audio, video, or books
                      from freely accessible sources.
                    </p>
                  </div>
<form onSubmit={handleSubmit}>
<input className="border-2 w-full h-14 p-2 mt-3" placeholder="Paste your URL or Links" type="text" />
      <div >
      <fieldset className="flex flex-col">
      <legend>Select a content type:</legend>
      <label>
        <input
        className="m-2"
          type="radio"
          name="audio"
          value="Audio Resource"
          checked={selectedType === "Audio Resource"}
          onChange={typeChangeHandler}
        />
       Audio Resource
      </label>
      <label>
        <input
        className="m-2"
          type="radio"
          name="video"
          value="Video Resource"
          checked={selectedType === "Video Resource"}
          onChange={typeChangeHandler}
        />
       Video Resource
      </label>
      <label>
        <input
        className="m-2"
          type="radio"
          name="book"
          value="Book Resource"
          checked={selectedType === "Book Resource"}
          onChange={typeChangeHandler}
        />
       Book Resource
      </label>
      </fieldset>
      <fieldset className="flex flex-col">
      <legend>Select a content category:</legend>
      <label>
        <input
        className="m-2"
          type="radio"
          name="sunnah"
          value="sunnah"
          checked={selectedCategory === "sunnah"}
          onChange={categoryChangeHandler}
        />
       Hadith/Shunnah or Biography
      </label>
      <label>
        <input
        className="m-2"
          type="radio"
          name="lecture"
          value="Lecture"
          checked={selectedCategory === "Lecture"}
          onChange={categoryChangeHandler}
        />
       Lecture or Waz
      </label>
      <label>
        <input
        className="m-2"
          type="radio"
          name="quran"
          value="Quran"
          checked={selectedCategory === "Quran"}
          onChange={categoryChangeHandler}
        />
       Quran Related or Tafseer
      </label>
      <label>
        <input
        className="m-2"
          type="radio"
          name="other"
          value="Other"
          checked={selectedCategory === "Other"}
          onChange={categoryChangeHandler}
        />
       Other 
       </label>
      </fieldset>
      <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}>
                      Submit
                    </button>
      </div>
    </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default BanglaResources;
