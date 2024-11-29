import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Stars from "./Stars"
import Cast from "./Cast"

// const imgSize = {
//   width: "342px",
//   height: "513px",
// }

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`

  }
}

export default function SingleMovie() {
  


  const { id, type } = useParams()
  const [movie, setMovie] = useState()
  
  function getMovie() {
    fetch(`https://api.themoviedb.org/3/${type}/${id}`, options)
    .then(resp => resp.json())
    .then(data => setMovie(data))
    .catch(err => console.error(err))
    }

  useEffect(() => getMovie(), [])  

  return (
    <>
      <div className="container my-4">

        
        {!movie ? 
            <p>Loading...</p >
          : 
          (
            <div className="bg-black p-2 rounded" style={{width: "100%"}}>
              <img src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} style={{ maxWidth:"1280px", height:"720px"}} alt=""  className="rounded"/>
              
              <div className="text-white d-flex flex-column gap-2 my-3">
                <h2>{movie?.title || movie?.name}</h2>
                <h6>Original title: {movie?.original_title || movie?.original_name}</h6>
                <p className="my-4">{movie?.overview}</p>
                
                <Stars movieScore={movie?.vote_average} />
                
                <Cast movie={movie} type={type}></Cast>
              </div>
            </div>
        
          )}
      </div>
      
    </>
  )
}