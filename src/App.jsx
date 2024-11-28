import { useState, useEffect } from 'react'
import { GlobalContext } from './contexts/GlobalContext'

import MovieList from './components/MoviesList'
//create url
const uri = "https://api.themoviedb.org/3/search/movie"
const api_key = "edbdaf83c9f958fcaf983e6431328781"
const title = "ritorno-al-futuro"
const queryString = `?api_key=${api_key}&query=${title}`


const url = `${uri}${queryString}`

function App() {


   //State vars
   const [movies, setMovies] = useState([])


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
   }, []);
   
 
  //  console.log(movies);
  return (
  <GlobalContext.Provider value={{movies, setMovies}} >
    <MovieList></MovieList>
  </GlobalContext.Provider>
  
)
}

export default App
