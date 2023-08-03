import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Quran = () => {
  const { data } = useQuery({
    queryKey: ["quran"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.quran.com/api/v4/chapters?language=bn"
      );
      return res.json();
    },
  });
console.log(data);
  return (
    <section className="grid md:grid-cols-3 gap-2 container mx-auto px-2">
      {data?.chapters.map((chapter) => (
        <Link
        state={chapter}
          to={`/quran/${chapter.id}`}
          className="w-full h-20 border-gray-100 border  rounded-md hover:bg-slate-200 font-semibold transition-all duration-100 flex-between px-1 sm:px-4"
          key={chapter.id}>
          <div className="flex-center gap-x-3">
            <span className="rounded-full bg-blue-950 block w-9 h-9 flex-center text-white">{chapter?.id} </span>
            <div>
              <p>{chapter?.name_simple}</p>
              <p>{chapter?.translated_name?.name}</p>
            </div>
          </div>
          <div>
            <div  className="flex-center flex-wrap gap-x-1 text-right
          ">
            <p>{chapter?.name_arabic}</p>
            -
            <p>{chapter?.verses_count}</p>
            </div>
            <p>{chapter?.revelation_place[0].toUpperCase() + chapter?.revelation_place.slice(1,chapter?.revelation_place.length)}</p>
          </div>
         
        </Link>
      ))}
    </section>
  );
};

export default Quran;
