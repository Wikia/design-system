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
        conditionalCoverageTargets: '70, 0, 0',
        failUnhealthy: true,
        failUnstable: true,
        lineCoverageTargets: '80, 0, 0',
        maxNumberOfBuilds: 0,
        methodCoverageTargets: '80, 0, 0',
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
