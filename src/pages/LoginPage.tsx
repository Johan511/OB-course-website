// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Container, Paper, Tabs, Tab, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  // Manage the role selection as either 'student' or 'teacher'
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event: React.SyntheticEvent, newValue: 'student' | 'teacher') => {
    setRole(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your login API integration logic
    console.log(`Logging in as ${role} with email: ${email}`);
    // Mark as authenticated and navigate to the protected route.
    onLogin();
    // Redirect to a protected page. For example, if it's a student login, redirect to /student.
    navigate(role === 'student' ? '/student' : '/teacher');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Tabs value={role} onChange={handleRoleChange} centered>
          <Tab label="Student Login" value="student" />
          <Tab label="Teacher Login" value="teacher" />
        </Tabs>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          {role === 'student'
            ? "Not registered? Contact your institution."
            : "Need an account? Contact your administrator."}
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
