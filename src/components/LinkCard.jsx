


const LinkCard = ({title, icon}) => {
  console.log(icon);
  return (
    <button className="text-center card-shadow px-3 pt-5 pb-1 ">
      
      <h3 className="font-semibold">{title}</h3>
    </button>
  );
};

export default LinkCard;
