import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

const Description = ({ snippet }) => {
  const [desc_larged, setdesc_larged] = useState(false);
  const [description, setDescription] = useState(snippet.description.slice(0, 200));

  const handleDesc = () => {
    if (desc_larged) {
      setdesc_larged(false);
      setDescription(snippet.description.slice(0, 200));
    } else {
      setdesc_larged(true);
      setDescription(snippet.description);
    }
  };

  return (
    <Box sx={{ height: 'auto', width: '100%', backgroundColor: '#1f1f1f', borderRadius: '20px', mt: '20px' }}>
      <Typography variant='subtitle1' color='white' fontWeight='bold' my='5px' padding='10px' fontSize='large'>
        Description
      </Typography>
      <Typography variant='subtitle2' color='white' padding='10px'>
        {description || 'Not specified'}{' '}
        <span style={{ marginLeft: '40px', cursor: 'pointer' }} onClick={handleDesc}>
          {desc_larged ? '...See Less' : 'See More...'}
        </span>
      </Typography>
    </Box>
  );
};

export default Description