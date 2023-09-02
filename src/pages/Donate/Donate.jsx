import working from '../../assets/working.jpg'
const Donate = () => {
    return (
        <section className="flex-center flex-col items-center justify-center h-screen">
        <img className='w-72 sm:w-[500px]' src={working} alt="" />
        <h4 className="sm:text-4xl text-xl font-bold text-center">This section is in working mode. <br />  Not Complete Yet. <br /></h4>
    </section>
    );
};

export default Donate;