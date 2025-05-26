// pipeline {
//   agent any

//   tools {
//     nodejs 'Node Js' // Name must match what you configured in Jenkins → Global Tool Configuration
//   }

//   environment {
//     CI = 'true' // Important for Cypress CI compatibility
//   }

//   stages {

//     stage('Checkout Code') {
//       steps {
//         git url: 'https://github.com/MdShafique-Leads/BankUltimus_Automation.git', branch: 'master'
//       }
//     }

//     stage('Install Dependencies') {
//       steps {
//         sh 'npm ci'
//       }
//     }

//     stage('Run Cypress Tests') {
//       steps {
//         sh 'npx cypress run'
//       }
//     }

//   }

//   post {
//     always {
//       archiveArtifacts artifacts: '**/cypress/videos/**/*.*', allowEmptyArchive: true
//       junit 'cypress/results/**/*.xml' // If you use Mocha JUnit reporter
//     }

//     failure {
//       echo 'Cypress tests failed.'
//     }
//   }
// }

pipeline { 

  agent any 

 

  tools { 

    nodejs 'Node Js' // Use the name from your NodeJS tool config 

  } 

 

  environment { 

    CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress" 

  } 

 

  stages { 

    stage('Checkout') { 

      steps { 

        git url: 'https://github.com/MdShafique-Leads/BankUltimus_Automation.git' 

      } 

    } 

 

    stage('Install Dependencies') { 

      steps { 

        bat 'npm ci' 

      } 

    } 

 

    stage('Run Cypress Tests') { 

      steps { 

        bat './node_modules/.bin/cypress run' 

      } 

    } 

  } 

 

  post { 

    always { 

      junit 'cypress/results/*.xml' // If using JUnit reporter 

      archiveArtifacts artifacts: '**/cypress/screenshots/**/*.*', allowEmptyArchive: true 

      archiveArtifacts artifacts: '**/cypress/videos/**/*.*', allowEmptyArchive: true 

    } 

  } 

} 