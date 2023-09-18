import { useState, useRef, useEffect } from "react";

const AudioPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const audioRef = useRef(Array.isArray(url) ? new Audio(url[currentAudioIndex]) : new Audio(url));
// const audioRef = useRef(new Audio(url));



  

  const playAudio = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      if (currentAudioIndex  < url.length && Array.isArray(url)) {
        setCurrentAudioIndex(currentAudioIndex + 1);
        audio.src = url[currentAudioIndex + 1];
        audio.play();
        setIsPlaying(true);
      }
    });

    return () => {
      audio.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
    };
  }, [currentAudioIndex, url]);

  return (
    <div>
      <h1 className="responsive-text1">Audio Player</h1>
      <button className="text-3xl bg-red-300 border-2 mx-auto block" onClick={playAudio}>
        {isPlaying ? "Pause Audio" : "Play Audio"}
      </button>
    </div>
  );
};

export default AudioPlayer;
