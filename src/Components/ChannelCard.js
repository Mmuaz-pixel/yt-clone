import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'

import { CheckCircle } from '@mui/icons-material'

import { demoChannelUrl, demoChannelTitle } from '../Utils/constants'

const ChannelCard = ({ channel: { id: { channelId }, snippet } }) => {
  return (
    <Card sx={{ width: '300px', backgroundColor: '#1e1e1e', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{ width: 250, height: 250, borderRadius: '400px', backgroundColor: '#1e1e1e', ml: '15px'}}
          image={snippet?.thumbnails?.high?.url}
          loading="lazy" >
        </CardMedia>
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '35px' }}>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} className='underlined'>
          <Typography variant='subtitle2' fontWeight='bold' color='white' fontSize='large' justifyContent='center' display='flex'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 15, color: 'grey', ml: '5px', mt: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default ChannelCard