// src/components/ChatBot.tsx
import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box, Chip } from '@mui/material';
// import { useLocation } from "react-router-dom";

const ChatBot: React.FC = () => {
  const likelyPrompts = [
    "What is today's assignment?",
    "Explain today's lecture",
    "I need help with my assignment",
    "What are the key points from the lecture?",
    "Can you summarize the lecture?"
  ];

  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setInput('');
    // Add the user message to the chat
    const newMessages = [...messages, `User: ${input}`];
    setMessages(newMessages);

    // Here you would typically make an API call to your AI service:
    const response = await fetch('http://localhost:5000/api/rag/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: input, context: ""})
    });
    const data = await response.json();

    // Append the AI bot response to the chat
    const botMessage = data.answer ? `Bot: ${data.answer}` : `Bot: Error - ${data.error}`;
    setMessages([...newMessages, botMessage]);
  };

  return (
    <Paper sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        AI Bot Assistance
      </Typography>
      {/* Likely Prompts: Stacked vertically */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
        {likelyPrompts.map((prompt, index) => (
          <Chip
            key={index}
            label={prompt}
            onClick={() => handlePromptClick(prompt)}
          />
        ))}
      </Box>
      {/* Chat conversation */}
      <Box sx={{ maxHeight: 400, maxWidth: 800, overflowY: 'auto', mb: 2 }}>
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
