// src/components/WeeklyMaterialSidebar.tsx
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
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteIcon from '@mui/icons-material/Note';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface WeeklyMaterialSidebarProps {
  open: boolean;
  onClose: () => void;
}

const WeeklyMaterialSidebar: React.FC<WeeklyMaterialSidebarProps> = ({ open, onClose }) => {
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
          top: '64px', // Offset so the drawer starts below the header
        },
      }}
    >
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link
            to="/student/lecture-video"
            style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
          >
            <ListItemButton>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Lecture Videos" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Assignments" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
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


export default WeeklyMaterialSidebar;
