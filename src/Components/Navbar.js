import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../Utils/logo.png'
import SearchBar from './SearchBar';

const Navbar = () => {

    return (
        <Stack direction='row' p={2} alignItems='center' justifyContent='space-between' sx={{ position: 'sticky', background: '#000', top: 0, zIndex: '999' }}>
            <Link to='/' style={{ display: 'flex', alignItems: 'center', background: 'white', paddingLeft: '10px', borderRadius: '30px', paddingRight: '10px' }}>
                <img src={logo} alt="logo" height={50} className='logo' />
            </Link>
            <Typography sx={{color: 'red', fontWeight: 'bold', ml: '-15px'} } variant='h6' className='name'>Yt Clone - Muaz</Typography>
            <SearchBar />
        </Stack>
    )
}

export default Navbar