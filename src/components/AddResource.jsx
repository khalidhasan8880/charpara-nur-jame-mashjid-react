import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaPlus } from "react-icons/fa";

const AddResource = () => {
    const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const location = useLocation();
    
  const typeChangeHandler = (event) => {
    setSelectedType(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
  };
  const contentLanguageHandler = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const link = form.link.value;
    console.log(link.split(":")[0]);
    if (link.split(":")[0] !== "https") {
      toast.error("Please provide a valid URL or Link");
      return;
    }
    if (!selectedType || !selectedLanguage || !selectedCategory) {
      alert('Please select an option.');
      return
    }
    const name = form.name.value;
    const type = selectedType;
    const category = selectedCategory;
    const contentLanguage = selectedLanguage;
    const addedBy_email = user?.email;
    const addedBy_name = user?.displayName;
    const status = 'pending'
    setSubmitLoading(true);
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/add/resource?email=${user?.email}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link,
        name,
        type,
        category,
        addedBy_email,
        addedBy_name,
        contentLanguage,
        status
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(
          "Your letter has been sent to admin for verify your resource", {
            duration: 2000,
            position: 'top-right',
            style: {
                border: '1px solid #713200',
                padding: '16px',
              },
          }
        );
        setSubmitLoading(false);
        setIsOpen(false);
      });
  };
  const addResourceHandler = () => {
    if (user) {
      setIsOpen(!isOpen);
    } else {
      // navigate('/login')
      setOpenModal(true);
    }
  };
    return (
        <>
            
            <button
          onClick={addResourceHandler}
          role="button"
          className="rounded-2xl w-full ">
          <div className="flex-center flex-col mx-auto mt-16 mb-6 flex-center gap-x-2 responsive-text2 font-semibold text-center  px-4 py-2 ">
            <FaPlus size={25}></FaPlus> Add a resources
          </div>
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
                    <input
                      required
                      className="border-2 w-full h-14 p-2 mt-3"
                      name="link"
                      placeholder="Paste your URL or Links"
                      type="text"
                    />
                    <input
                      required
                      className="border-2 w-full h-14 p-2 mt-3"
                      name="name"
                      placeholder="Give a name of your resource"
                      type="text"
                    />
                    <div>
                      <fieldset className="flex flex-col">
                        <legend>Select content Language:</legend>

                        <label>
                          <input
                            className="m-2"
                            type="radio"
                            name="bangla"
                            value="Bangla"
                            checked={selectedLanguage === "Bangla"}
                            onChange={contentLanguageHandler}
                          />
                          Bangla
                        </label>
                        <label>
                          <input
                            className="m-2"
                            type="radio"
                            name="english"
                            value="English"
                            checked={selectedLanguage === "English"}
                            onChange={contentLanguageHandler}
                          />
                          English
                        </label>
                      </fieldset>
                      <fieldset className="flex flex-col">
                        <legend>Select content type:</legend>
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
                        disabled={submitLoading}
                        type="submit"
                        className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          submitLoading
                            ? "bg-blue-200"
                            : "bg-blue-500 hover:bg-blue-600 focus-visible:ring-blue-500 "
                        }`}>
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




      <Transition appear show={openModal} as={Fragment}>
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
                    You need to login first
                  </Dialog.Title>
                  <Link
                    state={location}
                    className="block text-center w-full px-4 py-2 text-2xl text-white bg-blue-500 rounded-lg my-5"
                    to="/login">
                    Login Now
                  </Link>

                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setOpenModal(false)}>
                    Cancel
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    );
};

export default AddResource;