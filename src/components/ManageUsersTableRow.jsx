

import {FaUserCog} from 'react-icons/fa'
const ManageUsersTableRow = ({user,setDeletedItemId,
  openDeleteModal }) => {
 
  
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
            <div role="button" className="w-6 mr-5 transform hover:text-purple-500 hover:scale-110">
            <FaUserCog size={24}></FaUserCog>
            </div>
            <div onClick={()=> openDeleteModal(user?._id)} role="button" className="w-6 transform hover:text-purple-500 hover:scale-110">
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
     
</>
    );
};

export default ManageUsersTableRow;