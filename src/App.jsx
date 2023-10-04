import "./App.css";
import { useEffect, useState } from "react";
import MovieBox from "./components/MovieBox";
import logo from "./assets/Star_Wars_Logo..png";
// import backgroundOne from "./assets/bg-1.jpeg";
// import backgroundTwo from "./assets/bg-2.jpeg";
// import backgroundThree from "./assets/bg-3.jpeg";
// import backgroundFour from "./assets/bg-4.jpeg";
// import backgroundFive from "./assets/bg-5.jpeg";
// import backgroundSix from "./assets/bg-6.jpeg";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

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

  return (
    <>
      <div>
        <img
          src={logo}
          alt="Star Wars Logo"
          className="w-[50%] sm:w-[20rem] mx-auto"
        />
      </div>
      <div className="px-[2rem] sm:px-[5rem] sm:flex sm:flex-wrap sm:justify-between">
        {isLoading && (
          <div className="w-[5rem] h-[5rem] bg-[#FFE81F] rounded-[25%] mx-auto  mt-[35vh] animate-spin"></div>
        )}
        {movies.map((movie) => {
          return (
            <MovieBox
              key={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              openCrawl={movie.opening_crawl}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
