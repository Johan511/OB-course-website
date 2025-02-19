// src/pages/TeacherDashboard.tsx
import React from 'react';
import { Typography } from '@mui/material';
import UploadAssignment from '../components/UploadAssignment';

const TeacherDashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">Teacher Dashboard</Typography>
      <UploadAssignment />
      {/* Add components for uploading videos, notes, transcripts, etc. */}
    </div>
  );
};

export default TeacherDashboard;
