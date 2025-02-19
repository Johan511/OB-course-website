// src/components/ChatBot.tsx
import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box } from '@mui/material';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add the user message to the chat
    const newMessages = [...messages, `User: ${input}`];
    setMessages(newMessages);

    // Here you would typically make an API call to your AI service:
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await response.json();

    // Append the AI bot response to the chat
    setMessages([...newMessages, `Bot: ${data.reply}`]);
    setInput('');
  };

  return (
    <Paper sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        AI Bot Assistance
      </Typography>
      <Box sx={{ maxHeight: 200, overflowY: 'auto', mb: 2 }}>
        {messages.map((msg, index) => (
          <Typography key={index} variant="body2">
            {msg}
          </Typography>
        ))}
      </Box>
      <TextField
        label="Enter your question"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
      />
      <Button variant="contained" sx={{ mt: 1 }} onClick={handleSend}>
        Send
      </Button>
    </Paper>
  );
};

export default ChatBot;
