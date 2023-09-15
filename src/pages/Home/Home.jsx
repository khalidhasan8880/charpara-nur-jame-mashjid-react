import useAdmin from "../../components/hooks/useAdmin";
import Banner from "./Banner";
import LearningSection from "./LearningSection";
import PrayerTime from "./PrayerTime";

const Home = () => {
    const {isAdmin} = useAdmin()
    console.log(isAdmin);
    return (
        <>
            {/* <Banner></Banner> */}
            <LearningSection></LearningSection>
            {/* <PrayerTime></PrayerTime> */}

            {/* <video src="https://livestream.peacetv.tv/PeaceTvBangla/tracks-v2a1/mono.m3u8" width="770" height="770" className="mb-28" controls></video> */}


        </>
    );
};

export default Home;