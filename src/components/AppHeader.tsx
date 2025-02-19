// src/components/AppHeader.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, FormControlLabel } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation } from 'react-router-dom';

interface AppHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleStudentDrawer: () => void;
  toggleTeacherDrawer: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ darkMode, toggleDarkMode, toggleStudentDrawer, toggleTeacherDrawer }) => {
  const location = useLocation();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {location.pathname === '/student' && (
          <IconButton edge="start" color="inherit" onClick={toggleStudentDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        {location.pathname === '/teacher' && (
          <IconButton edge="start" color="inherit" onClick={toggleTeacherDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Course Website
        </Typography>
        <Link to="/teacher" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>
          <Typography variant="button">Teacher</Typography>
        </Link>
        <Link to="/student" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>
          <Typography variant="button">Student</Typography>
        </Link>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
          label={darkMode ? 'Dark Mode' : 'Light Mode'}
        />
        {location.pathname === '/teacher' && (
          <IconButton edge="end" color="inherit" onClick={toggleTeacherDrawer} sx={{ ml: 2 }}>
            <SettingsIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
