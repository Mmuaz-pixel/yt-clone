import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography, CircularProgress } from '@mui/material'
import { CheckCircle, ThumbUpOutlined, Visibility } from '@mui/icons-material'
import { demoChannelTitle, demoVideoTitle, demoChannelUrl } from '../Utils/constants'
import { fetchData } from '../Utils/fetchData'
import RelatedVideos from './RelatedVideos'
import Description from './Description'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);

  
  const params = useParams();
  let snippet = null;

  useEffect(() => {
    fetchData(`/videos?part=contentDetails%2Csnippet%2Cstatistics&&id=${params.id}`)
      .then((data) => { setVideoDetail(data.items[0]);})
  }, [params.id])

  if (!videoDetail) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
    <CircularProgress color='inherit' />
  </Box>


  snippet = videoDetail.snippet;

  return (
    <Box minHeight='95vh' width='100vw'>
      <Stack direction={{ xs: 'column', md: 'row' }} width='100vw' gap={4}>
        <Box sx={{ width: { xs: '93%', md: '70%' }, top: '86px', marginLeft: 3, height: 'fit-content' }}>
          <ReactPlayer url={`https://youtube.com/watch?v=${params.id}`} controls className='react-player' width='100%' />
          <Typography variant='h6' fontWeight='bold' color='#FFF' sx={{ mt: '5px' }}>
            {snippet?.title || demoVideoTitle}
          </Typography>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} className='underlined'>
            <Typography variant='subtitle2' fontWeight='bold' color='grey'>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 15, color: 'grey', ml: '5px', mb: '-2px' }} />
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: 'auto', border: '1px solid white', borderRadius: '20px', mt: '6px', p: '8px', mr: '4px' }}>
              <Typography variant='subtitle2' color='white' marginRight='2px'>
                {videoDetail.statistics?.likeCount || 'Not specified'}
              </Typography><ThumbUpOutlined />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: 'auto', border: '1px solid white', borderRadius: '20px', mt: '6px', p: '8px' }}>
              <Typography variant='subtitle2' color='white' marginRight='2px' >
                {videoDetail.statistics?.viewCount || 'Not specified'}
              </Typography><Visibility />
            </Box>

          </Box>
          <Description snippet={snippet}/>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '30%' } }}>
          <RelatedVideos id={params.id} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail