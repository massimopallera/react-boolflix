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


   //get data from api
   function getData(url){
     //ajax call
     fetch(url)
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
 
   console.log(filteredMovies);
  return (
  <GlobalContext.Provider value={{movies, setMovies, title, setTitle, filteredMovies, setFilteredMovies}} >
      <SearchBar></SearchBar>
      <MovieList></MovieList>
  </GlobalContext.Provider>
  
)
}

export default App
