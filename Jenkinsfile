pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git branch: 'main', credentialsId: '35afb89b-2640-474e-92fc-204043a83dde', url: 'https://github.com/kondikalla/gopal.git'
      }
    }
 
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}


