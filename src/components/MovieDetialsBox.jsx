import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
function MovieDetialsBox(props) {
  const [movieData, setMovieData] = useState({});
  const [isMovieLoading, setIsMovieLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async (movieDataType, movieDataUrls) => {
      const data = {};

      for (const movieDataUrl of movieDataUrls) {
        try {
          const response = await fetch(movieDataUrl);
          if (response.ok) {
            const movieData = await response.json();
            data[movieDataUrl] = movieData.name; // Store the name with the URL as the key
          } else {
            console.error(
              `Error fetching ${movieDataType} data for URL: ${movieDataUrl}`
            );
          }
        } catch (error) {
          console.error(`Error fetching ${movieDataType} data: ${error}`);
        }
      }

      setMovieData((prevData) => ({
        ...prevData,
        [movieDataType]: data, // Store the data for the resource type
      }));
    };

    // Fetch data for characters, planets, species, vehicles, and starships
    const fetchDataForAllResources = async () => {
      if (props.characters.length > 0) {
        await fetchMovieData("characters", props.characters);
      }
      if (props.planets.length > 0) {
        await fetchMovieData("planets", props.planets);
      }
      if (props.species.length > 0) {
        await fetchMovieData("species", props.species);
      }
      if (props.vehicles.length > 0) {
        await fetchMovieData("vehicles", props.vehicles);
      }
      if (props.starships.length > 0) {
        await fetchMovieData("starships", props.starships);
      }

      setIsMovieLoading(false); // Set isLoading to false after fetching all data
    };
    fetchDataForAllResources();
    // Repeat for vehicles and starships
  }, [
    props.characters,
    props.planets,
    props.species,
    props.vehicles,
    props.starships,
  ]);

  // console.log(movieData);
  return (
    <div>
      {isMovieLoading ? (
        <div>
          <div className="w-[5rem] h-[5rem] bg-[#FFE81F] rounded-[25%] mx-auto  mt-[35vh] animate-spin"></div>
          <p className="w-[60%] text-center mx-auto text-[#ffe81f] text-[18px] animate-pulse mt-[10px] ">
            Patience, Young Padawan. Data from a galaxy far, far away is on its
            way...
          </p>
        </div>
      ) : (
        <div className="bg-[#232323] px-[2rem] py-[5rem] text-[2rem] sm:w-[70%] sm:mx-[auto] sm:my-[5rem] mx-[2rem]">
          <p
            onClick={props.handleBackClick}
            className="text-[1.4rem] text-[#9d9d9d] mb-[3rem]"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="md"
              className="mr-[1rem]"
              style={{ color: "#9d9d9d" }}
            />
            Back to list
          </p>
          <h1 className="text-center text-[3.8rem] mb-[2rem]">{props.title}</h1>
          <p className="text-[1.6rem] text-center mb-[1rem]">
            <span className="text-[1.6rem] text-[#9d9d9d]">Director:</span>{" "}
            {props.director}
          </p>
          <p className="text-[1.6rem] text-center mb-[3rem]">
            <span className="text-[1.6rem] text-[#9d9d9d]">Producers:</span>{" "}
            {props.producer}
          </p>
          <h2 className="mb-[1rem] text-[#9d9d9d]">Description</h2>
          <p className="text-[1.4rem] text-justify">{props.openCrawl}</p>
          <hr className="my-[2rem]" />
          <h2 className="mb-[1rem] text-[#9d9d9d]">Characters</h2>
          <ul className="sm:grid sm:grid-cols-3 pl-[2rem]">
            {Object.values(movieData.characters || {}).map(
              (character, index) => {
                return (
                  <li key={index} className="text-[1.4rem] list-disc">
                    {character}
                  </li>
                );
              }
            )}
          </ul>
          <hr className="my-[2rem]" />
          <h2 className="mb-[1rem] text-[#9d9d9d]">Planets</h2>
          <ul className="sm:grid sm:grid-cols-3 pl-[2rem]">
            {Object.values(movieData.planets || {}).map((planet, index) => {
              return (
                <li key={index} className="text-[1.4rem] list-disc">
                  {planet}
                </li>
              );
            })}
          </ul>
          <hr className="my-[2rem]" />
          <h2 className="mb-[1rem] text-[#9d9d9d]">Species</h2>
          <ul className="sm:grid sm:grid-cols-3 pl-[2rem]">
            {Object.values(movieData.species || {}).map((specie, index) => {
              return (
                <li key={index} className="text-[1.4rem] list-disc">
                  {specie}
                </li>
              );
            })}
          </ul>
          <hr className="my-[2rem]" />
          <h2 className="mb-[1rem] text-[#9d9d9d]">Starships</h2>
          <ul className="sm:grid sm:grid-cols-3 pl-[2rem]">
            {Object.values(movieData.starships || {}).map((starship, index) => {
              return (
                <li key={index} className="text-[1.4rem] list-disc">
                  {starship}
                </li>
              );
            })}
          </ul>
          <hr className="my-[2rem]" />
          <h2 className="mb-[1rem] text-[#9d9d9d]">Vehicles</h2>
          <ul className="sm:grid sm:grid-cols-3 pl-[2rem]">
            {Object.values(movieData.vehicles || {}).map((vehicle, index) => {
              return (
                <li key={index} className="text-[1.4rem] list-disc">
                  {vehicle}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieDetialsBox;
