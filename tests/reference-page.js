var assert = require('chai').assert,
	configLoader = require('vrt').config,
	testCaseLoader = require('vrt').testcase,
	driver = require('vrt').driver,
	util = require('util'),
	fileUrl = require('file-url');

function runTest(mochaTest, done, seleniumOptions) {
	// Hacky but works
	if (process.env.VRT_UPDATE_BASELINE === '1') {
		console.log('Updating the baseline');
		seleniumOptions.updateBaseline = true;
	}

	var testCase = testCaseLoader.load(mochaTest, seleniumOptions),
		config = configLoader.loadConfig(testCase),
		client = driver.loadClient(config);

	client
		.init()
		.url(fileUrl('index.html'))
		.webdrivercss(testCase.group, config.webdrivercssTestCase, function (err, resp) {
			var result = resp[testCase.name][0];

			assert.ifError(err, 'There is no error');
			assert.isOk(result.isExactSameImage, result.message);
		})
		.end(done);
}

describe('reference page', function () {
	it('chrome', function (done) {
		runTest(this, done, {
			browser: 'chrome',
			screenWidth: [1024, 1300]
		});
	});

	it('firefox', function (done) {
		runTest(this, done, {
			browser: 'firefox',
			screenWidth: [1024, 1300]
		});
	});

	it('chrome mobile', function (done) {
		runTest(this, done, {
			browser: 'chrome',
			useMobile: true
		});
	});
});
