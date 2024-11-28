import { useState } from "react"
import { useContext } from "react"

import { GlobalContext } from "../contexts/GlobalContext"

export default function SearchBar() {
  // const [searchTitle, setSearchTitle] = useState('Cerca Film...')
  const { title, setTitle } = useContext(GlobalContext)

  return (
    <>
      <input type="search"
        value={title}
        id="searchText"
        name="searchTetx"
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  )
}