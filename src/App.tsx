// src/App.tsx
import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Toolbar, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import WeeklyMaterialSidebar from './components/WeeklyMaterialSidebar';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: { main: '#1976d2' },
          secondary: { main: '#dc004e' },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleDrawer={toggleDrawer} />
        <WeeklyMaterialSidebar
          open={drawerOpen}
          onClose={toggleDrawer}
          onSelectMaterial={(material: string) => setSelectedMaterial(material)}
        />
        {/* Offset for the fixed header */}
        <Toolbar />
        <Box
          sx={{
            mt: '64px', // header offset; adjust if needed
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
          }}
        >
          <Container sx={{ mt: 2 }}>
            <Routes>
              <Route path="/teacher" element={<TeacherDashboard />} />
              <Route
                path="/student"
                element={<StudentDashboard selectedMaterial={selectedMaterial} />}
              />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
