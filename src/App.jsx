import "./App.css";
import { useEffect, useState } from "react";
import MovieBox from "./components/MovieBox";
import logo from "./assets/Star_Wars_Logo..png";
import MovieDetialsBox from "./components/MovieDetialsBox";
// import backgroundOne from "./assets/bg-1.jpeg";
// import backgroundTwo from "./assets/bg-2.jpeg";
// import backgroundThree from "./assets/bg-3.jpeg";
// import backgroundFour from "./assets/bg-4.jpeg";
// import backgroundFive from "./assets/bg-5.jpeg";
// import backgroundSix from "./assets/bg-6.jpeg";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [exactMovie, setExactMovie] = useState([]);
  const [isMovieClicked, setIsMovieClicked] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getMovies() {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    }
    getMovies();
  }, []);

  const handleClickAction = (x) => {
    async function getExactMovie() {
      const response = await fetch(`https://swapi.dev/api/films/${x + 1}`);
      const data = await response.json();
      setExactMovie(data);
      setIsLoading(false);
      setIsMovieClicked(true);
    }
    getExactMovie();

    // console.log(x, "clicked");
  };
  // console.log(exactMovie);
  // console.log(isMovieClicked);

  return (
    <>
      <div>
        <img
          src={logo}
          alt="Star Wars Logo"
          className="w-[50%] sm:w-[20rem] mx-auto"
        />
      </div>
      <div>
        {isMovieClicked ? (
          <div>
            <MovieDetialsBox
              title={exactMovie.title}
              director={exactMovie.director}
              producer={exactMovie.producer}
              openCrawl={exactMovie.opening_crawl}
              characters={exactMovie.characters}
              planets={exactMovie.planets}
              species={exactMovie.species}
              starships={exactMovie.starships}
              vehicles={exactMovie.vehicles}
              handleBackClick={() => setIsMovieClicked(false)}
            />
          </div>
        ) : (
          <div className="px-[2rem] sm:px-[5rem] sm:flex sm:flex-wrap sm:justify-between">
            {isLoading && (
              <div className="w-[5rem] h-[5rem] bg-[#FFE81F] rounded-[25%] mx-auto  mt-[35vh] animate-spin"></div>
            )}
            {movies.map((movie, index) => {
              return (
                <MovieBox
                  className={`box-${movie.episode_id.toString()}`}
                  key={movie.episode_id}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  openCrawl={movie.opening_crawl}
                  handleClick={() => handleClickAction(index)}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
