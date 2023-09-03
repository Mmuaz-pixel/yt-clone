import React, { useEffect, useState } from 'react'
import { Stack, Box, Typography, CircularProgress } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = (props) => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); 
        }, 700);
    }, [props.videos]);

    if(!Array.isArray(props.videos)) return <Typography variant='h4' fontWeight='bold' sx={{display: 'flex', justifyContent: 'center', color: 'red'}}>Sorry! The API is not available right now</Typography>
    return (
        <>
            <Typography variant='h4' fontWeight='bold' mb={2} ml={1}>

                {props.category} <span style={{ color: '#FC1503' }}>Videos</span>
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <CircularProgress color='inherit' />
                </Box>
            ) : (
                <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>
                    {props.videos.map((item, idx) => (
                        <Box key={idx}>
                            {item.id.videoId && <VideoCard video={item} />}
                            {item.id.channelId && <ChannelCard channel={item} />}
                        </Box>
                    ))}
                </Stack>
            )}
        </>
    )
}

export default Videos