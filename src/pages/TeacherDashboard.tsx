// src/pages/TeacherDashboard.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChatBot from '../components/ChatBot';

interface TeacherDashboardProps {
  selectedAction: string;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ selectedAction }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Teacher Dashboard
      </Typography>
      {selectedAction === "uploadAssignment" && (
        <Typography variant="body1">Upload Assignment form goes here.</Typography>
      )}
      {selectedAction === "viewSubmissions" && (
        <Typography variant="body1">Submissions list goes here.</Typography>
      )}
      {selectedAction === "uploadLectures" && (
        <Typography variant="body1">Upload Lectures form goes here.</Typography>
      )}
      {selectedAction === "" && (
        <Typography variant="body1">
          Select an action from the drop-right menu.
        </Typography>
      )}
      <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1300 }}>
        <ChatBot />
      </Box>
    </Box>
  );
};

export default TeacherDashboard;
