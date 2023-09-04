import  { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const PrayerTime = () => {
  const [data, setData] = useState([]);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  useEffect(() => {
    fetch("https://api.aladhan.com/v1/timingsByCity/27-08-2023?city=Faridpur&country=Bangladesh&method=8")
      .then((res) => res.json())
      .then((data) => {
        // const objectKeys = Object.keys(data.today)
        // setData(objectKeys)
        setData(data.data.timings);
      });
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  console.log(windowSize);
  // console.log(data?.today);
  console.log(data);
  return (
    <section className=" container mx-auto mt-24">
        <h2 className="font-bold sm:text-3xl text-2xl ms-3 my-5">Prayer Times in Faridpur</h2>

        <Swiper
        slidesPerView={windowSize?.innerWidth > 500 ? 5 : 3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper sm:h-40 ms-3 px-2 py-2 z-0"
      >
        {Object?.keys(data)?.map((keyName) => (
          <SwiperSlide
            key={keyName}
            className="shadow-md bg-blue-100 rounded-2xl flex flex-col items-center justify-center w-full  p-1 sm:p-3">
            <h3 className="sm:font-bold font-semibold md:text-2xl">{keyName}</h3>
            <h3 className="sm:font-bold mt-3  md:text-2xl">{data[keyName]}</h3>
          </SwiperSlide>
        ))}
        
    
      </Swiper>

    </section>
  );
};

export default PrayerTime;
