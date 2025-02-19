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

const drawerWidth = 240;

interface WeeklyMaterialSidebarProps {
  open: boolean;
  onClose: () => void;
  onSelectMaterial: (material: string) => void;
}

const WeeklyMaterialSidebar: React.FC<WeeklyMaterialSidebarProps> = ({
  open,
  onClose,
  onSelectMaterial,
}) => {
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
          top: '64px', // ensures the drawer appears below the header
        },
      }}
    >
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { onSelectMaterial("lectureVideo"); onClose(); }}>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Lecture Videos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { onSelectMaterial("assignments"); onClose(); }}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Assignments" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { onSelectMaterial("lectureNotes"); onClose(); }}>
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
