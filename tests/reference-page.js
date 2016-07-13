var assert = require('chai').assert,
	configLoader = require('vrt').config,
	testCaseLoader = require('vrt').testcase,
	driver = require('vrt').driver,
	util = require('util'),
	fileUrl = require('file-url');

function runTest(mochaTest, done, browser, useMobile) {
	var config, client, testCase;

	testCase = testCaseLoader.load(mochaTest, {
		browser: browser,
		useMobile: useMobile || false
	});

	config = configLoader.loadConfig(testCase);
	client = driver.loadClient(config);

	client
		.init()
		.url(fileUrl('index.html'))
		.webdrivercss(testCase.group, config.webdrivercssTestCase, function (err, resp) {
			assert.equal(resp[testCase.name][0].misMatchPercentage, 0, 'Mismatch percentage different than 0');
			assert.isOk(resp[testCase.name][0].isExactSameImage);
		})
		.end(done);
}

describe('reference page', function () {
	it('chrome', function (done) {
		runTest(this, done, 'chrome');
	});

	it('firefox', function (done) {
		runTest(this, done, 'firefox');
	});

	it('chrome mobile', function (done) {
		runTest(this, done, 'chrome', true);
	});
});
