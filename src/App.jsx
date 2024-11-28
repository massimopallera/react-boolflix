import { useState, useEffect } from 'react'
import { GlobalContext } from './contexts/GlobalContext'

import SearchBar from './components/searchBar'
import MovieList from './components/MoviesList'
//create url
const uri = "https://api.themoviedb.org/3/search/movie"
const api_key = "edbdaf83c9f958fcaf983e6431328781"
// const title = "ritorno-al-futuro"



function App() {


   //State vars
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [title, setTitle] = useState("")

  const queryString = `?api_key=${api_key}&query=${title}`
  const url = `${uri}${queryString}`

  


  // https://api.themoviedb.org/3/discover/movie

   //get data from api
   function getData(url){
     //ajax call
     fetch("https://api.themoviedb.org/3/discover/movie",
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
 
   useEffect(() => {
    //  console.log("useEffect chiamato");
     getData(url);
    //  setFilteredMovies(movies)
   }, []);
   
  useEffect(() => {
    const filteredList = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()) || movie.original_title.toLowerCase().includes(title.toLowerCase()) )
    setFilteredMovies(filteredList)
  } ,[title, movies])
 
  //  console.log(filteredMovies);
  return (
  <GlobalContext.Provider value={{movies, setMovies, title, setTitle, filteredMovies, setFilteredMovies}} >
      <SearchBar></SearchBar>
      <MovieList></MovieList>
  </GlobalContext.Provider>
  
)
}

export default App
