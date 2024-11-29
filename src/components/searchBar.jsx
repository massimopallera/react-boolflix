import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { useLocation } from "react-router-dom"

export default function SearchBar() {
  const { title, setTitle, setMovies, uri, api_key } = useContext(GlobalContext)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` 

    }
  }

  const location = useLocation()

  function getMovies(){
    //ajax call
    fetch(`${uri}movie?api_key${api_key}&query=${title}`, options)
      .then(resp => resp.json())
      .then(data => setMovies(data.results.map(element => ({
          ...element,
          type: "movie"  
        })
      )))
      .catch(err => console.error(err))
  }
 
 function getSeries() {
   fetch(`${uri}tv?api_key=${api_key}&query=${title}`,options)
     .then(resp => resp.json())
     .then(data => {
       const results = data.results
       const addTitle = results.map(element => ({
         ...element,
         title: element.name,
         original_title: element.original_name,
         type: "tv"
       }))
       setMovies( prevState => [...prevState, ...addTitle])
       
     })
  }

  function getData() {
    getMovies()
    getSeries()
  }

  console.log(location);
  


  return (
    <div className="search-bar mt-2 mb-5 mx-3">
          <input type="search" className="rounded-pill py-1 px-4"
            value={title}
            id="searchText"
            name="searchText"
            placeholder=" 🔍 Cerca... "
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="mx-3 rounded-pill py-1 px-4" onClick={() => getData()}>Cerca</button>
    </div>
  )
}