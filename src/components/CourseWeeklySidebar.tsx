// src/components/CourseWeeklySidebar.tsx
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
} from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteIcon from '@mui/icons-material/Note';

const drawerWidth = 240;

interface CourseWeeklySidebarProps {
  open: boolean;
  onClose: () => void;
  onSelectMaterial: (material: string) => void;
}

const CourseWeeklySidebar: React.FC<CourseWeeklySidebarProps> = ({ open, onClose, onSelectMaterial }) => {
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
          top: '64px', // offset so it doesn’t cover the header
        },
      }}
    >
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onSelectMaterial("lectureVideo")}>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Lecture Videos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onSelectMaterial("assignments")}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Assignments" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onSelectMaterial("lectureNotes")}>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="Lecture Notes" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default CourseWeeklySidebar;
