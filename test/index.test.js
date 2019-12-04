import ASCIIConvert from '../src/asciiconvert.js';

describe('Convert instance', () => {
    it('Should be an object', () => {
        const asciiConvert = new ASCIIConvert();
        
        assert.isObject(asciiConvert);
    });
});

describe('Convert functions', () => {
    let asciiConvert = null;

    beforeEach(() => {
        let asciiConvert = new ASCIIConvert();
    });

    it('should return size ()', () => {
        const arr = undefined;
        const expected = 0;

        const actual = 0;

        assert.deepEqual(actual, expected);
    });
});