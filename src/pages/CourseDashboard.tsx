// src/pages/CourseDashboard.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Toolbar, Typography, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import CourseWeeklySidebar from '../components/CourseWeeklySidebar';
import ChatBot from '../components/ChatBot';

interface CourseDashboardProps {
    courseSidebarOpen: boolean;
    toggleCourseSidebar: () => void;
}

const CourseDashboard: React.FC<CourseDashboardProps> = ({ courseSidebarOpen, toggleCourseSidebar }) => {
    const { courseId } = useParams<{ courseId: string }>();
    const [selectedMaterial, setSelectedMaterial] = useState<string>("");
    const [courseContent, setCourseContent] = useState<any>({});
    const [expandedAssignments, setExpandedAssignments] = useState<string>("");
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [index]: event.target.value,
        }));
    };

    const handleSubmit = (assignmentId: string) => {
        console.log("Submitted Answers:", selectedAnswers);
        const submission = {
            courseId: courseId,
            assignmentId: assignmentId,
            answers: selectedAnswers,
        };

        //  TODO: Submit the answers to the server
    };



    useEffect(() => {
        fetch(`http://localhost:5000/api/course/${courseId}`, { credentials: "include", method: "GET" })
            .then((response) => response.json())
            .then((json) => { setCourseContent(json); console.log(json) })
            .catch((error) => console.error("Error fetching data:", error));
    }, [courseId]);

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
                    <Box sx={{ mt: 2 }}>
                        {courseContent.assignments && courseContent.assignments.map((assignment: any) => {
                            const toggleExpanded = (id: string) => {
                                setSelectedAnswers({});
                                if (expandedAssignments === id) {
                                    setExpandedAssignments("");
                                }
                                else {
                                    setExpandedAssignments(id);
                                }
                            };

                            return (
                                <Box key={assignment.id} sx={{ mt: 2 }}>
                                    <Typography
                                        variant="h6"
                                        onClick={() => toggleExpanded(assignment.id)}
                                        sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                                    >
                                        {assignment.title}
                                    </Typography>
                                    {expandedAssignments === assignment.id && (
                                        <Box sx={{ mt: 1 }}>
                                            {assignment.content?.map((content: any, index: number) => (
                                                <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
                                                    <Typography variant="h6" gutterBottom>
                                                        {content.question}
                                                    </Typography>
                                                    <RadioGroup
                                                        name={`question-${index}`}
                                                        value={selectedAnswers[index] || ''}
                                                        onChange={(event) => handleOptionChange(event, index)}
                                                    >
                                                        {content.options?.map((option: string, optIndex: number) => (
                                                            <FormControlLabel
                                                                key={optIndex}
                                                                value={option}
                                                                control={<Radio />}
                                                                label={option}
                                                            />
                                                        ))}
                                                    </RadioGroup>
                                                </Box>
                                            ))}
                                            <Button variant="contained" color="primary" onClick={() => handleSubmit(assignment.id)} sx={{ mt: 2 }}>
                                                Submit
                                            </Button>
                                        </Box>
                                    )}

                                </Box>
                            );
                        })}
                    </Box>
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
