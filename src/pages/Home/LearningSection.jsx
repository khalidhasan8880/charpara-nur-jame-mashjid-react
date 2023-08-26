import { Link } from "react-router-dom";
import audioWave from '../../assets/audio.png'
import quranIcon from '../../assets/quran.png'
import bill from '../../assets/bill.png'
import resources from '../../assets/resources.png'
const LearningSection = () => {

  return (
    <section className="container px-2 mx-auto my-24 ">
     <div  className=" flex-center flex-wrap mx-auto sm:gap-8 gap-3 text-center">
     <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-40 p-2" to='/quran'>
        <img className="w-full" src={quranIcon} alt="" />
        <h3 className="sm:text-1xl text-xl font-bold">Quran</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-40 p-2" to='/quran/audio'>
        <img className="w-full" src={audioWave} alt="" />
        <h3 className="sm:text-1xl text-xl font-bold">Quran Audio</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-40 p-2" to='/quran/audio'>
        <img className="w-full" src={resources} alt="" />
        <h3 className="sm:text-1xl text-xl font-bold">Resources</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-40 p-2" to='/quran/bill'>
        <img className="w-full" src={bill} alt="" />
        <h3 className="sm:text-1xl text-xl font-bold">Masjid Bill</h3>
      </Link>
     </div>
    
    </section>
  );
};

export default LearningSection;
