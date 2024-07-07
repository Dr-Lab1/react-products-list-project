import { useState } from 'react'
import { SearchBar } from './components/forms/searchBar'
import { CheckBox } from './components/forms/checkBox'

function App() {
  return <div className="container col-6">
    <NavBar />
  </div>
}

function NavBar() {
  return <div className="container">
    <SearchBar placeholder="Rechercher..." />
    <CheckBox label="N'afficher que des produits disponibles" />
  </div>
}

export default App
