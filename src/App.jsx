import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './contexts/GlobalContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import DefaultLayout from './components/DefaultLayout'
import MovieList from './components/MoviesList'
import SingleMovie from './components/SingleMovie'
//create url
const uri = "https://api.themoviedb.org/3/search/"
const api_key = import.meta.env.VITE_API_KEY

import './App.css'



function App() {


   //State vars
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")


  return (
    <GlobalContext.Provider value={{ movies, setMovies, title, setTitle, uri, api_key }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<MovieList />} />
            <Route path='/:type/:id' element={<SingleMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  
)
}

export default App
