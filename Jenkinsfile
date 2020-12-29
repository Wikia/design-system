pipeline {
  agent {
    node {
      label 'qa-executors'
      customWorkspace "/var/lib/jenkins/workspace/design-system-pr-${BRANCH_NAME}"
    }
  }

  stages {
    stage('yarn ci') {
      options {
        timeout(time: 2, unit: 'MINUTES')
      }
      steps {
        sh 'yarn ci'
      }
    }
    stage('Build and Test') {
      environment {
        COVERAGE = true
      }
      options {
        timeout(time: 2, unit: 'MINUTES')
      }
      steps {
        sh 'ember test'
      }
    }
  }

  post {
    success {
      cobertura autoUpdateHealth: true,
        autoUpdateStability: true,
        coberturaReportFile: '**/coverage/cobertura-coverage.xml',
        fileCoverageTargets: '63, 63, 63',
        lineCoverageTargets: '46, 46, 46',
        conditionalCoverageTargets: '37, 37, 37',
        methodCoverageTargets: '46, 46, 46',
        failUnhealthy: true,
        failUnstable: true,
        maxNumberOfBuilds: 0,
        onlyStable: false,
        zoomCoverageChart: false
    }
    cleanup {
      dir('node_modules') {
          deleteDir()
      }
    }
  }
}
