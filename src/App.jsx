import { useState } from 'react'
import { SearchBar } from './components/forms/searchBar'

function App() {
  return <div className="container col-6">
    <NavBar />
  </div>
}

function NavBar() {
  return <div className="container">
    <SearchBar placeholder="Rechercher..." />
  </div>
}

export default App
