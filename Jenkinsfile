pipeline {
  agent {
    label 'qa-executors'
  }

  stages {
    stage('npm ci') {
      options {
        timeout(time: 2, unit: 'MINUTES')
      }
      steps {
        sh 'npm ci'
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
        fileCoverageTargets: '70, 0, 0',
        lineCoverageTargets: '45, 0, 0',
        conditionalCoverageTargets: '35, 0, 0',
        methodCoverageTargets: '45, 0, 0',
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
