pipeline {
   agent any

   stages {
      stage('Checkout') {
         steps {
            checkout scm
         }
      }
      stage('Build') {
         steps {
            echo 'Building the project...'
         }
      }
   }
   post {
      success {
         echo 'Pipeline terminé avec succès.'
      }
      failure {
         echo 'Le pipeline a échoué.'
      }
   }
}
