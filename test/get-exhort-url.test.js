import { expect } from 'chai'

import { selectTrustifyDABackend } from '../src/index.js'

const testProdUrl = 'https://trustify-da.example.com';
const testDevUrl = 'https://dev.trustify-da.example.com';

suite('testing Select Trustify DA Backend function when TRUSTIFY_DA_DEV_MODE environment variable is True', () => {

	test('When Dev Mode environment Variable= true, default DEV Trustify DA Backend Selected', () => {
		let testOpts = {
			'TRUSTIFY_DA_DEV_MODE': 'true'
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		expect(selectedUrl).not.to.be.equals(testProdUrl)
		expect(selectedUrl).to.be.equals(testDevUrl)
	});

	test('When Dev Mode environment Variable= true, and despite option Dev Mode = false, default DEV Trustify DA Backend Selected', () => {
		let testOpts = {
			'TRUSTIFY_DA_DEV_MODE': 'false'
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		expect(selectedUrl).not.to.be.equals(testProdUrl)
		expect(selectedUrl).to.be.equals(testDevUrl)
	});

	test('When Dev Mode environment Variable= true, And option DEV_TRUSTIFY_DA_BACKEND_URL contains some url route that client set, default DEV Trustify DA Backend Not Selected', () => {
		const dummyRoute = 'http://dummy-trustify-da-route';
		delete process.env['DEV_TRUSTIFY_DA_BACKEND_URL']
		let testOpts = {
			'DEV_TRUSTIFY_DA_BACKEND_URL': dummyRoute
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		expect(selectedUrl).to.be.equals(dummyRoute)
	});

}).beforeAll(() => {
	process.env['TRUSTIFY_DA_DEV_MODE'] = 'true'
	process.env['TRUSTIFY_DA_BACKEND_URL'] = testProdUrl
	process.env['DEV_TRUSTIFY_DA_BACKEND_URL'] = testDevUrl
}).afterAll(() => delete process.env['TRUSTIFY_DA_DEV_MODE']);

suite('testing Select Trustify DA Backend function when TRUSTIFY_DA_DEV_MODE environment variable is false', () => {

	test('When Dev Mode environment Variable= true, default DEV Trustify DA Backend Selected', () => {

		let testOpts = {
			'TRUSTIFY_DA_DEV_MODE': 'false'
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		expect(selectedUrl).not.to.be.equals(testDevUrl)
		expect(selectedUrl).to.be.equals(testProdUrl)
	});

	test('When Dev Mode environment Variable= false, and despite option Dev Mode = true, default Trustify DA Backend Selected (production)', () => {
		let dummyRoute = 'http://dummy-dev-route-trustify-da'
		let testOpts = {
			'TRUSTIFY_DA_DEV_MODE': 'true',
			'DEV_TRUSTIFY_DA_BACKEND_URL': dummyRoute
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		expect(selectedUrl).not.to.be.equals(dummyRoute)
		expect(selectedUrl).to.be.equals(testProdUrl)
	});

	test('When Dev Mode environment Variable= false, environment variable DEV_TRUSTIFY_DA_BACKEND_URL=dummy-url, option TRUSTIFY_DA_DEV_MODE=true, default Trustify DA Backend Selected anyway', () => {
		const dummyRoute = 'http://dummy-url'
		process.env['DEV_TRUSTIFY_DA_BACKEND_URL'] = dummyRoute
		let testOpts = {
			'TRUSTIFY_DA_DEV_MODE': 'true',
			'DEV_TRUSTIFY_DA_BACKEND_URL': dummyRoute
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		delete process.env['DEV_TRUSTIFY_DA_BACKEND_URL']
		expect(selectedUrl).not.to.be.equals(dummyRoute)
		expect(selectedUrl).to.be.equals(testProdUrl)
	});

}).beforeAll(() => {
	process.env['TRUSTIFY_DA_DEV_MODE'] = 'false'
	process.env['TRUSTIFY_DA_BACKEND_URL'] = testProdUrl
	process.env['DEV_TRUSTIFY_DA_BACKEND_URL'] = testDevUrl
}).afterAll(() => delete process.env['TRUSTIFY_DA_DEV_MODE']);

suite('testing Select Trustify DA Backend function when TRUSTIFY_DA_DEV_MODE environment variable is not set', () => {

	test('When Dev Mode Option = false, default Trustify DA Backend Selected (production)', () => {

		let testOpts = {
			'TRUSTIFY_DA_DEV_MODE': 'false'
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		expect(selectedUrl).not.to.be.equals(testDevUrl)
		expect(selectedUrl).to.be.equals(testProdUrl)
	});

	test('When Dev Mode Option Variable= true, default dev Trustify DA Backend Selected', () => {
		let testOpts = {
			'TRUSTIFY_DA_DEV_MODE': 'true'
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		expect(selectedUrl).not.to.be.equals(testProdUrl)
		expect(selectedUrl).to.be.equals(testDevUrl)
	});

	test('When Dev Mode option = true, option DEV_TRUSTIFY_DA_BACKEND_URL=some dummy-url, then some dummy-url Trustify DA Backend Selected', () => {
		let dummyRoute = 'http://dummy-dev-route-trustify-da'
		process.env['DEV_TRUSTIFY_DA_BACKEND_URL'] = dummyRoute
		let testOpts = {
			'TRUSTIFY_DA_DEV_MODE': 'true',
			'DEV_TRUSTIFY_DA_BACKEND_URL': dummyRoute
		}
		let selectedUrl = selectTrustifyDABackend(testOpts);
		expect(selectedUrl).not.to.be.equals(testProdUrl)
		expect(selectedUrl).to.be.equals(dummyRoute)
		delete process.env['DEV_TRUSTIFY_DA_BACKEND_URL']
	});

	test('When Nothing set, throw error', () => {
		let selectedUrl = selectTrustifyDABackend({});
		expect(selectedUrl).to.be.equals(testProdUrl)
	})
}).beforeAll(() => {
	process.env['TRUSTIFY_DA_BACKEND_URL'] = testProdUrl;
	process.env['DEV_TRUSTIFY_DA_BACKEND_URL'] = testDevUrl
});
