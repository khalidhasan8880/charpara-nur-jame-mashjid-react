import HOC from "./HOC";



const LinkCard = ({title, icon}) => {
  console.log(icon);
  return (
    <button className="text-center flex flex-col items-center justify-center card-shadow sm:w-52 sm:h-52 w-32 h-32">
      <HOC icon={icon}></HOC>
      <h3 className="font-semibold">{title}</h3>
    </button>
  );
};

export default LinkCard;
