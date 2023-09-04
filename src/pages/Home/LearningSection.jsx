import { Link } from "react-router-dom";
import audioWave from '../../assets/audio.png'
import hadith from '../../assets/muhammad(s).png'
import quranIcon from '../../assets/quran.png'
import bill from '../../assets/bill.png'
import resources from '../../assets/resources.png'
import donate from '../../assets/donate.png'
import learnQuran from '../../assets/learn-quran.png'
const LearningSection = () => {
  // grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10  justify-items-center
  return (
    <section className="container mx-auto flex-center my-24 ">
     <div  className=" flex-center flex-wrap sm:gap-8 gap-3 py-10 text-center">
     <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-28 md:w-40 p-2" to='/quran'>
        <img className="w-14 sm:w-full " src={quranIcon} alt="" />
        <h3 className="sm:text-2xl text-sm sm:font-bold">Quran</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-28 md:w-40 p-2" to='/quran/audio'>
        <img className="w-14 sm:w-full " src={audioWave} alt="" />
        <h3 className="sm:text-2xl text-sm sm:font-bold">Quran Audio</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-28 md:w-40 p-2" to='/quran/learn'>
        <img className="w-14 sm:w-full " src={learnQuran} alt="" />
        <h3 className="sm:text-2xl text-sm sm:font-bold">Learn Quran</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-28 md:w-40 p-2" to='/hadith'>
        <img className="w-14 sm:w-full " src={hadith} alt="" />
        <h3 className="sm:text-2xl text-sm sm:font-bold">Hadith</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-28 md:w-40 p-2" to='resources'>
        <img className="w-14 sm:w-full " src={resources} alt="" />
        <h3 className="sm:text-2xl text-sm sm:font-bold">Resources</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-28 md:w-40 p-2" to='/monthly_masjid_bill'>
        <img className="w-14 sm:w-full " src={bill} alt="" />
        <h3 className="sm:text-2xl text-sm sm:font-bold">Masjid Bill</h3>
      </Link>
      <Link className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-28 md:w-40 p-2" to='/donate'>
        <img className="w-14 sm:w-full " src={donate} alt="" />
        <h3 className="sm:text-2xl text-sm sm:font-bold">Donate</h3>
      </Link>
     </div>
    
    </section>
  );
};

export default LearningSection;
