pipeline {
  agent any

  tools {
    nodejs 'Node Js' // Must match NodeJS tool name in Jenkins config
  }

  environment {
    CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/MdShafique-Leads/BankUltimus_Automation.git'
      }
    }

    stage('Debug Files') {
      steps {
        bat 'dir'
        bat 'type package-lock.json'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        bat '.\\node_modules\\.bin\\cypress run'
      }
    }
  }

  post {
    always {
      junit 'cypress/results/*.xml'
      archiveArtifacts artifacts: '**/cypress/screenshots/**/*.*', allowEmptyArchive: true
      archiveArtifacts artifacts: '**/cypress/videos/**/*.*', allowEmptyArchive: true
    }
  }
}
