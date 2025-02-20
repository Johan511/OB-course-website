# Course Website

A full-featured course website built with React, TypeScript, and Material UI that supports both student and teacher functionalities.

## Overview

This project provides a modern web application where:

- **Students** can:
  - View a list of courses they have registered for (displayed as block cards).
  - Click on a course to access its dedicated dashboard.
  - Use a pop-up weekly sidebar to view course materials (lecture videos, assignments, lecture notes) without leaving the page.
  - Toggle between dark and light themes.
  - Enjoy a custom, theme-based scrollbar provided by SimpleBar.

- **Teachers** can:
  - Access a dedicated dashboard with a drop-right menu for actions such as uploading assignments, viewing submissions, and uploading lectures.
  - Navigate with a clean, responsive UI.

## Features

- **Responsive Course Cards:**  
  Courses are presented as block cards using Material UI’s Card and flex styling.

- **Course Dashboard:**  
  After selecting a course, the student is redirected to a course-specific dashboard that includes:
  - A temporary sidebar for weekly course content.
  - Integrated video playback for lecture videos.
  - Sections for assignments and lecture notes.

- **Teacher Dashboard:**  
  Offers a drop-right menu for teacher actions that appears in the header.

- **Theme Toggle & Custom Scrollbar:**  
  - Dark/light mode switch using Material UI theming.
  - A custom scrollbar (via SimpleBar) that adapts to the theme.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/course-website.git
   cd course-website
   ```

2. **Install Dependencies**
    ```bash
    yarn install
    ```

3. **Usage**
    ```bash
    yarn start
    ```
