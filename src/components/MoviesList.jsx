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

const imgSize = {
  width: "342px",
  height: "513px",
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

            <div className="card_container" style={{width: imgSize.width, height: imgSize.height}}>


            <div className="my-card " /* style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`, width:"342px", height:"513px"}} */ > 
                

                <div className="front" >
                  <img className="rounded" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                </div>
                
                <div className="back">
                  <h2 className="title">
                  {movie.title}
                </h2>
                <div className="original_title">
                    <h5>Original Title: {movie.original_title}</h5>
                    
                </div>
                    <p>{movie.overview}</p>
                <div className="score">
                  {movie.vote_average} 
                </div>

                  <div className="flag">
                    <span>Original Language: </span>
                  {Flag ? ( <Flag
                  width = { 30}
                  height = { 30}
                  language = { movie.original_language } />)
                  : (movie.original_language)}
                  </div>
              </div>

                    
            </div>
                  </div>
        </div>
        )
    }
      )}
      </div>
      </div>

  )
}