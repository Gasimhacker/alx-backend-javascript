const { describe, it } = require('mocha');

const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should make sure that the math used for sendPaymentRequestToApi is the same as Utils.calculateNumber', () => {
      const calculateNumber = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(1.5, 2);
      assert(calculateNumber.calledOnce);
      calculateNumber.restore();
    });
});
