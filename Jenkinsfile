
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests...'
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t nodejs-demo-jenkins:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application container...'
                sh 'docker rm -f jenkins-nodejs-demo || true'
                sh 'docker run -d --name jenkins-nodejs-demo -p 3002:3000 nodejs-demo-jenkins:latest'
            }
        }
    }
}
