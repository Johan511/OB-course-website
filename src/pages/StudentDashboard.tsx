// src/pages/StudentDashboard.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChatBot from '../components/ChatBot';

interface StudentDashboardProps {
  selectedMaterial: string;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ selectedMaterial }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>
      {selectedMaterial === "lectureVideo" && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Lecture Video
          </Typography>
          <video controls style={{ width: '100%', maxWidth: '800px' }}>
            <source src="/static-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      )}
      {selectedMaterial === "assignments" && (
        <Typography variant="body1">Assignments content goes here...</Typography>
      )}
      {selectedMaterial === "lectureNotes" && (
        <Typography variant="body1">Lecture notes content goes here...</Typography>
      )}
      {selectedMaterial === "" && (
        <Typography variant="body1">
          Select an item from the sidebar to view its content.
        </Typography>
      )}
    </Box>
  );
};

export default StudentDashboard;
