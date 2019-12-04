class ASCIIConvert {

    constructor() {
        console.log(this.convertToUpper());
        console.log(this.convertToLower());
        console.log(this.convertToRus());
        console.log(this.convertToNum());
        console.log(this.convertToPrintRange());
    }

    convertToUpper = () => {
        let str = '';

        for (let i = 65; i <= 90; i++) {
            str += String.fromCharCode(i);
        }

        return str;
    }

    convertToLower = () => {
        let str = '';

        for (let i = 97; i <= 122; i++) {
            str += String.fromCharCode(i);
        }

        return str;
    }

    convertToRus = () => {
        let str = '';

        for (let i = 1072; i <= 1103; i++) {
            str += String.fromCharCode(i);
        }

        return str;
    }

    convertToNum = () => {
        let str = '';

        for (let i = 48; i <= 57; i++) {
            str += String.fromCharCode(i);
        }

        return str;
    }
    
    convertToPrintRange = () => {
        let str = '';

        for (let i = 32; i <= 126; i++) {
            str += String.fromCharCode(i);
        }

        return str;
    }
}

export default ASCIIConvert;