// src/App.tsx
import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Toolbar, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentCourses from './pages/StudentCourses';
import CourseDashboard from './pages/CourseDashboard';
import TeacherActionsSidebar from './components/TeacherActionsSidebar';
import ScrollableContent from './components/ScrollableContent';

const App: React.FC = () => {
  // Teacher states
  const [teacherDrawerOpen, setTeacherDrawerOpen] = useState(false);
  const [selectedTeacherAction, setSelectedTeacherAction] = useState<string>("");
  const toggleTeacherDrawer = () => setTeacherDrawerOpen(prev => !prev);

  // Student states (for course list)
  const [studentDrawerOpen, setStudentDrawerOpen] = useState(false);
  const toggleStudentDrawer = () => setStudentDrawerOpen(prev => !prev);

  // Course sidebar state for course dashboard pages
  const [courseSidebarOpen, setCourseSidebarOpen] = useState(false);
  const toggleCourseSidebar = () => setCourseSidebarOpen(prev => !prev);

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
      <CssBaseline />
      <Router>
        <AppHeader
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleStudentDrawer={toggleStudentDrawer}
          toggleTeacherDrawer={toggleTeacherDrawer}
          toggleCourseSidebar={toggleCourseSidebar} // Passed for course pages
        />
        {/* Teacher sidebar */}
        <TeacherActionsSidebar
          open={teacherDrawerOpen}
          onClose={toggleTeacherDrawer}
          onSelectAction={(action: string) => setSelectedTeacherAction(action)}
        />
        {/* Toolbar to offset the fixed header */}
        <Toolbar />
        <Box
          sx={{
            mt: '64px',
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
          }}
        >
          <Container sx={{ mt: 2 }}>
            <Routes>
              <Route path="/teacher" element={<TeacherDashboard selectedAction={selectedTeacherAction} />} />
              <Route path="/student" element={<StudentCourses />} />
              <Route path="/student/course/:courseId" element={
                <CourseDashboard
                  courseSidebarOpen={courseSidebarOpen}
                  toggleCourseSidebar={toggleCourseSidebar}
                />
              } />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
