import { useContext } from "react"

import { GlobalContext } from "../contexts/GlobalContext"

export default function SearchBar() {
  const { title, setTitle, setMovies, uri, api_key } = useContext(GlobalContext)

  function getMovies(){
    //ajax call
    fetch(`${uri}movie?api_key${api_key}&query=${title}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGJkYWY4M2M5Zjk1OGZjYWY5ODNlNjQzMTMyODc4MSIsIm5iZiI6MTczMjc4NTgyMS4zMTUwNzU5LCJzdWIiOiI2NzQ4MzMxZjk0MjE1ZGNkNmQ2YmFkOGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qOqjcRnW7qyDR-brDk_yw5e3ZqEJQlOo7bVX-cAV2R8'

        }
      }
    )
      .then(resp => resp.json())
      .then(data => {
       //  console.log(data)
         setMovies(data.results)
       //  console.log(movies);
        
      })
    .catch(err => console.error(err))
  }
 
 function getSeries() {
   fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${title}`,
     {
       method: 'GET',
       headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGJkYWY4M2M5Zjk1OGZjYWY5ODNlNjQzMTMyODc4MSIsIm5iZiI6MTczMjc4NTgyMS4zMTUwNzU5LCJzdWIiOiI2NzQ4MzMxZjk0MjE1ZGNkNmQ2YmFkOGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qOqjcRnW7qyDR-brDk_yw5e3ZqEJQlOo7bVX-cAV2R8'  
       }
     })
     .then(resp => resp.json())
     .then(data => {
      //  console.log(data)
       const result = data.results
       const change = result.map(element => ({
         ...element,
         title: element.name,
         original_title: element.original_name
       }))
       setMovies( prevState => [...prevState, ...change])
       
     })
  }

  function getData() {
    getMovies()
    getSeries()
  }


  return (
    <div className="search-bar ">
      <input type="search" className="rounded-pill py-1 px-4"
        value={title}
        id="searchText"
        name="searchText"
        placeholder="Cerca... "
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="mx-3 rounded-pill py-1 px-4" onClick={() => getData()}>Cerca</button>
    </div>
  )
}