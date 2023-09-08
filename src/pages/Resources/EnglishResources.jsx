
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import AddResource from "../../components/AddResource";
import ResourcesCard from "../../components/ResourcesCard";
const EnglishResources = () => {
  const [isLoading, setIsLoading] = useState(true);
 
  const [infiniteScrollLoading, setInfiniteScrollLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);
  const [resources, setResources] = useState([]);

  const pageSize = 2; 
  
 
  useEffect(()=>{
    setInfiniteScrollLoading(true)
    fetch(`http://localhost:5000/english/resources?page=${page}&pageSize=${pageSize}`)
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
    <section>
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:gap-7 gap-3 mb-12">
        <div className="relative flex-between flex-col sm:flex-row gap-5 col-span-2 bg-blue-100 p-2 sm:p-8 rounded-2xl">
          <div className="w-full sm:w-[50%]">
            <p className="responsive-text1">Quran Tafseer </p>
            <p className="responsive-text2">Noman Ali Khan </p>
          </div>
          
         
            <iframe
              src="https://archive.org/embed/QuranAudioTafseerNoumanAliKhanFullUpdated2021&playlist=1"
              width="100%"
              height="330"
              frameBorder="0"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              title="Quran Audio Player"
              ></iframe>
        
        </div>
        <div className="bg-blue-100 rounded-2xl flex-center">
          <AddResource></AddResource>
        </div>
      </div>
      <h1 className="responsive-text1 ms-1 mb-3">Added by users</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 ">
      {resources?.map((resource) => (
          <ResourcesCard key={resource?._id} resource={resource}/>
        ))}
      </div>
    
      {
        infiniteScrollLoading && <h2 className="responsive-text1">Loading...</h2>
      }
    </section>
  );
};

export default EnglishResources;
