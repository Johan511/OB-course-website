// src/components/AppHeader.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, FormControlLabel } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation } from 'react-router-dom';

interface AppHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleStudentDrawer?: () => void;
  toggleTeacherDrawer: () => void;
  toggleCourseSidebar?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  darkMode,
  toggleDarkMode,
  toggleStudentDrawer,
  toggleTeacherDrawer,
  toggleCourseSidebar,
}) => {
  const location = useLocation();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* For course pages, show the course sidebar toggle on the left */}
        {location.pathname.startsWith('/student/course') && toggleCourseSidebar && (
          <IconButton edge="start" color="inherit" onClick={toggleCourseSidebar} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        {location.pathname === '/teacher' && (
          <IconButton edge="start" color="inherit" onClick={toggleTeacherDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        {/* For student list page, show the student drawer toggle */}
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
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
