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

  return (
    <section className="grid md:grid-cols-3 gap-2 container mx-auto px-2">
      {data?.chapters.map((chapter) => (
        <Link
        state={chapter}
          to={`/quran/${chapter.id}`}
          className="w-full h-20 border-gray-100 border  rounded-md hover:bg-slate-200 font-semibold transition-all duration-100 flex-between px-4"
          key={chapter.id}>
          <div className="flex-center gap-x-4">
            <span className="rounded-full bg-blue-950 block w-10 h-10 flex-center text-white">{chapter.id} </span>
            <div>
              <p>{chapter.name_simple}</p>
              <p>{chapter.translated_name.name}</p>
            </div>
          </div>
          <div className="flex-center flex-wrap gap-x-3
          ">
            <p>{chapter.name_arabic}</p>
            <p>{chapter.verses_count}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Quran;
