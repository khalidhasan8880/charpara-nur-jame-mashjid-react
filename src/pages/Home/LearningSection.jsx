import { Link } from "react-router-dom";
import LinkCard from "../../components/LinkCard";
import QuranIcon from "../../components/svgs/QuranIcon";
import QuranAudioIcon from "../../components/svgs/QuranAudioIcon";

const LearningSection = () => {

  return (
    <section className="container px-2 mx-auto">
     <div  className=" flex-center gap-3">
     <Link to='/quran'>
        <LinkCard icon={QuranIcon} title='Quran'></LinkCard>
      </Link>
      <Link to='/quran/audio'>
        <LinkCard icon={QuranAudioIcon} title='Quran Audio'></LinkCard>
      </Link>
      <Link to='/quran/audio'>
        <LinkCard icon={QuranAudioIcon} title='Quran Audio'></LinkCard>
      </Link>
     </div>
    
    </section>
  );
};

export default LearningSection;
