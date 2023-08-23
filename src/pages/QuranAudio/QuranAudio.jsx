import { useContext, useEffect, useRef, useState } from "react";
import {
  FaDownload,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegClock,
  FaRegHeart,
} from "react-icons/fa";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../components/Loading";
import { useQuery } from "@tanstack/react-query";
import getFavorites from "../../../localStorageManage";
import { Modal } from "../../components/Modal";
const QuranAudio = () => {
  let [isOpen, setIsOpen] = useState(true);
  const { allChapterInfo, isLoading } = useContext(AuthContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIndex, setAudioIndex] = useState(1);
  const [favoriteAudio, setFavoriteAudio] = useState([]);
  const audioElement = useRef();

  const { data } = useQuery({
    queryKey: ["allQuranAudio"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.quran.com/api/v4/chapter_recitations/2"
      );
      return res.json();
    },
  });
  // all audio links
  const allAudio = data?.audio_files?.map((audio) => audio.audio_url);
  // play pause handler with async
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.src = allAudio[audioIndex];
    }   
  }, [isPlaying, audioIndex, allAudio]);
  // modal scroll handling with
  // if (isOpen) {
  //   document.body.style.overflow = 'hidden'
  // }else{
  //   document.body.style.overflow = ''
  // }
// media handling
  const playPauseHandler = () => {
    if (!isPlaying) {
      audioElement.current.play();
      setIsPlaying(true);
    } else {
      audioElement.current.pause();
      setIsPlaying(false);
    }
  };

  const skipStartHandler = () => {
    if (audioIndex <= 0) {
      setAudioIndex(allAudio?.length - 1);
    } else {
      setAudioIndex(audioIndex - 1);
    }
    setIsPlaying(true);
  };
  const skipEndHandler = () => {
    if (audioIndex >= allAudio?.length - 1) {
      setAudioIndex(0);
    } else {
      setAudioIndex(audioIndex + 1);
    }
    setIsPlaying(true);
  };

  const playAudio = (id) => {
    audioElement.current.src = allAudio[id - 1];
    audioElement.current.play();
    setAudioIndex(id - 1);
    setIsPlaying(true);
  };
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
// timer for stop audio
  const stopAudioTimer = (time) =>{
    console.log(time);
    setInterval(() => {
      audioElement.current.pause()
    }, 5000);
  }

  return (
    allAudio && (
      <section className="grid md:grid-cols-3 gap-2 container mx-auto px-1 pb-20 relative audio_player">
        <div className="w-full h-16 bg-slate-400 fixed bottom-0 left-0 flex-center gap-x-6">
          <audio
            ref={audioElement}
            src={`https://download.quranicaudio.com/qdc/abdul_baset/murattal/1.mp3`}></audio>
          <button onClick={skipStartHandler}>
            <BsSkipStartFill size={30}></BsSkipStartFill>
          </button>
          <button onClick={playPauseHandler}>
            {isPlaying ? (
              <FaPause size={30}></FaPause>
            ) : (
              <FaPlay size={30}></FaPlay>
            )}
          </button>
          <button onClick={skipEndHandler}>
            <BsSkipEndFill size={30}></BsSkipEndFill>
          </button>

          <button id="timer" onClick={() => setIsOpen(!isOpen)}>
            <FaRegClock size={25}></FaRegClock>
          </button>
          {isOpen && (
            // <div className="fixed flex-center w-full h-screen bg-red-700/30 top-3 left-1">
            //  <div className="relative flex-center">
            //  <ul className="overflow-y-scroll overflow-x-hidden text-center h-96 sm:px-10 px-5">
            //     <li
            //       onClick={() => stopAudioTimer(5)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       5 Min
            //     </li>
            //     <li
            //       onClick={() => stopAudioTimer(10)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       10 Min
            //     </li>
            //     <li
            //       onClick={() => stopAudioTimer(15)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       15 Min
            //     </li>
            //     <li
            //       onClick={() => stopAudioTimer(20)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       20 Min
            //     </li>
            //     <li
            //       onClick={() => stopAudioTimer(25)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       25 Min
            //     </li>
            //     <li
            //       onClick={() => stopAudioTimer(30)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       30 Min
            //     </li>
            //     <li
            //       onClick={() => stopAudioTimer(1)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       1 Hour
            //     </li>
            //     <li
            //       onClick={() => stopAudioTimer(2)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       2 Hour
            //     </li>
            //     <li
            //       onClick={() => stopAudioTimer(3)}
            //       className="py-2 px-1 rounded-lg mt-2 bg-slate-200 hover:bg-slate-400">
            //       3 Hour
            //     </li>
            //   </ul>
            //   <button onClick={()=> setIsOpen(!isOpen)} className="text-xl absolute -top-10 -right-10 m-3"><AiOutlineClose></AiOutlineClose> Close</button>
            //  </div>
            // </div>
            <h1>ehlooo</h1>
          )}
          {/* <Modal stopAudioTimer={stopAudioTimer} setIsOpen={setIsOpen} isOpen={isOpen}></Modal> */}
        </div>
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
