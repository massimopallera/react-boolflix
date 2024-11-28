import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const MoviesList = () => {
  
  const {movies} = useContext(GlobalContext);


  // const { movies } = context;

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.title}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MoviesList;
