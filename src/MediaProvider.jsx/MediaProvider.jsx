import { useQuery } from "@tanstack/react-query";
import toast from 'react-hot-toast';

import { createContext, useEffect, useRef, useState } from "react";
export const MediaContext = createContext(null);
const MediaProvider = ({ children }) => {
  const audioElement = useRef();

  let [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);

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
      audioElement.current.currentTime = pausedTime;
      audioElement.current.play();
    } 
    const audioEl = audioElement.current;
    // audioEl.onended = () => {
    //   console.log('Audio has ended.');
    //   setAudioIndex(audioIndex + 1)
    //   audioElement.current.play();
    // };

  }, [isPlaying, audioIndex, allAudio, pausedTime]);

  const playAudio = (id) => {
    audioElement.current.src = allAudio[id - 1];
    audioElement.current.play();
    // id - 1 : for making audio index
    setAudioIndex(id - 1);
    setIsPlaying(true);
    setPausedTime(0)
  };
  const playPauseHandler = () => {
    if (!isPlaying) {
      //   audioElement.current.play();
      setIsPlaying(true);
    } else {
      //   audioElement.current.pause();
      setIsPlaying(false);
      setPausedTime(audioElement.current.currentTime);
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

  const stopAudioTimer = (min) => {
    const milliseconds = min * 60;
    setTimeout(function () {
      audioElement.current.pause();
      setIsPlaying(false);
    }, milliseconds);
    setIsOpen(false);
    toast.success(`The timer has been successfully set`)
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
    stopAudioTimer,
    allAudio,
    audioIndex,
    playAudio
  };
  return (
    <MediaContext.Provider value={mediaInfo}>{children}</MediaContext.Provider>
  );
};

export default MediaProvider;
