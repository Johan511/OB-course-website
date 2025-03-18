// src/App.tsx
import React, { useMemo, useState } from 'react';
import Cookies from 'js-cookie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Toolbar, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentCourses from './pages/StudentCourses';
import CourseDashboard from './pages/CourseDashboard';
import TeacherActionsSidebar from './components/TeacherActionsSidebar';
import LoginPage from './pages/LoginPage';

// ProtectedRoute ensures that a user is authenticated before rendering child routes.
const ProtectedRoute: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const App: React.FC = () => {
  // Read authentication state from cookies
  const [authToken, setAuthToken] = useState<string | null>(Cookies.get('token') || null);
  const [userRole, setUserRole] = useState<string | null>(Cookies.get('role') || null);

  const isAuthenticated = !!authToken;

  // Function to update authentication state after login
  const handleLogin = () => {
    const token = Cookies.get('token');
    const role = Cookies.get('role');
    
    if (token && role) {
        setAuthToken(token);
        setUserRole(role);
    }
  };

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
          toggleCourseSidebar={toggleCourseSidebar} // For course pages
        />
        {/* Teacher actions sidebar */}
        <TeacherActionsSidebar
          open={teacherDrawerOpen}
          onClose={toggleTeacherDrawer}
          onSelectAction={(action: string) => setSelectedTeacherAction(action)}
        />
        {/* Offset for the fixed header */}
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
              {/* Public Login Route */}
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              {/* Protected Routes */}
              <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/teacher" element={<TeacherDashboard selectedAction={selectedTeacherAction} />} />
                <Route path="/student" element={<StudentCourses />} />
                <Route path="/student/course/:courseId" element={
                  <CourseDashboard 
                    courseSidebarOpen={courseSidebarOpen} 
                    toggleCourseSidebar={toggleCourseSidebar} 
                  />
                } />
                {/* Redirect any unknown paths to /student */}
                <Route path="*" element={<Navigate to="/student" replace />} />
              </Route>
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
