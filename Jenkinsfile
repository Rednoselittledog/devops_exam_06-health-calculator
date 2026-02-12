pipeline {
  environment {
    VERCEL_PROJECT_NAME = 'devops06-quiz1'
    VERCEL_TOKEN = credentials('VERCEL_TOKEN') // ดึงจาก Jenkins
  }
  agent any
      
    tools {
        nodejs 'NodeJS' 
    }

  stages {
    stage('Test npm') {
      steps {
          sh 'npm --version'
          sh 'node --version'
      }
    }
    stage('Build') {
      steps {
        sh 'npm ci'
        // sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
          sh 'npm install -g vercel@latest'
          // Deploy using token-only (non-interactive)
          sh '''
            vercel link --project $VERCEL_PROJECT_NAME --token $VERCEL_TOKEN --yes
            vercel --token $VERCEL_TOKEN --prod --confirm
          '''
      }
    }
 
  }
}