// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Container, Paper, Tabs, Tab, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLogin: (token: string, role: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event: React.SyntheticEvent, newValue: 'student' | 'teacher') => {
    setRole(newValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await response.json();
      if (response.ok) {
        // Store token in localStorage and update global state
        localStorage.setItem('token', data.token);
        onLogin(data.token, data.role);
        navigate(role === 'student' ? '/student' : '/teacher');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
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
            ? 'Not registered? Contact your institution.'
            : 'Need an account? Contact your administrator.'}
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
