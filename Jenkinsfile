node {
  stage('git clone') 
      steps {
        git branch: 'main', credentialsId: 'b8739b32-d147-4b55-9127-22ee8c8fbafa', url: 'https://github.com/kondikalla/gopal.git'
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

