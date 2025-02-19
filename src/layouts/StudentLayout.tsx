// src/layouts/StudentLayout.tsx
import React from 'react';
import { Box } from '@mui/material';

interface StudentLayoutProps {
  children: React.ReactNode;
}

const StudentLayout: React.FC<StudentLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default StudentLayout;
