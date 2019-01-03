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
        cobertura coberturaReportFile: '**/coverage/cobertura-coverage.xml',
          fileCoverageTargets: '100, 63, 63',
          lineCoverageTargets: '100, 46, 46',
          conditionalCoverageTargets: '100, 37, 37',
          methodCoverageTargets: '100, 46, 46',
          failUnhealthy: true,
          failUnstable: true,
          maxNumberOfBuilds: 0,
          onlyStable: false,
          zoomCoverageChart: false
        }
    }
  }

  post {
    cleanup {
      dir('node_modules') {
          deleteDir()
      }
    }
  }
}
