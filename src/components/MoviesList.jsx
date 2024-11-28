import { GlobalContext } from "../contexts/GlobalContext"
import { useContext } from "react"

export default function MovieList() {
  
  const {movies} = useContext(GlobalContext)

  return (
    <ul>
      {movies.map((movie,index) => 
        <li key={index}>
            {movie.original_title}
            {movie.title}
            {movie.vote_average}
            {movie.original_language}
        </li>
      )}
    </ul>
  )
}