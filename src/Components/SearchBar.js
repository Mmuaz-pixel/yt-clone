import React from 'react'
import { } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'


const SearchBar = () => {
    const [search, setSearch] = useState(''); 
    const navigate = useNavigate(); 

    const searchSubmit = async() => {
        navigate(`/search/${search}`)
    }

    return (
        <Paper component='form' onSubmit={searchSubmit}
            sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}>

            <input
                className="search-bar" placeholder='Search...'
                value={search}
                onFocus={(e) => {
                    e.target.style.border = 'none';
                    e.target.style.outline = 'none';
                }}
                onChange={(e) => { setSearch(e.target.value) }}
            />

            <IconButton
                type='submit'
                sx={
                    {
                        p: '10px',
                        color: 'red'
                    }
                }
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar