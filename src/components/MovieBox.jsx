/* eslint-disable react/prop-types */

function MovieBox({ title, releaseDate, openCrawl, handleMouseOver }) {
  return (
    <div
      className="movie-box w-[100%] p-[2rem] my-[2rem] bg-gray-500 bg-boxBg  bg-blend-multiply sm:min-w-[48%] sm:max-w-[48%] lg:min-w-[32%] lg:max-w-[32%] hover:shadow-[0px_0px_6px_4px_rgba(111,151,222,1)] rounded-md"
      onClick={handleMouseOver}
    >
      <h3 className="text-[2rem]">{title}</h3>
      <p className="text-[1.4rem] text-gray-500 mb-[1rem] ">{releaseDate}</p>
      <p className="text-[1.4rem] text-justify">{openCrawl}</p>
      <div className="w-[100%] h-[2px] bg-red-800 mt-[2rem] mb-[1rem]"></div>
      <a href="#">
        <p className="text-[1.2rem] text-[#FFE81F]">More Info</p>
      </a>
    </div>
  );
}
export default MovieBox;
