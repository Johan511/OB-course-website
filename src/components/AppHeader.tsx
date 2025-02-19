// src/components/AppHeader.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, FormControlLabel } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

interface AppHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleDrawer: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ darkMode, toggleDarkMode, toggleDrawer }) => {
  const location = useLocation();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Only show the drop button on student pages */}
        {location.pathname === '/student' && (
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Course Website
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
          label={darkMode ? 'Dark Mode' : 'Light Mode'}
        />
        <Link to="/teacher" style={{ color: 'inherit', textDecoration: 'none', marginLeft: 16 }}>
          <Typography variant="button">Teacher</Typography>
        </Link>
        <Link to="/student" style={{ color: 'inherit', textDecoration: 'none', marginLeft: 16 }}>
          <Typography variant="button">Student</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
