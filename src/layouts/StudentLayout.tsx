// src/layouts/StudentLayout.tsx
import React from 'react';
import { Box } from '@mui/material';
import ChatBot from '../components/ChatBot';

interface StudentLayoutProps {
  children: React.ReactNode;
}

const StudentLayout: React.FC<StudentLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box>
        {children}
      </Box>
      <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1300 }}>
        <ChatBot />
      </Box>
    </Box>
  );
};

export default StudentLayout;
