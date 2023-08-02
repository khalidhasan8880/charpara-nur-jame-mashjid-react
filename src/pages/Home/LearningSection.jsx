import { Link } from "react-router-dom";
import LinkCard from "../../components/LinkCard";


const LearningSection = () => {

  return (
    <section className="container mx-auto flex-center gap-3">
      <Link to='/quran'>
        <LinkCard title='Quran'></LinkCard>
      </Link>
     
    </section>
  );
};

export default LearningSection;
