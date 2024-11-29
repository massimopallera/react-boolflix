import { GlobalContext } from "../contexts/GlobalContext"
import { useContext } from "react"

import SearchBar from "./searchBar"
import CardBack from "./CardBack"
import { useNavigate } from "react-router-dom"

const imgSize = {
  width: "342px",
  height: "513px",
}

export default function MovieList() {
  
  const { movies } = useContext(GlobalContext)
  const navigate = useNavigate()

  return (
    <>
      <SearchBar />
      <div className="container-xxl">

        <div className="d-flex flex-wrap gap-4">
          {movies.map((movie, index) =>  
            <div className="col" key={index} >
              <div className="card_container" style={{width: imgSize.width, height: imgSize.height}} onClick={() => navigate(String(movie.id))}>
                <div className="my-card" > 
                  
                  <div className="front" >
                    <img className="rounded" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                  </div>

                  {/* Back card component */}
                  <CardBack movie={movie}></CardBack>                    
                </div>
              </div>
            </div>
            
          )}
        </div>
      </div>
    </>

  )
}