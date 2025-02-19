// src/pages/StudentDashboard.tsx
import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import StudentLayout from '../layouts/StudentLayout';


const StudentDashboard: React.FC = () => {
  return (
    <StudentLayout>
      {/* Toolbar to ensure content is below the header */}
      <Toolbar />
      {/* Main content area */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Student Dashboard</Typography>
        {/* Other student dashboard content goes here */}
      </Box>
    </StudentLayout>
  );
};

export default StudentDashboard;
