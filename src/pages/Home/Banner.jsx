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
  return (
    <div className="banner min-h-[60vh] flex-center">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-center text-white z-10">
          সময়
        </h1>
        <div>
        <h1 onClick={playSound} className="font-bold text-3xl md:text-5xl lg:text-7xl text-center neon-text">
          {currentTime}
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
