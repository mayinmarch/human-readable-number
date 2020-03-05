const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred',
    200: 'two hundred',
    300: 'three hundred',
    400: 'four hundred',
    500: 'five hundred',
    600: 'six hundred',
    700: 'seven hundred',
    800: 'eight hundred',
    900: 'nine hundred'

}

module.exports = function toReadable (number) {
    if(number < 20 ) {
        return numbers[number];
    }

    if(number >= 20 && number < 100){
        if (number % 10 === 0) {
            return numbers[number];
        }

        let tens = Math.floor(number/10) * 10;
        let digits = number % 10;
        return numbers[tens] + ' ' + numbers[digits];
    }

    if (number >= 100) {
        if (number % 100 === 0) {
            return numbers[number];
        }

        let hundreds = Math.floor(number / 100) * 100;
        let tens = number % 100;
        if (tens % 10 === 0 || tens < 20) {
            return numbers[hundreds] + ' ' + numbers[tens];
        } 
        tens = Math.floor(tens / 10) * 10;
        let digits = number % 10;
        return numbers[hundreds] + ' ' + numbers[tens] + ' ' + numbers[digits];
    }
}
