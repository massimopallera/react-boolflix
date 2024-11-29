import { useEffect, useState } from "react"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`

  }
}

export default function Cast({ movie, type }) {

  const [cast, setCast] = useState()

  function getCast() { 
    fetch(`https://api.themoviedb.org/3/${type}/${movie.id}/credits`, options) /* get dynamic from series or movie */
      .then(resp => resp.json())
      .then(data => { setCast(data.cast.slice(0, 5));  console.log(data.cast)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => getCast(), [])

  return (
    <>
      <div>Cast: {cast?.map((element) =>
        <span className="mx-1">
          { element.character }
        </span>
      )}
      </div>
    </>
  )
}