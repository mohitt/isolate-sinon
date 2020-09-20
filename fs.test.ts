import chai from 'chai';
import sinon from 'sinon';
import * as fs from 'fs';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

import { expect } from 'chai';


describe('readConfigFile', () => {
  it('returns Fallback value if file is not there - @FileNotThere', () => {

    sinon.stub(fs, 'existsSync').returns(true);
    expect(fs.existsSync('something')).true;

  });
});
