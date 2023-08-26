import { useContext,  useRef, useState } from "react";
import {
  FaDownload,
  FaHeart,
  FaPlay,
  FaRegHeart,
} from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../components/Loading";
import getFavorites from "../../../localStorageManage";
import { MediaContext } from "../../MediaProvider.jsx/MediaProvider";
const QuranAudio = () => {
  const { allChapterInfo, isLoading } = useContext(AuthContext);
  const [favoriteAudio, setFavoriteAudio] = useState([]);
  const audioElement = useRef();

  const {allAudio, playAudio,} = useContext(MediaContext)
  useState(()=>{
    setFavoriteAudio(JSON.parse(localStorage.getItem('favorite-audio')))
  },[])
  // const { data } = useQuery({
  //   queryKey: ["allQuranAudio"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       "https://api.quran.com/api/v4/chapter_recitations/2"
  //     );
  //     return res.json();
  //   },
  // });
  // // all audio links
  // const allAudio = data?.audio_files?.map((audio) => audio.audio_url);
  // // play pause handler with async
  // useEffect(() => {
  //   if (isPlaying) {
  //     audioElement.current.src = allAudio[audioIndex];
  //   }   
  // }, [isPlaying, audioIndex, allAudio]);



  
  if (isLoading) {
    return <Loading></Loading>;
  }
// add to favorite
  const addToFavorite = (id) => {
    getFavorites(id);
    setFavoriteAudio(getFavorites(id));
  };
  // download audio
  const downloadHandler = () => {
    audioElement.current.controls.download;
  };

  return (
    allAudio && (
      <section className="grid md:grid-cols-3 gap-2 container mx-auto px-1 pb-20 relative audio_player">
        
        {allChapterInfo?.chapters.map((chapter) => (
          <div
            className="w-full h-20 border rounded-md hover:bg-slate-200 font-semibold transition-hover duration-100 flex-between px-1 sm:px-4"
            key={chapter.id}>
            <div className="flex-center gap-x-3">
              <span className="font-semibold">{chapter?.id}. </span>
              <button
                onClick={() => playAudio(chapter?.id)}
                className="rounded-full bg-blue-950 block w-9 h-9 flex-center text-white">
                {<FaPlay></FaPlay>}
              </button>
              <div>
                <div className="flex-center gap-x-3">
                  <p>{chapter?.name_simple}</p>-<p>{chapter?.name_arabic}</p>
                </div>
                <p>{chapter?.translated_name?.name}</p>
              </div>
            </div>

            <div className="flex-center gap-4">
              <button onClick={() => addToFavorite(chapter?.id)}>
                {favoriteAudio?.includes(chapter?.id) ? (
                  <FaHeart size={25}></FaHeart>
                ) : (
                  <FaRegHeart size={25}></FaRegHeart>
                )}
              </button>
              <a
                onClick={() => downloadHandler(chapter?.id)}
                href={allAudio[chapter?.id - 1]}
                download>
                <FaDownload size={20}></FaDownload>
              </a>
            </div>
          </div>
        ))}
        <h1 className="text-white h-20">End</h1>
      </section>
    )
  );
};

export default QuranAudio;
