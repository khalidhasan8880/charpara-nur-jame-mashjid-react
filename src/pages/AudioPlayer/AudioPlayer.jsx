import { useContext } from "react";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { FaPause, FaPlay, FaRegClock } from "react-icons/fa";
// import { useQuery } from "@tanstack/react-query";
import { MediaContext } from "../../MediaProvider.jsx/MediaProvider";
import { Modal } from "../../components/Modal";

const AudioPlayer = () => {
  const { skipEndHandler,
    skipStartHandler,
    playPauseHandler,
    isOpen, 
    setIsOpen,
    isPlaying,
    audioElement,
    stopAudioTimer
  } = useContext(MediaContext);

  
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

            {
              isOpen && <Modal stopAudioTimer={stopAudioTimer} setIsOpen={setIsOpen} isOpen={isOpen}></Modal>
            }
        {/*  */}
      </div>
    </div>
  );
};

export default AudioPlayer;
