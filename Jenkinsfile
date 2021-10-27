node {
    stage('Git clone') {
	git branch: 'main', credentialsId: 'b8739b32-d147-4b55-9127-22ee8c8fbafa', url: 'https://github.com/kondikalla/gopal.git'
	}
	
	stage('Build') {
	sh 'npm install'
    }	
    stage('Test') {
            steps {
                sh './var/lib/jenkins/workspace/React-app/jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
	

	