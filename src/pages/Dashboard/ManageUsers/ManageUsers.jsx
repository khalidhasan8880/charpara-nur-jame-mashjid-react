import api from "../../../components/hooks/interceptors";
import useFetchData from "../../../components/hooks/useFetchData";
import ManageUsersTableRow from "../../../components/ManageUsersTableRow";
import useAuth from "../../../components/hooks/useAuth";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Loading from "../../../components/Loading";
const ManageUsers = () => {
  const {user} = useAuth()
 const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
 const [deleteItemId, setDeleteItemId] = useState(null);

 // Function to open the delete confirmation modal
 const openDeleteModal = (id) => {
  console.log('openDeleteModal');
   setDeleteItemId(id);
   setIsDeleteModalOpen(true);
 };

 // Function to close the delete confirmation modal
 const closeDeleteModal = () => {
  console.log('closed delete modal');
   setIsDeleteModalOpen(false);
   setDeleteItemId(null);
 };

 const deleteUserHandler = () => {
  api.delete(`/delete/user/${deleteItemId}?email=${user?.email}`)
  
  closeDeleteModal();
};
//  fetched data from hook
 const [data, isLoading] = useFetchData("/users", "allUsers");
//  const editUserHandler = (id)=>{
//   api.put(`/update/user/${id}?email=${user?.email}`)
//  }
//  const deleteUserHandler = (id)=>{
//
//  }

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <>
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
            setDeleteItemId={setDeleteItemId}
            closeDeleteModal={closeDeleteModal}
            openDeleteModal={openDeleteModal}
             />
          ))}
        </tbody>
      </table>
    </div>
    <Transition appear show={isDeleteModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=> setIsDeleteModalOpen(false)}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 mx-1"
                      onClick={deleteUserHandler}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 mx-1"
                      onClick={()=> setIsDeleteModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ManageUsers;
