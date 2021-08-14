import React from 'react'
import SearchBar from './SearchBar/SearchBar'

const App = () => {
    return (
        <div>
            <SearchBar ProductList = {['item1', 'item2', 'item3']}/>
        </div>
    )
}

export default App