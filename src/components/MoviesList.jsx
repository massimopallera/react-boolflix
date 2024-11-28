import { GlobalContext } from "../contexts/GlobalContext"
import { useContext } from "react"
import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU} from 'country-flag-icons/react/3x2'

const languageFlag = {
  "it" : IT, 
  "us" : US, 
  "fr" : FR, 
  "es" : ES, 
  "jp" : JP, 
  "en" : GB, 
  "de" : DE, 
  "cn" : CN, 
  "kr" : KR, 
  "ru": RU,
  // "en" : EN
}

export default function MovieList() {
  
  const { filteredMovies } = useContext(GlobalContext)

  return (
    <ul>
      {filteredMovies.map((movie, index) => 
      {
        const Flag = languageFlag[movie.original_language.toLowerCase()]
        
        return(
         
          <li key = { index } >
            {movie.title}
            {movie.original_title}
            {movie.vote_average}
            {Flag ? (<Flag
              width={30}
              height={30}
              language={movie.original_language} />) 
              : (movie.original_language)}
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" srcset="" />
        </li>
        )
    }
      )}
    </ul>
  )
}