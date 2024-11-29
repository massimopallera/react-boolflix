import Stars from "./Stars"
import Flag from "./Flag"

export default function CardBack({ movie }) {
  return (
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
  )
}