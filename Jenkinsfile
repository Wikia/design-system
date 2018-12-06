pipeline {
  agent {'qa-executors'}

  stages {
    stage('Checkout SCM') {
      checkout scm
    }
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
      cobertura autoUpdateHealth: false,
        autoUpdateStability: false,
        coberturaReportFile: '**/coverage/cobertura-coverage.xml',
        conditionalCoverageTargets: '70, 0, 0',
        failUnhealthy: false,
        failUnstable: false,
        lineCoverageTargets: '80, 0, 0',
        maxNumberOfBuilds: 0,
        methodCoverageTargets: '80, 0, 0',
        onlyStable: false,
        zoomCoverageChart: false
    }
  }
}
