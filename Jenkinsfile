node {
  stage('git clone') 
      steps {
        git branch: 'main', credentialsId: 'venu', url: 'https://github.com/kondikalla/gopal.git'
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

