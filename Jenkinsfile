// pipeline {
//   agent any

//   tools {
//     nodejs 'Node Js' // Must match NodeJS tool name in Jenkins config
//   }

//   environment {
//     CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
//   }

//   stages {
//     stage('Checkout') {
//       steps {
//         git branch: 'main',
//             url: 'https://github.com/MdShafique-Leads/BankUltimus_Automation.git'
//       }
//     }

//     stage('Debug Files') {
//       steps {
//         bat 'dir'
//         bat 'type package-lock.json'
//       }
//     }

//     stage('Install Dependencies') {
//       steps {
//         bat 'npm ci'
//       }
//     }

//     stage('Run Cypress Tests') {
//       steps {
//         bat '.\\node_modules\\.bin\\cypress run --spec "cypress/e2e/pc.cy.js"'
//       }
//     }

//     stage('Generate Video Report') {
//       steps {
//          bat 'npm run generate-video-report'
//        }
//     }
//   }

//   post {
//     always {
//       junit 'cypress/results/*.xml'

//       archiveArtifacts artifacts: '**/cypress/videos/**/*.*', allowEmptyArchive: true
//       archiveArtifacts artifacts: '**/cypress/screenshots/**/*.*', allowEmptyArchive: true
//       archiveArtifacts artifacts: '**/cypress/reports/**/*.*', allowEmptyArchive: true

//     publishHTML(target: [
//       reportDir: 'cypress/reports',
//       reportFiles: 'video-report.html',
//       reportName: 'Cypress Videos',
//       keepAll: true,
//       alwaysLinkToLastBuild: true,
//       allowMissing: true
//     ])
//     }
//   }
// }

pipeline {
  agent any

  tools {
    nodejs 'Node 22.14.0'  // Adjust this to the exact name of your NodeJS tool config in Jenkins
  }

  environment {
    VIDEO_SERVER_PORT = '8081'
    VIDEO_FILENAME = 'pc.cy.js.mp4'
    LOCAL_VIDEO_URL = "http://localhost:${VIDEO_SERVER_PORT}/${VIDEO_FILENAME}"
    NGROK_API = 'http://127.0.0.1:4040/api/tunnels'
  }

  stages {
    stage('Clean Workspace') {
      steps {
        cleanWs()
      }
    }

    stage('Checkout Code') {
      steps {
        git url: 'https://github.com/MdShafique-Leads/BankUltimus_Automation'
      }
    }

    stage('Debug Workspace') {
      steps {
        bat 'dir /b'
        bat 'dir /s /b'
      }
    }

    stage('Install Dependencies') {
      steps {
        dir('BankUltimus_Automation') {
          bat 'npm install'
        }
      }
    }

    stage('Run Cypress Tests') {
      steps {
        dir('BankUltimus_Automation') {
          bat 'npx cypress run --spec "cypress/e2e/pc.cy.js"'
        }
      }
    }

    stage('Start Servers (http-server + ngrok)') {
      steps {
        dir('BankUltimus_Automation') {
          bat "start /B npx http-server cypress/videos -p %VIDEO_SERVER_PORT%"
          sleep time: 5, unit: 'SECONDS'
          bat "start /B ngrok http %VIDEO_SERVER_PORT%"
          sleep time: 10, unit: 'SECONDS'
        }
      }
    }

    stage('Fetch Public ngrok URL') {
      steps {
        dir('BankUltimus_Automation') {
          script {
            def response = bat(
              script: 'curl -s http://127.0.0.1:4040/api/tunnels',
              returnStdout: true
            ).trim()

            def matcher = response =~ /"public_url":"(https:[^"]+)"/
            if (matcher.find()) {
              env.PUBLIC_VIDEO_URL = "${matcher[0][1]}/${env.VIDEO_FILENAME}"
            } else {
              env.PUBLIC_VIDEO_URL = "Not available"
            }
          }
        }
      }
    }

    stage('Send Email') {
      steps {
        dir('BankUltimus_Automation') {
          emailext (
            subject: "Cypress Test Report - Build #${env.BUILD_NUMBER}",
            body: """
            <p>Hello,</p>

            <p>The Cypress test run <b>pc.cy.js</b> has completed.</p>

            <ul>
              <li><b>Status:</b> ${currentBuild.currentResult}</li>
              <li><b>Job:</b> ${env.JOB_NAME} #${env.BUILD_NUMBER}</li>
              <li><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>
              <li><b>Public Test Video:</b> <a href="${env.PUBLIC_VIDEO_URL}">${env.PUBLIC_VIDEO_URL}</a></li>
            </ul>

            <p>Regards,<br>Md Shafique</p>
            """,
            to: 'mdshafique1198@gmail.com',
            from: 'mdshafique511@gmail.com',
            mimeType: 'text/html'
          )
        }
      }
    }
  }

  post {
    always {
      echo 'Stopping all background servers...'
      dir('BankUltimus_Automation') {
        bat 'taskkill /F /IM node.exe || exit 0'
        bat 'taskkill /F /IM ngrok.exe || exit 0'
      }
    }
  }
}
