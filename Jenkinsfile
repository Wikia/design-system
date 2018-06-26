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
        timeout(time: 10, unit: 'MINUTES') {
           sh 'chmod +x ci/pr-checks.sh'
           sh 'ci/pr-checks.sh'
        }
    }
}
