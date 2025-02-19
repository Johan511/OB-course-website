// src/components/ScrollableContent.tsx
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const ScrollableContent = styled(Box)(({ theme }) => ({
  marginTop: '64px', // Offset for header height
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
  // Custom scrollbar styles
  '&::-webkit-scrollbar': {
    width: '12px',
    height: '12px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.mode === 'dark'
      ? theme.palette.grey[900]
      : theme.palette.grey[200],
    borderRadius: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '6px',
    border: `3px solid ${
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[200]
    }`,
  },
}));

export default ScrollableContent;
