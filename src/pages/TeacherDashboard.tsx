// src/pages/TeacherDashboard.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChatBot from '../components/ChatBot';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

interface TeacherDashboardProps {
  selectedAction: string;
}

const fetchChatHistory = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/chat_history');
    if (!response.ok) {
      throw new Error('Failed to fetch chat history');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching chat history:', error);
    return null;
  }
};

const fetchSubmissions = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/submissions/1');
    if (!response.ok) {
      throw new Error('Failed to fetch submissions');
    }
    const data = await response.json();
    console.log(data)
    return data.submissions;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return null;
  }
};

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ selectedAction }) => {
  const [chatHistory, setChatHistory] = React.useState<string>("");
  const [submissions, setSubmissions] = React.useState<any>({});

  React.useEffect(() => {
    const fetchData = async () => {
      const history = await fetchChatHistory();
      if (history) {
        setChatHistory(history.answer);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSubmissions();
      if (data) {
        setSubmissions(data);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Teacher Dashboard
      </Typography>
      {selectedAction === "uploadAssignment" && (
        <Typography variant="body1">Upload Assignment form goes here.</Typography>
      )}
      {selectedAction === "viewSubmissions" && (
        <Typography variant="body1">
          <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submissions.map((student:any) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.score}</TableCell>
                  <TableCell>{student.student_email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Typography>
      )}
      {selectedAction === "uploadLectures" && (
        <Typography variant="body1">Upload Lectures form goes here.</Typography>
      )}
      {selectedAction === "chatHistory" && (
        <Typography variant="body1"> {chatHistory} </Typography>
      )}
      {selectedAction === "" && (
        <Typography variant="body1">
          Select an action from the drop-right menu.
        </Typography>
      )}
      <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1300 }}>
        <ChatBot />
      </Box>
    </Box>
  );
};

export default TeacherDashboard;
