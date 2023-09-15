
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {FaUserCog} from 'react-icons/fa'
const ManageUsersTableRow = ({user, editUserHandler,deleteUserHandler}) => {
 
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }
 
  function openModal() {
    setIsOpen(true)
  }
    return (
      <>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            {/* coming soon */}
            {/* <div className="mr-2">
              <img src="" alt="" />
            </div> */}
            <span className="font-medium">{user?.name}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left hidden sm:table-cell">
        <span>{user?.role}</span>
        </td>
        <td className="py-3 px-6 text-left hidden sm:table-cell">
        <span>{user?.email}</span>
        </td>
     
       
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center ">
            <div onClick={()=> openModal(user?._id)} role="button" className="w-6 mr-5 transform hover:text-purple-500 hover:scale-110">
            <FaUserCog size={24}></FaUserCog>
            </div>
            <div onClick={()=> deleteUserHandler(user?._id)} role="button" className="w-6 transform hover:text-purple-500 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </td>
      </tr>
      {/* <Transition appear show={isOpen} as={Fragment}>
<Dialog as="div" className="relative z-10" onClose={closeModal}>
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
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
        leaveTo="opacity-0 scale-95"
      >
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Edit User Role
              </Dialog.Title>

              <div className="mt-4">
            
                <p className="text-sm text-gray-500">User Name: John Doe</p>
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Select Role:</label>
                  <select
                    className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                    defaultValue="user"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 space-x-4">
                <button
                  onClick={() => {
                    // Handle making the user an admin
                    // makeAdminHandler();
                  }}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  Make Admin
                </button>
                <button
                  onClick={() => {
                    // Handle deleting the user
                    deleteUserHandler();
                  }}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50"
                >
                  Delete User
                </button>
              </div>
            </div>
      </Transition.Child>
    </div>
  </div>
</Dialog>
</Transition> */}
</>
    );
};

export default ManageUsersTableRow;