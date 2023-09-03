import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Card, CardContent, CardMedia} from '@mui/material'

import { CheckCircle } from '@mui/icons-material'

import { demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl} from '../Utils/constants'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{ width: '300px'}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <CardMedia 
            alt={snippet?.title}
            sx={{width: 300, height: 180}}
            image={snippet?.thumbnails?.high?.url}
            loading="lazy" >
            </CardMedia>
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e',height: '106px'}}>
            <Link to={videoId?`/video/${videoId}`:demoVideoUrl} className='underlined'>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFF' >
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl} className='underlined'>
                <Typography variant='subtitle2' fontWeight='bold' color='grey' >
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 15, color: 'grey', ml: '5px', mb: '-2px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard