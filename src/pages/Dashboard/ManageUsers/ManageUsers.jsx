import api from "../../../components/hooks/interceptors";
import useFetchData from "../../../components/hooks/useFetchData";
import ManageUsersTableRow from "../../../components/ManageUsersTableRow";
import useAuth from "../../../components/hooks/useAuth";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
const ManageUsers = () => {
  const {user, loading} = useAuth()

  const [data] = useFetchData("/users", "allUsers");
 const editUserHandler = (id)=>{
  api.put(`/update/user/${id}?email=${user?.email}`)
 }
//  const deleteUserHandler = (id)=>{
//   api.delete(`/delete/user/${id}?email=${user?.email}`)
//  }

 let [isOpen, setIsOpen] = useState(true)
 const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

 const deleteUserHandler = () => {
   setIsConfirmDeleteOpen(true);
 };
 function closeModal() {
   setIsOpen(false)
 }

 function openModal() {
   setIsOpen(true)
 }

  return (
    <div className="bg-white rounded-lg ">
      <table className="min-w-max w-full table-auto">
        <thead >
          <tr className="bg-blue-900 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left hidden sm:table-cell">Role</th>
            <th className="py-3 px-6 text-left hidden sm:table-cell">Email</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data?.map((user) => (
            <ManageUsersTableRow key={user?._id}
            user={user}
            editUserHandler={editUserHandler}
            deleteUserHandler={deleteUserHandler}
            openModal={openModal}
             />
          ))}
        </tbody>
      </table>
      <Transition appear show={isOpen} as={Fragment}>
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

</Transition>

{/* Confirm Delete Modal */}
<Transition show={isConfirmDeleteOpen} as={Fragment}>
<Dialog as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setIsConfirmDeleteOpen(false)}
          >
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
                Confirm Delete User
              </Dialog.Title>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Are you sure you want to delete this user?</p>
              </div>
              <div className="mt-8 space-x-4">
                <button
                  onClick={() => setIsConfirmDeleteOpen(false)}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                >
                  Cancel
                </button>
                <button
                  // onClick={confirmDelete}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50"
                >
                  Confirm Delete
                </button>
              </div>

              
            </div>
      </Transition.Child>
    </div>
  </div>

          
            
           
          </Dialog>
        </Transition>
    </div>
  );
};

export default ManageUsers;
