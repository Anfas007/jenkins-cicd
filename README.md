# Node.js CI/CD Pipeline Using GitHub Actions

## Project Overview
This project demonstrates how to automate the testing, Docker image building, and publishing of a Node.js application using GitHub Actions.

## Technologies Used
- Node.js and Express.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## What I Implemented

1. **Developed a Node.js Application**  
   Created a simple Express.js application with a homepage (`/`) and a health-check endpoint (`/health`).

2. **Added Automated Tests**  
   Used Node.js built-in testing tools to test the application endpoints.

3. **Created a Dockerfile**  
   Containerized the application using Docker to make it easier to run in different environments.

4. **Configured GitHub Actions**  
   Created a CI/CD workflow that automatically runs when code is pushed to the `main` branch.

5. **Automated the Pipeline**  
   Configured the workflow to:
   - Check out the source code.
   - Install Node.js dependencies.
   - Run automated tests.
   - Build the Docker image.
   - Log in to Docker Hub securely using GitHub Secrets.
   - Push the Docker image to Docker Hub with `latest` and commit-specific tags.

6. **Tested the Docker Image**  
   Pulled the published image from Docker Hub and ran it locally using Docker.

## Pipeline Workflow

```text
Developer Pushes Code
        ↓
   GitHub Repository
        ↓
   GitHub Actions
        ↓
 Install Dependencies
        ↓
   Run Automated Tests
        ↓
   Build Docker Image
        ↓
   Push Image to Docker Hub
```

## Key Learning Outcomes
- Understanding CI/CD fundamentals.
- Automating application testing with GitHub Actions.
- Containerizing Node.js applications using Docker.
- Publishing Docker images to Docker Hub.
- Managing credentials securely using GitHub Secrets.
- Understanding how pipeline failures prevent unsuccessful builds from being published.

## Project Links
- **GitHub Repository:** https://github.com/Anfas007/-nodejs-demo-app
- **Docker Hub:** https://hub.docker.com/r/anfascp2001/nodejs-demo-app

## Conclusion
Successfully implemented and tested an automated CI/CD pipeline for a Node.js application using GitHub Actions and Docker. The pipeline automatically tests the application, builds its Docker image, and publishes it to Docker Hub whenever code is pushed to the main branch.