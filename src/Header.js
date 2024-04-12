function Header() {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <div className='flex items-center justify-center rounded-3xl mb-6 bg-orange w-[500px] h-[90px]'>
            <h1 className='font-bold text-white text-5xl'>Run Radar</h1>
        </div>
        <h2 className='italic text-4xl tracking-widest text center'>Your place for achieving and tracking your goals</h2>
    </div>
  );
}

export default Header;
