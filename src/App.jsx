import "./App.css";
import { useEffect, useState } from "react";
import MovieBox from "./components/MovieBox";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setMovies(data.results);
    }
    getMovies();
  }, []);
  console.log(movies);

  return (
    <>
      <h1>Star Wars</h1>
      <div>
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
