import { useContext, useState, useEffect } from 'react'
import { GlobalContext, Provider } from './contexts/GlobalContext'

import MoviesList from './components/MovieList'

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
         console.log(data)
         setMovies(data.results)
       })
     .catch(err => console.error(err))
   }
 
   useEffect(() => {
     console.log("useEffect chiamato");
     getData(url);
   }, []);
   
 
   console.log(movies);

  <GlobalContext.Provider value={movies} >
    <Provider>
      
      </Provider>
      <MoviesList />
    </GlobalContext.Provider>


   /*  //State vars
    const [movies, setMovies] = useState([])

    //get data from api
    function getData(url){
      //ajax call
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          // console.log(data)
          setMovies(data.results)
        })
      .catch(err => console.error(err))
    }
  
    
    useEffect(() => getData(url), [])
  
    console.log(movies);

  // const { movies, setMovies }= useContext(GlobalContext)

  return (
    <>
      <GlobalContext.Provider value={movies}>

      </GlobalContext.Provider>
    </>
  ) */
}

export default App
