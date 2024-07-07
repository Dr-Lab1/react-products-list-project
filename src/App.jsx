import { useState } from 'react'
import { SearchBar } from './components/forms/searchBar'
import { CheckBox } from './components/forms/checkBox'
import { ProductCategoryRow } from './components/products/productCategoryRow'
import { ProductRow } from './components/products/productRow'

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {

  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  const visibleProducts = PRODUCTS.filter(product => {
    if (isChecked && !product.stocked) {
      return false
    }

    return true;

  });


  return <div className="container col-6">
    <NavBar isChecked={isChecked} onCheck={handleCheck} />
    <ProductTable products={visibleProducts} />
  </div>
}

function NavBar({ isChecked, onCheck }) {
  return <div className="container">
    <SearchBar placeholder="Rechercher..."  />
    <CheckBox 
      label="N'afficher que des produits disponibles" 
      isChecked={isChecked} 
      onCheck={onCheck} 
    />
  </div>
}

function ProductTable({ products }) {

  let rows = [];
  let lastCategory = '';

  products.map((item) => {

    if (item.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={item.category} product={item} />);
    }

    rows.push(<ProductRow key={item.name} product={item} />);

    lastCategory = item.category;

  });

  return <table className='table'>
    <thead>
      <tr>
        <th>Noms</th>
        <th>Prix</th>
      </tr>
    </thead>

    <tbody>
      {rows}
    </tbody>

  </table>
}

export default App
