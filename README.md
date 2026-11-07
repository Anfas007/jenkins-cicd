# Jenkins CI/CD Pipeline with Docker

## Project Overview

This project demonstrates a basic Continuous Integration and Continuous Deployment (CI/CD) pipeline using **Jenkins, Docker, Git, and Node.js**.

The pipeline automates the process of installing application dependencies, running tests, building a Docker image, and deploying the application as a Docker container.

Jenkins is configured to monitor the GitHub repository using Poll SCM and automatically trigger the pipeline when new commits are detected.

## Technologies Used

- **Jenkins** – CI/CD pipeline automation
- **Docker** – Application containerization and deployment
- **Node.js** – Application runtime
- **npm** – Dependency management and test execution
- **Git & GitHub** – Source code management
- **Groovy** – Jenkins pipeline configuration

## Project Structure

```text
jenkins-nodejs-cicd/
│
├── test/
│   └── app.test.js
│
├── .dockerignore
├── .gitignore
├── app.js
├── Dockerfile
├── Jenkinsfile
├── package.json
├── package-lock.json
└── README.md
```

## CI/CD Pipeline Architecture

```text
        Developer
            |
            | Push code
            v
        GitHub Repository
            |
            | Poll SCM
            v
          Jenkins
            |
            v
    1. Build Application
       npm ci
            |
            v
    2. Run Tests
       npm test
            |
            v
    3. Build Docker Image
       docker build
            |
            v
    4. Deploy Application
       docker run
            |
            v
      Running Container
            |
            v
    http://localhost:3002
```

## Jenkins Pipeline Stages

The `Jenkinsfile` contains four stages:

| Stage | Description |
|---|---|
| Build | Installs application dependencies using `npm ci`. |
| Test | Executes automated tests using `npm test`. |
| Build Docker Image | Builds the Docker image from the project's Dockerfile. |
| Deploy | Removes the previous application container and starts a new one. |

### Docker Configuration

The pipeline builds an image with the following name:

```text
nodejs-demo-jenkins:latest
```

It deploys the application using:

```text
Container name: jenkins-nodejs-demo
Host port: 3002
Container port: 3000
```

The application is accessible at:

- Application: http://localhost:3002
- Health Check: http://localhost:3002/health

## Automatic Pipeline Trigger

Jenkins is configured with **Poll SCM** to periodically check the GitHub repository for new commits.

Polling schedule:

```text
H/2 * * * *
```

This checks for changes approximately every two minutes. When Jenkins detects a new commit, it automatically triggers the pipeline.

## Setup and Configuration

### 1. Prerequisites

Install or configure the following:

- Docker Desktop
- Git
- GitHub account
- Jenkins
- Node.js and npm (inside the Jenkins environment)

### 2. Run Jenkins

For this project, Jenkins runs inside a Docker container using a custom Jenkins image containing Java, Node.js, npm, and Docker CLI.

The Docker socket is mounted to allow Jenkins to communicate with Docker Desktop.

### 3. Create a Jenkins Pipeline Job

1. Open Jenkins at `http://localhost:8080`.
2. Create a new Pipeline job.
3. Select **Pipeline script from SCM**.
4. Select Git as the source control system.
5. Enter your GitHub repository URL.
6. Set the branch to `*/main`.
7. Set the Script Path to `Jenkinsfile`.
8. Enable Poll SCM and configure the polling schedule.
9. Save the configuration.

### 4. Execute the Pipeline

Click **Build Now** to execute the pipeline for the first time.

Jenkins will:

1. Retrieve the project from GitHub.
2. Install dependencies.
3. Run automated tests.
4. Build the Docker image.
5. Deploy the application container.

Subsequent GitHub commits can trigger the pipeline automatically through Poll SCM.

## Verification

Check the running Docker containers:

```bash
docker ps
```

Check the deployed application:

```text
http://localhost:3002
```

Check the health endpoint:

```text
http://localhost:3002/health
```

A successful Jenkins build should display:

```text
Finished: SUCCESS
```

## Learning Outcomes

Through this project, I gained practical experience with:

- Understanding CI/CD concepts and workflows.
- Installing and configuring Jenkins using Docker.
- Creating and configuring Jenkins pipelines.
- Writing a declarative Jenkinsfile.
- Integrating Jenkins with GitHub.
- Automating dependency installation and application testing.
- Building Docker images through Jenkins.
- Deploying applications using Docker containers.
- Configuring automatic pipeline execution using Poll SCM.
- Troubleshooting Jenkins and Docker integration issues.

## Project Scope

This is a local learning project demonstrating automated CI/CD using Jenkins and Docker. The application is deployed locally through Docker Desktop; it is not a remote production deployment.

**Note:** Docker socket access gives Jenkins significant control over the Docker host. The current configuration is intended for an isolated local learning environment, not a shared or production Jenkins server.

---

**Project:** Jenkins CI/CD Pipeline with Docker  
**Purpose:** DevOps Internship Task 2  
**Repository:** `jenkins-nodejs-cicd`
