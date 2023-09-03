import React, { useEffect, useState } from 'react'
import { Stack, Box, CircularProgress, Typography } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { fetchData } from '../Utils/fetchData'

const RelatedVideos = (props) => {
    const [videos, setVideos] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchData(`/search?relatedToVideoId=${props.id}&part=id%2Csnippet&type=video&maxResults=10`)
        .then((data)=> {setVideos(data.items);})
        setLoading(false)
    }, [props.id]);

    if(!loading) console.log(Array.isArray(videos))
    return (
        <>
            <Typography variant='h6' fontWeight='bold' fontSize={{xs: '30px', md: '30px'}} my='20px' ml='15px'>
                
                Similar Videos
            </Typography>
            {loading ?(
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <CircularProgress color='inherit' />
                </Box>
            ) : (
                <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>
                    {videos.map((item, idx) => (
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

export default RelatedVideos