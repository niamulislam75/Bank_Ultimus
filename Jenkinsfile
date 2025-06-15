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

// pipeline {
//   agent any

//   tools {
//     nodejs 'Node 22.14.0'
//   }

//   environment {
//     ONEDRIVE_LINK = 'https://leadscorp-my.sharepoint.com/:f:/g/personal/md_shafique_leads-bd_com/EvuwkCZJwdlCnLj87-SiuXYBODs4rsGbuTX-0N6G5XrYKA?e=IjAA4a'
//     ONEDRIVE_BASE = 'C:\Users\bu.shafique\OneDrive - LEADS Corporation Limited\CypressReports'
//     BUILD_FOLDER = "Build_${BUILD_NUMBER}"
//     REPORT_FOLDER = "${ONEDRIVE_BASE}\\${BUILD_FOLDER}"
//   }

//   stages {
//     stage('Checkout') {
//       steps {
//         git branch: 'main', url: 'https://github.com/MdShafique-Leads/BankUltimus_Automation.git'
//       }
//     }

//     stage('Install Dependencies') {
//       steps {
//         bat 'npm install'
//         bat 'npx cypress install'
//       }
//     }

//     stage('Run Cypress Test') {
//       steps {
//         bat 'npx cypress run --spec "cypress/e2e/pc.cy.js" --reporter cypress-mochawesome-reporter'
//       }
//     }

//     stage('Copy Reports to OneDrive') {
//       steps {
//         bat """
//           echo Creating OneDrive build folder: %REPORT_FOLDER%
//           mkdir "%REPORT_FOLDER%\\reports"
//           mkdir "%REPORT_FOLDER%\\videos"

//           xcopy /Y /E /I cypress\\reports\\* "%REPORT_FOLDER%\\reports\\"
//           xcopy /Y /E /I cypress\\videos\\* "%REPORT_FOLDER%\\videos\\"
//         """
//       }
//     }

//     stage('Parse Test Summary') {
//       steps {
//         script {
//           def files = findFiles(glob: 'cypress/reports/*.json')
//           def jsonPath = files.length > 0 ? files[0].path : null
//           if (jsonPath) {
//             def result = readJSON file: jsonPath
//             def stats = result?.stats
//             env.TEST_PASSED = stats?.passes ?: '0'
//             env.TEST_FAILED = stats?.failures ?: '0'
//             env.TEST_PENDING = stats?.pending ?: '0'
//           } else {
//             env.TEST_PASSED = 'N/A'
//             env.TEST_FAILED = 'N/A'
//             env.TEST_PENDING = 'N/A'
//           }
//         }
//       }
//     }

//     stage('Send Email') {
//       steps {
//         emailext (
//           subject: "✅ Cypress Report - Build #${env.BUILD_NUMBER}",
//           body: """
//             <p>Hello,</p>
//             <p>The Cypress test <b>pc.cy.js</b> has completed.</p>
//             <ul>
//               <li><b>Status:</b> ${currentBuild.currentResult}</li>
//               <li><b>Passed:</b> ${env.TEST_PASSED}</li>
//               <li><b>Failed:</b> ${env.TEST_FAILED}</li>
//               <li><b>Pending:</b> ${env.TEST_PENDING}</li>
//               <li><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>
//               <li><b>OneDrive Folder:</b> <a href="${env.ONEDRIVE_LINK}">Open OneDrive</a></li>
//               <li><b>Report Folder:</b> <code>${env.BUILD_FOLDER}</code></li>
//             </ul>
//             <p><i>HTML report is attached for quick access.</i></p>
//             <p>Regards,<br>Md Shafique</p>
//           """,
//           to: 'mdshafique1198@gmail.com',
//           from: 'mdshafique511@gmail.com',
//           mimeType: 'text/html',
//           attachmentsPattern: 'cypress/reports/*.html'
//         )
//       }
//     }
//   }

//   post {
//     always {
//       echo 'Cleaning up...'
//     }
//   }
// }


pipeline {
  agent any

  tools {
    nodejs 'Node 22.14.0'
  }

  environment {
    RCLONE_PATH = 'C:\\rclone\\rclone.exe'  
    REMOTE_FOLDER = 'gdrive:/CypressReports/'  
    BUILD_FOLDER = "Build_${BUILD_NUMBER}"
    VIDEO_DIR = "${env.WORKSPACE}\\cypress\\videos"
    EMAIL_TO = 'avisheak.mitra@leads-bd.com'
    EMAIL_FROM = 'mdshafique1198@gmail.com'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/MdShafique-Leads/BankUltimus_Automation.git'
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
        bat 'npx cypress run --spec "cypress/e2e/BU.cy.js"'
      }
    }

    stage('Upload Videos to Google Drive') {
      steps {
        script {
          def videoFile = "${env.VIDEO_DIR}\\BU.cy.js.mp4"
          def remoteFile = "${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/videos/BU.cy.js.mp4"
          // Optional: list files to verify existence before upload
          bat "dir \"${env.VIDEO_DIR}\""
          bat "\"${env.RCLONE_PATH}\" copyto \"${videoFile}\" \"${remoteFile}\""
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

    stage('Send Email') {
      steps {
        emailext (
          subject: "✅ Cypress Report - Build #${env.BUILD_NUMBER}",
          body: """
            <p>Hello,</p>
            <p>The Cypress test <b>BU.cy.js</b> has completed.</p>
            <ul>
              <li><b>Status:</b> ${currentBuild.currentResult}</li>
              
              <li><b>Google Drive Folder:</b> <a href="${env.BUILD_FOLDER_LINK}">Open CypressReports/Build_${env.BUILD_NUMBER}</a></li>
            </ul>
            <p>Regards,<br>Md Shafique</p>
          """,
          to: "avisheak.mitra@leads-bd.com",
          from: "${env.EMAIL_FROM}",
          mimeType: 'text/html'
        )
      }
    }
  }

  post {
    always {
      echo 'Cleaning up...'
    }
  }
}


//<li><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>