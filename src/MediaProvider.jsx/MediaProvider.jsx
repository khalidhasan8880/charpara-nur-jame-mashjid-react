import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useRef, useState } from "react";
export const MediaContext = createContext(null);
const MediaProvider = ({ children }) => {
  const audioElement = useRef();

  let [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [pausedTime, setPausedTime] = useState(0)

console.log(pausedTime);
  const { data } = useQuery({
    queryKey: ["allQuranAudio2"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.quran.com/api/v4/chapter_recitations/2"
      );
      return res.json();
    },
  });
  // all audio links
  const allAudio = data?.audio_files?.map((audio) => audio.audio_url);
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.src = allAudio[audioIndex];
      audioElement.current.currentTime = pausedTime
      audioElement.current.play();
    }else{        
        audioElement.current.pause();
    }
  }, [isPlaying, audioIndex]);



  const playPauseHandler = () => {
    if (!isPlaying) {
    //   audioElement.current.play();
      setIsPlaying(true);
    } else {
    //   audioElement.current.pause();
      setIsPlaying(false);
    setPausedTime(audioElement.current.currentTime)
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

  
  // ---------
  const mediaInfo = {
    skipEndHandler,
    skipStartHandler,
    playPauseHandler,
    isOpen,
    setIsOpen,
    isPlaying,
    setIsPlaying,
    audioElement,
  };
  return (
    <MediaContext.Provider value={mediaInfo}>{children}</MediaContext.Provider>
  );
};

export default MediaProvider;
