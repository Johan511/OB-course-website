// src/pages/TeacherDashboard.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChatBot from '../components/ChatBot';

interface TeacherDashboardProps {
  selectedAction: string;
}

const fetchChatHistory = async () => {
  try {
    const response = await fetch('/api/chathistory');
    if (!response.ok) {
      throw new Error('Failed to fetch chat history');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching chat history:', error);
    return null;
  }
};

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
      {selectedAction === "chatHistory" && (
        <Typography variant="body1">Chat history goes here.</Typography>
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
