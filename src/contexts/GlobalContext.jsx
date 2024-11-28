import { useState } from "react";
import { createContext } from "react";

export default function createContext({ children }) {
  
  //get data from api
  const getData = () => {
    //ajax call
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        // filter data
      })
    .catch(err => console.error(err))
  }

  // create Context
  const GlobalContext = createContext()

  //State vars
  const [movies, setMovies] = useState(getData)

  

  //return component
  return (
    <GlobalContext.Provider value={{movies, setMovies}}>
      {children}
    </GlobalContext.Provider>
  )

}