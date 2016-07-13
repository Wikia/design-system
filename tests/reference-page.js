var assert = require('chai').assert,
	configLoader = require('vrt').config,
	testCaseLoader = require('vrt').testcase,
	driver = require('vrt').driver,
	fileUrl = require('file-url');

describe('reference page', function () {
	var config, client, testCase;

	beforeEach(function () {
		testCase = testCaseLoader.load(this);
		config = configLoader.loadConfig(testCase);
		client = driver.loadClient(config);
	});

	it('looks good', function (done) {
		client
			.init()
			.url(fileUrl('index.html'))
			.webdrivercss(testCase.group, config.webdrivercssTestCase, function (err, resp) {
				assert.equal(resp[testCase.name][0].misMatchPercentage, 0, 'Mismatch percentage different than 0');
				assert.isOk(resp[testCase.name][0].isExactSameImage);
			})
			.call(done);
	});

	after(function (done) {
		client.end(done);
	});
});
