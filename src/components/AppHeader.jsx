import Logo from "./Logo"
import SearchBar from "./searchBar"
export default function Header() {
  return (
    <header className='d-flex justify-content-between px-4 py-3'>
      {/* <SearchBar /> */}
      <Logo />
    </header>
  )
}