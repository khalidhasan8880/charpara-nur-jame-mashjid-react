import AudioPlayer from "../../components/AudioPlayer";
import useAdmin from "../../components/hooks/useAdmin";
import Banner from "./Banner";
import LearningSection from "./LearningSection";
import PrayerTime from "./PrayerTime";

const Home = () => {
    const {isAdmin} = useAdmin()
    console.log(isAdmin);
 const ar = 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3'
   
    return (
        <>
            {/* <Banner></Banner> */}
            <LearningSection></LearningSection>
            {/* <PrayerTime></PrayerTime> */}


<AudioPlayer url={ar}></AudioPlayer>


        </>
    );
};

export default Home;