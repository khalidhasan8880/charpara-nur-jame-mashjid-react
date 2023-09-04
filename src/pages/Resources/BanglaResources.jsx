
import { useEffect, useState } from "react";
import { FaArrowRight, FaMusic, FaUser, FaVideo } from "react-icons/fa";

import Loading from "../../components/Loading";
import AddResource from "../../components/AddResource";

const BanglaResources = () => {
  

  const [isLoading, setIsLoading] = useState(true);
 
  const [infiniteScrollLoading, setInfiniteScrollLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);
  const [resources, setResources] = useState([]);

  const pageSize = 2; 
  
  
  console.log(resources);
  // console.log(page);
  useEffect(()=>{
    setInfiniteScrollLoading(true)
    fetch(`http://localhost:5000/bangla/resources?page=${page}&pageSize=${pageSize}`)
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      let newResources = data?.resources
      setResources( [...resources, ...newResources])
      const totalPage = Math.ceil(data?.total / pageSize)
      setTotalPage(totalPage)
      setIsLoading(false)
      setInfiniteScrollLoading(false)
    })
  },[page])
  
  useEffect(()=>{
  
    const handleScroll = () => {
      // console.log(window.innerHeight + document.documentElement.scrollTop);
      console.log(document.documentElement.scrollHeight);
      
      if (page <= totalPage) {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          console.log('aycheee');
          
          setPage( page + 1)
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[page,totalPage])



  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="">
      {/* <YouTubePlayer></YouTubePlayer> */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 mb-12">
        <a
          className="sm:col-span-2  bg-blue-100 shadow-md  rounded-2xl  w-full p-5"
          href="https://www.nakbanglapodcast.com/">
          <p className="responsive-text1">Quran Tafseer Bangla - Audio</p>
          <p className="responsive-text2">Noman Ali Khan</p>
        </a>
        <a
          className="relative bg-sky-100 shadow-md rounded-2xl  w-full p-5"
          href="https://www.youtube.com/watch?v=pmc5q5KpXgc&list=PL2FHm7GZu6dkOquL_ZrA9kqsSf6JBhR6N">
          <FaVideo className="absolute right-6 top-6"></FaVideo>

          <div className="flex flex-col items-start justify-center gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white p-2">
                <FaUser size={30}></FaUser>
              </div>
              <div className="flex flex-col">
                <p className="font-extralight text-sm m-0">Added by</p>
                <p className="m-0 font-bold">Khalid Hasan</p>
              </div>
            </div>
            <div>
              <p className="responsive-text2">আরবী শিখুন আরও সহজ উপায়ে</p>
            </div>
          </div>
        </a>
       <AddResource ></AddResource>
      </div>
      <h1 className="responsive-text1 ms-1 mb-3">Added by users</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 ">
        {resources?.map((resource) => {
          return (
            <div
              key={resource?._id}
              className="relative bg-sky-100 shadow-md rounded-2xl  w-full sm:p-5 p-3">
              {resource?.type == "Audio Resource" ? (
                <FaMusic className="absolute right-6 top-6"></FaMusic>
              ) : (
                <FaVideo className="absolute right-6 top-6"></FaVideo>
              )}
              <div className="flex flex-col items-start justify-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-2">
                    <FaUser size={30}></FaUser>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-extralight text-sm m-0">Added by</p>
                    <p className="m-0 font-bold">{resource?.addedBy_name}</p>
                  </div>
                </div>
                <div>
                  <p className="responsive-text2 overflow-hidden">
                    {resource?.name}
                  </p>
                </div>
              </div>
              <div className="flex-end mt-4">
                <a
                  className="flex-center gap-x-1 text-sm hover:gap-x-2 transition-all text-white   rounded-full px-4 py-2 bg-blue-500"
                  href={resource?.link}>
                  Resource Link <FaArrowRight size={14}></FaArrowRight>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {
        infiniteScrollLoading && <h2 className="responsive-text1">Loading...</h2>
      }
 
    </section>
  );
};

export default BanglaResources;
