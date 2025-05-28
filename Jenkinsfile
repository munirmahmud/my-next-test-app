pipeline {
    agent any

    tools {
        nodejs 'NodeJS LTS'
    }

    environment {
        APP_DIR = "/var/www/m.munirkhan.com"
        REPO_URL = "https://github.com/munirmahmud/my-next-test-app.git"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: "${env.REPO_URL}", branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Export Static') {
            steps {
                sh 'npm run export' // Optional for static export
            }
        }
    }
}
