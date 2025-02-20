// src/pages/CourseDashboard.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Toolbar, Typography } from '@mui/material';
import CourseWeeklySidebar from '../components/CourseWeeklySidebar';
import ChatBot from '../components/ChatBot';

interface CourseDashboardProps {
    courseSidebarOpen: boolean;
    toggleCourseSidebar: () => void;
}

const CourseDashboard: React.FC<CourseDashboardProps> = ({ courseSidebarOpen, toggleCourseSidebar }) => {
    const { courseId } = useParams<{ courseId: string }>();
    const [selectedMaterial, setSelectedMaterial] = useState<string>("");

    return (
        <Box>
            {/* Temporary sidebar for course weekly content */}
            <CourseWeeklySidebar
                open={courseSidebarOpen}
                onClose={toggleCourseSidebar}
                onSelectMaterial={(material: string) => {
                    setSelectedMaterial(material);
                    toggleCourseSidebar();
                }}
            />
            {/* Main content area */}
            <Box sx={{ p: 3 }}>
                <Toolbar />
                <Typography variant="h4" gutterBottom>
                    {`Course: ${courseId}`}
                </Typography>
                {selectedMaterial === "lectureVideo" && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            Lecture Video
                        </Typography>
                        <video controls style={{ width: '100%', maxWidth: '800px' }}>
                            <source src="/static-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                )}
                {selectedMaterial === "assignments" && (
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Assignments content goes here.
                    </Typography>
                )}
                {selectedMaterial === "lectureNotes" && (
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Lecture notes content goes here.
                    </Typography>
                )}
                {selectedMaterial === "" && (
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Please select a weekly material from the sidebar.
                    </Typography>
                )}
            </Box>
            <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1300 }}>
                <ChatBot />
            </Box>
        </Box>
    );
};

export default CourseDashboard;
