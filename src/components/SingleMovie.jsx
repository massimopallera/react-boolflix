import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { useParams } from "react-router-dom"
import Stars from "./Stars"

const imgSize = {
  width: "342px",
  height: "513px",
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`

  }
}

export default function SingleMovie() {
  


  const { id } = useParams()
  const [movie, setMovie] = useState()
  
  function getMovie() {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    .then(resp => resp.json())
    .then(data => setMovie(data))
    .catch(err => console.error(err))
    }

  useEffect(() => getMovie(), [])
  // const { movies } = useContext(GlobalContext)
  

  return (
    <>
      <div className="container my-4">

        
        {!movie ? 
            <p>Loading...</p >
          : 
          (
            <>
              <img src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} style={{ maxWidth:"1280px", height:"720px"}} alt="" />
              
              <div className="text-white d-flex flex-column gap-2 my-3">
              <h2>{movie?.title}</h2>
              <h6>Original title: {movie?.original_title}</h6>
              <p className="my-4">{movie?.overview}</p>
              
              <Stars movieScore={movie.vote_average}/>
              </div>
            </>
        
          )}
      </div>
      
    </>
  )
}