import { useEffect, useState } from "react";
import { createContext } from "react";

// create Context
const GlobalContext = createContext()

//create url
const uri = "https://api.themoviedb.org/3/search/movie"
const api_key = "edbdaf83c9f958fcaf983e6431328781"
const title = "ritorno-al-futuro"
const queryString = `?api_key=${api_key}&query=${title}`


const url = `${uri}${queryString}`

const Provider = ({ children }) => {
  
  // //State vars
  // const [movies, setMovies] = useState([])


  // //get data from api
  // function getData(url){
  //   //ajax call
  //   fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data)
  //       setMovies(data.results)
  //     })
  //   .catch(err => console.error(err))
  // }

  // // useEffect(() => getData(url), [])
  // useEffect(() => {
  //   console.log("useEffect chiamato");
  //   getData(url);
  // }, []);
  

  // console.log(movies);
  
  

  //return component
  <h1>Ciao</h1>
  
  // return (
  //   <GlobalContext.Provider value={{movies, setMovies}}>
  //     {children}
  //   </GlobalContext.Provider>
  // )

}

export { GlobalContext, Provider };