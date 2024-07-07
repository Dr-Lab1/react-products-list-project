import { useState } from 'react'
import { SearchBar } from './components/forms/searchBar'
import { CheckBox } from './components/forms/checkBox'

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

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
