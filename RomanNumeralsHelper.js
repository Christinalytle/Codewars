/* Roman Numerals Helper
 *
 * Task

Create a RomanNumerals class that can convert a roman numeral to and from an
integer value. It should follow the API demonstrated in the examples below.
Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting
with the left most digit and skipping any digit with a value of zero. In Roman
numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is
written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending
order: MDCLXVI.

Examples

RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help

| Symbol | Value | |----------------| | I | 1 | | V | 5 | | X | 10 | | L | 50 |
| C | 100 | | D | 500 | | M | 1000 |
*/

class RomanNumerals{
	constructor (){
	}

	toRoman(integerInput){
		let stringInput = integerInput.toString();
		let trailingZerosCount = 0;
		let trailingZerosString = '';

		for(let x = 0; x < stringInput.length; x++){
			if (stringInput[x] !== '0'){
				console.log (stringInput[x]);
				trailingZerosCount = stringInput.length - x - 1;
				trailingZerosString = '';
				for(let i = 0; i < trailingZerosCount; i++){
					trailingZerosString += '0';					
				}
				console.log(trailingZerosString);
			}
		}
		return 999;
	}

	fromRoman(){
		return 999;
	}
}

myRomanNumeralHelper = new RomanNumerals();

console.log(myRomanNumeralHelper.toRoman(2008));
