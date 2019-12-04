import ASCIIConvert from '../src/asciiconvert.js';

const init = () => {
    const asciiConvertor = new ASCIIConvert();

    global.asciiConvertor = asciiConvertor;
}

init();