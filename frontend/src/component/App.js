import React, { useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProductBar from './ProductBar/ProductBar'

const App = () => {
    const [Products, SetProducts] = React.useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((Products) => {
                const newProducts = Products.map((product) => {
                    return {name : product.title, price : product.price, image : product.image}
                })
                SetProducts(newProducts)
            })
    }, []) 
    return (
        <div>
            <ProductBar />
            <SearchBar ProductList={Products} />
        </div>
    )
}

export default App