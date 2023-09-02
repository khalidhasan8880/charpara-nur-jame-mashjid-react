import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { FaMusic, FaPlus, FaRegFileAudio, FaUser, FaVideo } from "react-icons/fa";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BanglaResources = () => {
  const {user} = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // State to store selected option
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store selected option
  const location = useLocation()
  const navigate = useNavigate()
  const typeChangeHandler = (event) => {
    setSelectedType(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const link = form.link.value
    const name = form.name.value
    const type = selectedType
    const category = selectedCategory
    const addedBy_email = user?.email
  const addedBy_name = user?.displayName
    
    const token = localStorage.getItem('token')
    console.log(token);
    fetch(`http://localhost:5000/add-resource?email=${user?.email}`, {
      method:"POST",
      headers:{
       
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body:JSON.stringify({link, name, type, category, addedBy_email, addedBy_name})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })


  };
  const addResourceHandler =()=>{
    if (user) {
      setIsOpen(!isOpen)      
    }else{
      // navigate('/login')
      setOpenModal(true)
    }
  }
  
  // setIsOpen(false)
  const fileType = 'audio'
  return (
    <section>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
        <a
          className="col-span-2  bg-blue-100 shadow-md  rounded-2xl  w-full p-5"
          href="https://www.nakbanglapodcast.com/">
          <p className="responsive-text1">Quran Tafseer Bangla - Audio</p>
          <p className="responsive-text2">Noman Ali Khan</p>
        </a>
        <a
          className="relative bg-sky-100 shadow-md rounded-2xl  w-full p-5"
          href="https://www.youtube.com/watch?v=pmc5q5KpXgc&list=PL2FHm7GZu6dkOquL_ZrA9kqsSf6JBhR6N">
            {
             fileType == 'audio' ? <FaMusic className="absolute right-6 top-6"></FaMusic > : <FaVideo className="absolute right-6 top-6"></FaVideo>
            }
          <div className="flex flex-col items-start justify-center gap-3">
            
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white p-2"><FaUser size={30}></FaUser></div>
              <div className="flex flex-col">
              <p className="font-extralight text-sm m-0">Added by</p>
              <p className="m-0 font-bold">Khalid Hasan</p>
              </div>
            </div>
            <div>
              <p className="responsive-text2">আরবী শিখুন আরও সহজ উপায়ে</p>
            </div>
          </div>
        </a>
      </div>

      <button
        onClick={addResourceHandler}
        className="block mx-auto mt-7 mb-2 flex-center gap-x-2 text-xl font-semibold text-center bg-slate-100 px-4 py-2 ">
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
                    <input
                      className="border-2 w-full h-14 p-2 mt-3"
                      name="link"
                      placeholder="Paste your URL or Links"
                      type="text"
                    />
                    <input
                      className="border-2 w-full h-14 p-2 mt-3"
                      name="name"
                      placeholder="Give a name of your resource"
                      type="text"
                    />
                    <div>
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
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                       >
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
                    <Link state={location} className="block text-center w-full px-4 py-2 text-2xl text-white bg-blue-500 rounded-lg my-5" to='/login'>Login Now</Link>
                  
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
      
    </section>
  );
};

export default BanglaResources;
