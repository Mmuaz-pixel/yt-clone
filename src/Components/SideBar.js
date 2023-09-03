import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../Utils/constants'
import { useNavigate } from 'react-router-dom'

const SideBar = (props) => {

    const selectedCategory = props.selectedCategory; 
    const navigate = useNavigate(); 
    const setSelectedCategory = props.setSelectedCategory; 

    return (
        <Stack direction="row" sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' }
        }} className='sidebar'>

            {categories.map((category) => {
                return <button className='sidebar-button' style={{
                    background: category.name === selectedCategory && '#FC1503'
                }} onClick={()=> {setSelectedCategory(category.name); navigate('/')}} key={category.name}>
                    <span style={{color: category.name === selectedCategory && '#000'}}>{category.icon}</span>
                    <span style={{opacity: category.name === selectedCategory? '1': '0.8'}}>{category.name}</span>
                </button>
            })}
        </Stack>
    )
}

export default SideBar