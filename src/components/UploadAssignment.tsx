// src/components/UploadAssignment.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

const UploadAssignment: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    // Here, add logic to send the file to your backend API.
    console.log('Uploading file:', file);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Upload Assignment</Typography>
      <TextField
        type="file"
        inputProps={{ accept: 'application/pdf,video/*' }}
        onChange={handleFileChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </Box>
  );
};

export default UploadAssignment;
