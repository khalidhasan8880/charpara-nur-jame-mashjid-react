import { FaPlus } from 'react-icons/fa';

const BanglaResources = () => {
    return (
        <section>
            <a className='shadow-md bg-blue-100 rounded-2xl h-10 w-full p-2' href="https://www.nakbanglapodcast.com/">Noman Ali Khan - All Audio</a>

            <button className="h-10 w-full flex-center gap-x-2 text-xl font-semibold text-center bg-slate-100"><FaPlus size={20}></FaPlus> Add a free Bangla resources</button>
        </section>
    );
};

export default BanglaResources;