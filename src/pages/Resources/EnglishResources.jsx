import { FaPlus } from "react-icons/fa";
import Loading from "../../components/Loading";
import { useState } from "react";
const EnglishResources = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        console.log('helooooooooooooooooooooooooooooooooooooooo');
      setIsLoading(false);
    };
  return (
    <div>
      <div className="relative flex-center ">
    

        <div>
      {isLoading && <Loading></Loading>}
      <iframe
        src="https://archive.org/embed/QuranAudioTafseerNoumanAliKhanFullUpdated2021&playlist=1&autoplay=1"
        width="100%"
        height="330"
        frameBorder="0"
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        title="Quran Audio Player"
        onLoad={handleLoad}
      ></iframe>
    </div>

      </div>
      <button className="flex-center gap-x-2 text-xl font-semibold text-center bg-slate-100">
        <FaPlus size={20}></FaPlus> Add a free English resources
      </button>
    </div>
  );
};

export default EnglishResources;
