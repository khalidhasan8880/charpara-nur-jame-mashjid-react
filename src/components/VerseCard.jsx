import {FaPlay} from 'react-icons/fa'
const VerseCard = ({verse, isTranslated, audioHandler, isReadingMode}) => {
    console.log();

    // fetch('https://verses.quran.com/AbdulBaset/Mujawwad/mp3/001001.mp3')
    return (
        <div className={`w-full p-5 text-center  ${isTranslated? 'shadow-md' : ''} `}>
            <h2 className="sm:text-3xl text-2xl font-semibold mb-2">{verse?.ayah_text}</h2>
            <button  onClick={()=>audioHandler(verse?.ayah_no)}  className={`text-3xl opacity-10 my-3 ${isReadingMode ? 'hidden': ''}`}><FaPlay></FaPlay></button>
            {
                verse?.bn.map(trans=> <p className={`${isTranslated ? '' : 'hidden'} `} key={trans.token_no}>{trans.token_trans}</p>)
            }

        </div>
    );
};

export default VerseCard;