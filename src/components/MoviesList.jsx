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
  
  const { movies } = useContext(GlobalContext)

  return (
    <div className="container-xxl">

    <div className="d-flex flex-wrap gap-4">
      {movies.map((movie, index) => 
      {
        const Flag = languageFlag[movie.original_language.toLowerCase()]
        
        return(
         
          <div className="col" key={index} >
            <div className="card border-0 rounded object-fit-fill" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`, width:"342px", height:"513px"}} > 
              <div className="details">
                <div className="title">
                  {movie.title}
                </div>
                <div className="original_title">
                  {movie.original_title}
                </div>

                <div className="score">
                  {movie.vote_average} 
                </div>

                <div className="flag">
                  {Flag ? ( <Flag
                  width = { 30}
                  height = { 30}
                  language = { movie.original_language } />)
                  : (movie.original_language)}
                </div>

              </div>

              {/* <img className="rounded" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" /> */}
            </div>
        </div>
        )
    }
      )}
      </div>
      </div>

  )
}