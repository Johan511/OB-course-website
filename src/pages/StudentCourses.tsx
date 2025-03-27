// src/pages/StudentCourses.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


const CoursesComponent = () => {
    const [courses, setCourses] = useState<Array<any>>([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/courses", { credentials: "include", method: "GET" })
            .then((response) => response.json())
            .then((json) => { setCourses(json); console.log(json); })
            .catch((error) => console.error("Error fetching data:", error));
    }, []); // Empty dependency array = runs only once on page load

    return <pre>{<Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center'
        }}
    >
        {courses && courses.map((course) => (
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
    </Box>}</pre>;
};

const StudentCourses: React.FC = () => {
    // Sample course data
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                My Courses
            </Typography>

            <CoursesComponent />
        </Box>
    );
};

export default StudentCourses;
