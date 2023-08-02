import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import VerseCard from "../../components/VerseCard";
import {  useState } from "react";

const Surah = () => {
  const [activePage, setActivePage] = useState(1);
  const [isTranslated, setIsTranslated] = useState(true);
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const surahInfo = location.state;
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ["quran", id, activePage],
    queryFn: async () => {
      const res = await fetch(
        `https://alquranbd.com/api/tafheem/suraData/${id}/${activePage}`
      );
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="absolute-center">
        <h2 className="text-2xl">Loading...</h2>
      </div>
    );
  }
 
  

if (data?.length === 0 ) {
  navigate('/quran')
}
  // let audioArray = audiosInPage?.audio_files?.map(a=> 'https://verses.quran.com/'+a.url)

  // let audio = new Audio(audioArray[audioIndex]);
  // audio.onended = function () {
  //   audioIndex++;
  //   if (audioIndex < audioArray.length) {
  //     audio.src = audioArray[audioIndex];
  //     audio.play();
  //   } 
  // };
  const audioHandler = (ayah_no)=>{
    if (currentAudio) {
      currentAudio.pause()
      setCurrentAudio(null)
    }
    fetch(`https://api.quran.com/api/v4/recitations/2/by_ayah/${id}:${ayah_no}`)
    .then(res=>res.json())
    .then(selectedAudio=>{
      let audio = new Audio(`https://verses.quran.com/${selectedAudio?.audio_files[0].url}`);
      audio.play()
      setCurrentAudio(audio)
    })
  }



  return (
    <section>
      
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-3xl">{surahInfo?.name_arabic}</h2>
        <h2 className="text-center font-bold text-3xl">{surahInfo?.name_simple}</h2>
        <h2 className="text-center font-bold text-2xl">
          {surahInfo.translated_name.name}
        </h2>
        <div className="flex-between flex-wrap gap-3 mt-4">
         
          <button
            onClick={() => setIsTranslated(!isTranslated)}
            className="font-bold text-xl">
            Bangla Translate: {isTranslated ? "On" : "Off"}{" "}
          </button>
          <button
            onClick={() => setIsReadingMode(!isReadingMode)}
            className="font-bold text-xl">
           Audio: {isReadingMode ? "On" : "Off"}{" "}
          </button>
        </div>
      </div>
      <div className={`grid ${isTranslated ? "gap-3" : ""}`}>
        {data?.map((verse) => (
          <VerseCard
            audioHandler={audioHandler}
            key={verse.id}
            verse={verse}
            isTranslated={isTranslated}
            isReadingMode={isReadingMode}
            ></VerseCard>
        ))}
      </div>
      <div className="flex-center flex-col-reverse sm:flex-row  gap-3 my-5">
        {activePage > 1 && (
          <button
            onClick={() => setActivePage(activePage - 1)}
            className={`px-5 py-2 bg-blue-950 text-white rounded-md `}>
            Previous
          </button>
        )}
        <span className="font-semibold">Page {activePage}</span>
        { data.length && <button
          onClick={() => setActivePage(activePage + 1)}
          className={`px-5 py-2 bg-blue-950 text-white rounded-md `}>
          Next 
        </button>}
      </div>

    </section>
  );
};

export default Surah;
