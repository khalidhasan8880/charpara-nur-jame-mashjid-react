import { useState } from "react";
import "./Home.css";
import moment from "moment/moment";
const Banner = () => {

const [ currentTime , setCurrentTime] = useState('')

var audio = new Audio('/ticking-clock.mp3');

audio.volume = 0.5;
  function updateTime() {
    const now = moment(),
      formatted = now.format("hh:mm:ss A");
    setCurrentTime(formatted)
    audio.play()
}
setTimeout(updateTime, 1000);

const playSound=()=>{
  audio.play()
}

const time = currentTime.split(" ")[0]
const amPm = currentTime.split(" ")[1]
  return (
    <div className="banner min-h-[60vh] flex-between">
      <div className="w-96">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-center text-white z-10">
          সময়
        </h1>
        <div>
        <div onClick={playSound} className="grid grid-cols-2 gap-x-2 w-52 sm:w-full italic text-red-700  clock_font text-4xl md:text-5xl lg:text-7xl text-center neon-text">
         <p className="max-w-xs">{time}</p>
          <p>{amPm}</p>
        </div>
        {
          
        }
        <h3>{}</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
