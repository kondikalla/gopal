node {
    stage('Git clone') {
	git branch: 'main', credentialsId: 'b8739b32-d147-4b55-9127-22ee8c8fbafa', url: 'https://github.com/kondikalla/gopal.git'
	}
	
	stage('Build') {
	sh 'npm install'
    }  
    stage('test') {
	sh 'node test'
	}
	}
	