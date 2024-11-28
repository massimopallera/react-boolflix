import { GlobalContext } from "../contexts/GlobalContext"
import { useContext } from "react"

export default function MovieList() {
  
  const { filteredMovies } = useContext(GlobalContext)

  return (
    <ul>
      {filteredMovies.map((movie,index) => 
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