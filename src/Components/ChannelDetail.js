import React from 'react'
import { fetchData } from '../Utils/fetchData'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CircularProgress, Box, Stack, CardMedia, Typography } from '@mui/material'
import { CheckCircle, Visibility, Notifications, PlayArrow } from '@mui/icons-material'
import Description from './Description'
import Videos from './Videos'

const ChannelDetail = () => {

  const params = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState(null); 
  let snippet = null;

  useEffect(() => {
    fetchData(`/channels?part=snippet%2Cstatistics&id=${params.id}`)
      .then(data => { setChannel(data.items[0]); console.log(data.items[0]) })
    fetchData(`/search?channelId=${params.id}&part=snippet%2Cid&order=date&maxResults=50`)
    .then(data=> setVideos(data.items))
  }, [params.id])

  if (!channel || !videos) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
    <CircularProgress color='inherit' />
  </Box>

  snippet = channel.snippet;

  return (
    <Stack>
      <CardMedia
        alt={snippet?.title}
        sx={{ width: 250, height: 250, borderRadius: '400px', backgroundColor: '#1e1e1e', margin: '0 auto' }}
        image={snippet?.thumbnails?.high?.url}
        loading="lazy" >
      </CardMedia>
      <Typography variant='subtitle2' fontWeight='bold' color='white' fontSize='larger' justifyContent='center' display='flex' marginTop='4px'>
        {snippet?.title}
        <CheckCircle sx={{ fontSize: 15, color: 'grey', ml: '5px', mt: '5px' }} />
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: 'auto', border: '1px solid white', borderRadius: '20px', mt: '6px', p: '8px', mr: '4px' }}>
          <Typography variant='subtitle2' color='white' marginRight='2px'>
            {channel.statistics?.subscriberCount|| 'Not specified'} subscribers
          </Typography><Notifications />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: 'auto', border: '1px solid white', borderRadius: '20px', mt: '6px', p: '8px' , justifyContent: 'center'}}>
          <Typography variant='subtitle2' color='white' marginRight='2px' >
            {channel.statistics?.viewCount|| 'Not specified'} views
          </Typography><Visibility sx={{mb: '-2px'}}/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: 'auto', border: '1px solid white', borderRadius: '20px', mt: '6px', p: '8px' , justifyContent: 'center'}}>
          <Typography variant='subtitle2' color='white' marginRight='2px' >
            {channel.statistics?.videoCount|| 'Not specified'} videos
          </Typography><PlayArrow sx={{mb: '-2px'}}/>
        </Box>

      </Box>
      <Box sx={{ margin: '0 15px' }}>
        <Description snippet={snippet} />
      </Box>
      <Box px={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2, mt: '10px' }}>

        <Videos category='Channel' videos={videos} />
      </Box>
    </Stack>
  )
}

export default ChannelDetail