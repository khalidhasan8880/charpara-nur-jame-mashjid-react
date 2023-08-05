import { useContext, useRef, useState } from "react";
import { FaDownload, FaPlay, FaRegHeart } from "react-icons/fa";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../components/Loading";
import { useQuery } from "@tanstack/react-query";
const QuranAudio = () => {
  const { allChapterInfo, isLoading } = useContext(AuthContext);
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioIndex, setAudioIndex] = useState(1)
  const audioElement = useRef()

  const {data} = useQuery({
    queryKey:['allQuranAudio'],
    queryFn:async ()=>{
      const res= await fetch('https://api.quran.com/api/v4/chapter_recitations/2')
      return res.json()
    }
  })
  const allAudio = data?.audio_files?.map(audio=> audio.audio_url)

  const playPauseHandler =()=>{
   if (!isPlaying) {
    audioElement.current.play()
    setIsPlaying(true)
   }else{
    audioElement.current.pause()
    setIsPlaying(false)
   }
  }

  const skipStartHandler = () =>{
    if (audioIndex <= 0) {
      setAudioIndex(allAudio?.length - 1)
    }else {
      setAudioIndex(audioIndex - 1)
    }
    setIsPlaying(true);
    audioElement.current.src = allAudio[audioIndex]
    audioElement.current.play()
  }
  const skipEndHandler = () =>{
    if (audioIndex >= allAudio?.length - 1) {
      setAudioIndex(0)
    }else {
      setAudioIndex(audioIndex + 1)
    }
    setIsPlaying(true);
    audioElement.current.src = allAudio[audioIndex]
    audioElement.current.play()
  }
  console.log(audioIndex);

// fetch("https://api.quran.com/api/v4/chapter_recitations/2/")
  const playAudio = (id) => {
    
  audioElement.current.src = allAudio[id - 1]
 audioElement.current.play()
 setAudioIndex(id - 1)
setIsPlaying(true)
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
console.log(audioIndex);
  return (
  <section className="grid md:grid-cols-3 gap-2 container mx-auto px-1 pb-20 relative audio_player">
      <div className="w-full h-16 bg-slate-400 fixed bottom-0 left-0 flex-center gap-x-6">
        <audio ref={audioElement} src={`https://download.quranicaudio.com/qdc/abdul_baset/murattal/1.mp3`}></audio>
        <button onClick={skipStartHandler}><BsSkipStartFill size={30}></BsSkipStartFill></button>
        <button onClick={playPauseHandler} ><FaPlay size={30}></FaPlay></button>
        <button onClick={skipEndHandler}><BsSkipEndFill size={30}></BsSkipEndFill></button>
      </div>
      {allChapterInfo?.chapters.map((chapter) => (
        <div
          className="w-full h-20 border rounded-md hover:bg-slate-200 font-semibold transition-hover duration-100 flex-between px-1 sm:px-4"
          key={chapter.id}>
          <div className="flex-center gap-x-3">
            <span className="font-semibold">{chapter?.id}. </span>
            <button onClick={()=> playAudio(chapter?.id)} className="rounded-full bg-blue-950 block w-9 h-9 flex-center text-white">
              <FaPlay></FaPlay>{" "}
            </button>
            <div>
              <div className="flex-center gap-x-3">
                <p>{chapter?.name_simple}</p>
                -
                <p>{chapter?.name_arabic}</p>
              </div>
              <p>{chapter?.translated_name?.name}</p>
            </div>
          </div>
         
          <div className="flex-center gap-4">
     <button>< FaRegHeart size={20}></FaRegHeart></button>
     <button>< FaDownload size={20}></FaDownload></button>
          </div>
        </div>
      ))}
       <h1 className="text-white h-20">End</h1>
    </section>
  );
};

export default QuranAudio;
