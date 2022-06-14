import react from "react";

const LandingPage = () => {
  return (
    <div className="h-screen bg-black ">
      <div>
        <div className=" text-white mx-auto h-14 w-3/4 flex items-center justify-between">
          <div>Title</div>
          <button>button</button>
        </div>
        <div className=" border-gray-600 border-b"></div>
      </div>
      <div className="w-3/4 mx-auto">
        <h1 className="w-full font-black mt-6 tracking-tight leading-120 text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:px-0 px-4 text-center text-white word-spacing-4 mb-10">
          find your <span className=" text-green-600">Soulmate</span>{" "}
          <span>from your </span>{" "}
          <span className=" text-green-600">Playlist</span>
        </h1>
        <p className="mx-auto text-center text-gray-400 text-sm md:text-lg  lg:text-2xl leading-140 font-light font-body max-w-4xl">
          we have all felt lonely at times, and often our playlist comes to our
          rescue. That one song we can't get over, how cool it would be to be
          able to meet someone who feels like your spotify playlist, a prized
          possesion, right? We are here to bridge the gap.
        </p>
        <div className="flex justify-center mt-28 md:mt-14 mb-12">
          <button className="py-2 px-6 border font-semibold leading-1 text-center tracking-wide transition-all ease-in duration-75 outline-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed lg:flex  rounded leading-120 select-none mx-0 text-sm  text-gray-300 border-transparent bg-green-600 ">
            login with spotify
          </button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
