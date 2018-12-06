node('qa-executors') {
  stage('Checkout SCM') {
    def scmVars = checkout scm

    // in our Jenkins version scmVars are null so this doesn't work
    // env.GIT_COMMIT = scmVars.GIT_COMMIT

    // alternative for our Jenkins version
    sh 'git rev-parse HEAD > GIT_BRANCH'
    sh 'cat GIT_BRANCH'
    env.GIT_COMMIT = readFile('GIT_BRANCH').trim()
  }
  stage('Build and Test') {
    timeout(time: 5, unit: 'MINUTES') {
      sh 'npm ci'
      sh 'COVERAGE=true ember test'
    }
  }

  stage('Run Code Coverage') {
    step([$class: 'CoberturaPublisher',
      autoUpdateHealth: false,
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
    ])
  }
}
