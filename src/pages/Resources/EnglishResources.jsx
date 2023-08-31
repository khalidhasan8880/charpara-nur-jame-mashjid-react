import { FaPlus } from "react-icons/fa";
import Loading from "../../components/Loading";
import { useState } from "react";
const EnglishResources = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    console.log("helooooooooooooooooooooooooooooooooooooooo");
    setIsLoading(false);
  };
  
  return (
    <div>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-7 gap-3">
      <div className="relative flex-between flex-col sm:flex-row gap-5 col-span-2 bg-blue-100 p-2 sm:p-8 rounded-lg">
        <div>
        <p className="responsive-text1">Quran Tafseer </p>
        <p className="responsive-text2">Noman Ali Khan </p>
        </div>
        <div className="">
          {isLoading && <Loading></Loading>}
          <iframe
            src="https://archive.org/embed/QuranAudioTafseerNoumanAliKhanFullUpdated2021&playlist=1"
            width="100%"
            height="330"
            frameBorder="0"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            title="Quran Audio Player"
            onLoad={handleLoad}></iframe>
        </div>
      </div>
        <div className="bg-blue-100 rounded-lg ">
s
        </div>
      </div>

      <button className=" block mx-auto mt-7 mb-2 flex-center gap-x-2 text-xl font-semibold text-center bg-slate-100  px-4 py-2">
        <FaPlus size={20}></FaPlus> Add a free English resources
      </button>
    </div>
  );
};

export default EnglishResources;
