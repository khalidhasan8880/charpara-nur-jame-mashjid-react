import { useContext, useEffect, useRef, useState } from "react";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { FaPause, FaPlay, FaRegClock } from "react-icons/fa";

// import { useQuery } from "@tanstack/react-query";
import { MediaContext } from "../MediaProvider.jsx/MediaProvider";

const TestCenterAudio = () => {
  const { skipEndHandler,
    skipStartHandler,
    playPauseHandler,
    isOpen, 
    setIsOpen,
    isPlaying,
    setIsPlaying,
    audioElement
  } = useContext(MediaContext);
  // console.log(hi);


  // let [isOpen, setIsOpen] = useState(true);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [audioIndex, setAudioIndex] = useState(1);

  // const { data } = useQuery({
  //     queryKey: ["allQuranAudio2"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         "https://api.quran.com/api/v4/chapter_recitations/2"
  //       );
  //       return res.json();
  //     },
  //   });
  //   // all audio links
  //   const allAudio = data?.audio_files?.map((audio) => audio.audio_url);
  //   useEffect(() => {
  //     if (isPlaying) {
  //       audioElement.current.src = allAudio[audioIndex];
  //       audioElement.current.play()
  //     }
  //   }, [isPlaying, audioIndex, allAudio]);
  //   console.log(allAudio);
  // const playPauseHandler = () => {
  //     if (!isPlaying) {
  //       audioElement.current.play();
  //       setIsPlaying(true);
  //     } else {
  //       audioElement.current.pause();
  //       setIsPlaying(false);
  //     }
  //   };

  //   const skipStartHandler = () => {
  //     if (audioIndex <= 0) {
  //       setAudioIndex(allAudio?.length - 1);
  //     } else {
  //       setAudioIndex(audioIndex - 1);
  //     }
  //     setIsPlaying(true);
  //   };
  //   const skipEndHandler = () => {
  //     if (audioIndex >= allAudio?.length - 1) {
  //       setAudioIndex(0);
  //     } else {
  //       setAudioIndex(audioIndex + 1);
  //     }
  //     setIsPlaying(true);
  //   };

  //   const playAudio = (id) => {
  //     audioElement.current.src = allAudio[id - 1];
  //     audioElement.current.play();
  //     setAudioIndex(id - 1);
  //     setIsPlaying(true);
  //   };
  return (
    <div className="bg-red-600">
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

        <button onClick={() => setIsOpen(!isOpen)}>
          <FaRegClock size={25}></FaRegClock>
        </button>

        {/* <Modal stopAudioTimer={stopAudioTimer} setIsOpen={setIsOpen} isOpen={isOpen}></Modal> */}
      </div>
      {/* <MediaPlayer></MediaPlayer> */}
    </div>
  );
};

export default TestCenterAudio;
