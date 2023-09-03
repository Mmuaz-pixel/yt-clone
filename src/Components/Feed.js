import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchData } from '../Utils/fetchData'


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setvideos] = useState([])

  useEffect(() => {
    try {
      fetchData(`/search?part=snippet&q=${selectedCategory}&maxResults=50`)
      .then((data) => { setvideos(data.items) })
    } catch (error) {
      alert(error.message)
    }
  }, [selectedCategory]);

  return (
    <Stack sx={{
      flexDirection: {
        sx: "column", md: "row"
      }
    }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography variant='body2' sx={{ display: 'flex', justifyContent: 'center', mb: '15px' }}>
          Copyright 2023 Muhammad Muaz
        </Typography>
      </Box>

      <Box px={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

        <Videos category={selectedCategory} videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed