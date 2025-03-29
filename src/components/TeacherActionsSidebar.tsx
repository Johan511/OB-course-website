// src/components/TeacherActionsSidebar.tsx
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const drawerWidth = 240;

interface TeacherActionsSidebarProps {
  open: boolean;
  onClose: () => void;
  onSelectAction: (action: string) => void;
}

const TeacherActionsSidebar: React.FC<TeacherActionsSidebarProps> = ({ open, onClose, onSelectAction }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: '64px', // start below the header
        },
      }}
    >
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { onSelectAction("uploadAssignment"); onClose(); }}>
            <ListItemIcon>
              <UploadFileIcon />
            </ListItemIcon>
            <ListItemText primary="Upload Assignment" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { onSelectAction("viewSubmissions"); onClose(); }}>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText primary="View Submissions" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { onSelectAction("uploadLectures"); onClose(); }}>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Upload Lectures" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { onSelectAction("chatHistory"); onClose(); }}>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="LLM Student Chat Summary" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default TeacherActionsSidebar;
