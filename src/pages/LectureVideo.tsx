// src/pages/LectureVideo.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const LectureVideo: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Lecture Video
      </Typography>
      <video controls style={{ width: '100%', maxWidth: '800px' }}>
        <source src="/static_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default LectureVideo;
