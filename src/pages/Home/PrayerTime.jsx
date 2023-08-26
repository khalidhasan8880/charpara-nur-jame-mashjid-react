import  { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const PrayerTime = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dailyprayer.abdulrcs.repl.co/api/faridpur")
      .then((res) => res.json())
      .then((data) => {
        // const objectKeys = Object.keys(data.today)
        // setData(objectKeys)
        setData(data.today);
      });
  }, []);
  // console.log(data?.today);
  console.log(data);
  return (
    <section className=" container mx-auto">
        <h2 className="font-bold sm:text-3xl text-2xl ms-3 my-5">Prayer Times in Faridpur</h2>

        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper sm:h-40 ms-3 px-2 py-2 z-0"
      >
        {Object.keys(data).map((keyName) => (
          <SwiperSlide
            key={keyName}
            className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-40 p-5">
            <h3 className="font-bold sm:text-2xl">{keyName}</h3>
            <h3 className="font-bold mt-3 text-xl ">{data[keyName]}</h3>
          </SwiperSlide>
        ))}
        
    
      </Swiper>

    </section>
  );
};

export default PrayerTime;
