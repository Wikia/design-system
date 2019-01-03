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
          fileCoverageTargets: '100, 100, 100',
          lineCoverageTargets: '100, 100, 100',
          conditionalCoverageTargets: '100, 100, 100',
          methodCoverageTargets: '100, 100, 100',
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
