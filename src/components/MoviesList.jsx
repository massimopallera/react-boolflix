import { GlobalContext } from "../contexts/GlobalContext"
import { useContext } from "react"

import Stars from './Stars'
import Flag from './Flag'

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
          // const Flag = languageFlag[movie.original_language.toLowerCase()]
          
          return(
          
            <div className="col" key={index} >
              <div className="card_container" style={{width: imgSize.width, height: imgSize.height}}>
                <div className="my-card" > 
                  
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

                    {/* Print stars */}
                    <Stars movieScore={movie.vote_average}></Stars>
                    {/* Print language flag */}
                    <Flag movieLanguage={movie.original_language}></Flag>

                  </div>

                      
                </div>
              </div>
          </div>
          )
        })}
        </div>
      </div>

  )
}