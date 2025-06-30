
pipeline {
  agent any

  tools {
    nodejs 'Node 22.12.0'
  }

  environment {
    RCLONE_PATH = 'C:\\rclone\\rclone\\rclone.exe'  
    REMOTE_FOLDER = 'gdrive:/BUltimus/'  
    BUILD_FOLDER = "Build_${BUILD_NUMBER}"
    VIDEO_DIR = "${env.WORKSPACE}\\cypress\\videos"
    EMAIL_TO = 'avisheak.mitra@leads-bd.com'
    EMAIL_FROM = 'missiononemtwo@gmail.com'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/avisheak/BankUltimus_Automation.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
        bat 'npx cypress install'
      }
    }

    stage('Run Cypress Test') {
      steps {
        script {
          catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
            bat 'npx cypress run --spec "cypress/e2e/BU.cy.js"'
          }
        }
      }
    }

    stage('Upload Videos to Google Drive') {
      steps {
        script {
           def specFiles = ['CIF_Organization.cy.js.mp4']
          specFiles.each { specVideo ->
            def videoFile = "${env.VIDEO_DIR}\\${specVideo}"
            def remoteFile = "${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/videos/${specVideo}"
            bat "dir \"${env.VIDEO_DIR}\""
            bat "\"${env.RCLONE_PATH}\" copyto \"${videoFile}\" \"${remoteFile}\""
            }
          // def videoFile = "${env.VIDEO_DIR}\\CIF_Organization.cy.js.mp4"
          // def remoteFile = "${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/videos/CIF_Organization.cy.js.mp4"
          // // Optional: list files to verify existence before upload
          // bat "dir \"${env.VIDEO_DIR}\""
          // bat "\"${env.RCLONE_PATH}\" copyto \"${videoFile}\" \"${remoteFile}\""
        }
      }
    }

    stage('Get Shareable Links') {
      steps {
        script {
          def output = bat(script: "\"${env.RCLONE_PATH}\" link ${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/", returnStdout: true)
          def match = output.readLines().find { it.startsWith("https://") }
          echo "Build Folder Google Drive Link: ${match}"
          env.BUILD_FOLDER_LINK = match ?: "Not Found"
        }
      }
    }

    
  }

  post {
    always {
      emailext (
        subject: "✅ Cypress Report - Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
        body: """
          <p>Hello,</p>
          <p>The Cypress test <b>CIF_Organization.cy.js</b> has completed.</p>
          <ul>
            <li><b>Status:</b> ${currentBuild.currentResult}</li>
            <li><b>Google Drive Folder:</b> <a href="${env.BUILD_FOLDER_LINK}">Open CypressReports/Build_${env.BUILD_NUMBER}</a></li>
            <li><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>
          </ul>
          <p>Regards,<br>Md Shafique</p>
        """,
        to: "${env.EMAIL_TO}",
        from: "${env.EMAIL_FROM}",
        mimeType: 'text/html'
      )

      echo 'Cleaning up...'
    }
  }
}

//
//<li><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>
//