import HOC from "./HOC";



const LinkCard = ({title, icon, }) => {
  console.log(icon);
  return (
    <button className="text-center p-1 h-full flex flex-col items-center justify-center card-shadow max-w-[200px]">
      <HOC  icon={icon}></HOC>
      <h3 className="sm:font-bold">{title}</h3>
    </button>
  );
};

export default LinkCard;
