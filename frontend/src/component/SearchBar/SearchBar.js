import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = () => {
    const [SearchValue, SetSearchValue] = useState('')

    const HandleSearchValueChange = (event) => {
        SetSearchValue (event.target.value)
    }

    const ResetSearchValue = () => {
        SetSearchValue('')
    }

    return (
        <div>
            <input type = 'text' value = {SearchValue} onChange = {HandleSearchValueChange}/>
            <button onClick = {ResetSearchValue}>Clear</button>
        </div>
    )
}

export default SearchBar