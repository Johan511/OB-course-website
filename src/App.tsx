// src/App.tsx
import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Toolbar, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import WeeklyMaterialSidebar from './components/WeeklyMaterialSidebar';
import TeacherActionsSidebar from './components/TeacherActionsSidebar';
import ScrollableContent from './components/ScrollableContent';

const App: React.FC = () => {
  // Student states
  const [studentDrawerOpen, setStudentDrawerOpen] = useState(false);
  const [selectedStudentMaterial, setSelectedStudentMaterial] = useState<string>("");
  const toggleStudentDrawer = () => setStudentDrawerOpen(prev => !prev);

  // Teacher states
  const [teacherDrawerOpen, setTeacherDrawerOpen] = useState(false);
  const [selectedTeacherAction, setSelectedTeacherAction] = useState<string>("");
  const toggleTeacherDrawer = () => setTeacherDrawerOpen(prev => !prev);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

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
      <ScrollableContent>
        <CssBaseline />
        <Router>
          <AppHeader
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleStudentDrawer={toggleStudentDrawer}
            toggleTeacherDrawer={toggleTeacherDrawer}
          />
          {/* Sidebar for student dashboard */}
          <WeeklyMaterialSidebar
            open={studentDrawerOpen}
            onClose={toggleStudentDrawer}
            onSelectMaterial={(material: string) => setSelectedStudentMaterial(material)}
          />
          {/* Sidebar for teacher dashboard */}
          <TeacherActionsSidebar
            open={teacherDrawerOpen}
            onClose={toggleTeacherDrawer}
            onSelectAction={(action: string) => setSelectedTeacherAction(action)}
          />
          {/* Toolbar to offset the fixed header */}
          <Toolbar />
          <ScrollableContent>
            <Container sx={{ mt: 2 }}>
              <Routes>
                <Route path="/teacher" element={<TeacherDashboard selectedAction={selectedTeacherAction} />} />
                <Route path="/student" element={<StudentDashboard selectedMaterial={selectedStudentMaterial} />} />
              </Routes>
            </Container>
          </ScrollableContent>
        </Router>
      </ScrollableContent>
    </ThemeProvider>
  );
};

export default App;
