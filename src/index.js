const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
    
    var result = '';
    var codedLetter = '';

    for (var i = 0; i < str.length; i++) {

        if ( i % 10 === 0 && i !== 0 && str[i-1] !== '*') {
            result += MORSE_TABLE[codedLetter];
            codedLetter = '';
        }

        if (str[i] === '*') {
            i += 9;
            result+= ' ';
            continue;
        }

        if (str[i] === '1') {

            if (str [i+1] === '1') 
                codedLetter += '-';
            else codedLetter += '.';

            i++;
            continue;
        }                
        
    }

    if (codedLetter !== '')
        result += MORSE_TABLE[codedLetter];

    return result;
}

module.exports = {
    decode
}