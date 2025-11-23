Constance Benson — Portfolio Website

A personal developer portfolio built with React, TypeScript, and my own UI Component Library (Buttons, Cards, Labels, Text, etc.) created in earlier assignments.
The site highlights my coursework, projects, skills, developer setup, and resources I have used throughout my Full-Stack Web Development program at RRC Polytech.

# Tech Stack

Frontend

React (CRA)

TypeScript

Styled-Components

Custom UI Component Library

Developer Workflow

ESLint

Prettier

Husky (pre-commit checks)

GitHub Actions (CI pipeline)

Deployment

Docker

Nginx (production hosting)

# Features

Clean, accessible UI using my own reusable components
Fully responsive layout
Sections for Work, Skills, Resources, Developer Setup
Dockerized production build running on localhost:5575
Automated formatting, linting, and tests before every commit GitHub Actions CI that checks code quality on every push

# Project Structure

components:my UI library (Buttons, Cards, Dropdowns, etc.)
portfolioData:all the written content for the portfolio
sections:each section of the site (Work, Skills, Resources, Developer Setup)
App.tsx:combines all sections into the final layout

Run the Project (Local Dev)
npm install
npm start

App runs on:

http://localhost:3000

Run the Docker Production Build (Assignment 14 Requirement)

1. Build the image
   docker build -t constance_benson_coding_assignment14 .

2. Run the container
   docker run -p 5575:80 constance_benson_coding_assignment14

Now open:

http://localhost:5575

Portfolio Sections

1. Basic Information

Short intro, background, and what I do as a developer.

2. Work

Projects I’ve completed

Title

Description

Image

Live link / GitHub repo

Tech stack used

3. Skills

Description

Languages / Frameworks

Tools

4. Resources

Helpful materials such as YouTube channels, courses, icons, or tools that helped me learn.

5. Developer Setup

VS Code extensions

Terminal setup

Fonts / themes I use

CI/CD Pipeline (GitHub Actions)

Every push to GitHub triggers a workflow that runs:

Prettier

ESLint

Unit tests

Build fails if any check fails, ensuring clean and consistent code.

# License

This portfolio is built for academic and professional use.
Feel free to reference, but do not copy directly without permission.
