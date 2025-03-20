// src/pages/StudentCourses.tsx
import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

interface StudentCoursesProps {
    courses: { id: string, name: string, description: string }[];
    fetchCourses: () => void;
}

const StudentCourses: React.FC<StudentCoursesProps> = ({ courses, fetchCourses }) => {
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

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
