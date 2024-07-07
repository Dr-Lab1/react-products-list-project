import { useState } from 'react'
import { SearchBar } from './components/forms/searchBar'
import { CheckBox } from './components/forms/checkBox'

function App() {
  return <div className="container col-6">
    <NavBar />
    <ProductTable />
  </div>
}

function NavBar() {
  return <div className="container">
    <SearchBar placeholder="Rechercher..." />
    <CheckBox label="N'afficher que des produits disponibles" />
  </div>
}

function ProductTable() {
  return <table className='table'>
    <thead>
      <tr>
        <th>Noms</th>
        <th>Prix</th>
      </tr>
    </thead>

    <tbody>
      
    </tbody>

  </table>
}

export default App
