// src/pages/StudentCourses.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const StudentCourses: React.FC = () => {
    // Sample course data
    const courses = [
        { id: 'course1', name: 'Introduction to Biology', description: 'Learn the basics of biology.' },
        { id: 'course2', name: 'Advanced Mathematics', description: 'Deep dive into mathematical theories.' },
        { id: 'course3', name: 'Modern History', description: 'Explore modern historical events.' },
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                My Courses
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    justifyContent: 'center'
                }}
            >
                {courses.map((course) => (
                    <Card
                        key={course.id}
                        sx={{
                            flex: '1 1 calc(33.333% - 16px)',
                            minWidth: '250px',
                            maxWidth: '350px'
                        }}
                    >
                        <CardActionArea component={Link} to={`/student/course/${course.id}`}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {course.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {course.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>

        </Box>
    );
};

export default StudentCourses;
