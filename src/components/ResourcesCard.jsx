import { FaArrowRight, FaMusic, FaUser, FaVideo } from "react-icons/fa";

const ResourcesCard = ({resource}) => {
    return (
        <div
              key={resource?._id}
              className="relative bg-sky-100 shadow-md rounded-2xl  w-full sm:p-5 p-3">
              {resource?.type == "Audio Resource" ? (
                <FaMusic className="absolute right-6 top-6"></FaMusic>
              ) : (
                <FaVideo className="absolute right-6 top-6"></FaVideo>
              )}
              <div className="flex flex-col items-start justify-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-2">
                    <FaUser size={30}></FaUser>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-extralight text-sm m-0">Added by</p>
                    <p className="m-0 font-bold">{resource?.addedBy_name}</p>
                  </div>
                </div>
                <div>
                  <p className="responsive-text2 overflow-hidden">
                    {resource?.name}
                  </p>
                </div>
              </div>
              <div className="flex-end mt-4">
                <a
                  className="flex-center gap-x-1 text-sm hover:gap-x-2 transition-all text-white   rounded-full px-4 py-2 bg-blue-500"
                  href={resource?.link}>
                  Resource Link <FaArrowRight size={14}></FaArrowRight>
                </a>
              </div>
            </div>
    );
};

export default ResourcesCard;