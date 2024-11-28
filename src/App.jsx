import { useState, useEffect } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Header from './components/AppHeader'
import MovieList from './components/MoviesList'
//create url
const uri = "https://api.themoviedb.org/3/search/"
const api_key = "edbdaf83c9f958fcaf983e6431328781"

import './App.css'
// const title = "ritorno-al-futuro"



function App() {


   //State vars
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")
  // const [filteredMovies, setFilteredMovies] = useState([])
  // const queryString = `?api_key=${api_key}&query=${title}`
  

   //get data from api
   /* function getMovies(url){
     //ajax call
     fetch(`https://api.themoviedb.org/3/discover/movie?api_key${api_key}`,
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
  
  function getSeries(url) {
    fetch(`https://api.themoviedb.org/3/discover/tv?${api_key}&query=${title}`,
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
      } */
 
  return (
    <GlobalContext.Provider value={{ movies, setMovies, title, setTitle, uri, api_key }}>
      <div className="bg-dark h_100 w-100">
      <Header />
      
      <MovieList></MovieList>
      </div>
  </GlobalContext.Provider>
  
)
}

export default App
