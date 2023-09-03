import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import '@fontsource/roboto/500.css';


import Navbar from './Components/Navbar';
import SearchFeed from './Components/SearchFeed';
import Feed from './Components/Feed'
import ChannelDetail from './Components/ChannelDetail'
import VideoDetail from './Components/VideoDetail'


function App() {

  return (
    <Router>
      <Box sx={{ backgroundColor: '#000', color: 'white' }}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='video/:id' element={<VideoDetail/>}/>
          <Route path='channel/:id' element={<ChannelDetail/>}/>
          <Route path='search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
