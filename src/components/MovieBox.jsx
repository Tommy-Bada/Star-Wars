/* eslint-disable react/prop-types */
function MovieBox({ title, releaseDate, openCrawl }) {
  return (
    <div className="movie-box">
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <p>{openCrawl}</p>
      <div></div>
      <p>More Info</p>
    </div>
  );
}
export default MovieBox;
