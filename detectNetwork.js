
// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  //find out the length for the cardNumber string we are given
  //test if the beginning indexes is 38 or 39
  //if

	// Visa always has a prefix of 4 and a length of 13, 16, or 19.
	// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

	var prefix1 = cardNumber[0];
	var prefix2 = prefix1 + cardNumber[1];
	var prefix3 = prefix2 + cardNumber[2];
	var prefix4 = prefix3 + cardNumber[3];
	var prefix5 = prefix4 + cardNumber[4];
	var prefix6 = prefix5 + cardNumber[5];
	var cardLength = cardNumber.length;

  	// Diner's Club
	if(cardNumber.startsWith('38') && cardLength === 14){
		return 'Diner\'s Club';
	} else if(cardNumber.startsWith('39') && cardLength === 14){
		return 'Diner\'s Club';

		// American Express
	} else if(cardNumber.startsWith('34') && cardLength === 15){
		return 'American Express';
	} else if(cardNumber.startsWith('37') && cardLength === 15){
		return 'American Express';

		// China UnionPay
		// prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
	} else if(((Number(prefix6) >= 622126) && (Number(prefix6) <= 622925)) && 
		(cardLength >= 16 && cardLength <= 19)){
		return 'China UnionPay';
	} else if(((Number(prefix4) >= 6282) && (Number(prefix4) <= 6288)) && 
		(cardLength >= 16 && cardLength <= 19)){
		return 'China UnionPay';
	} else if(((Number(prefix3) >= 624) && (Number(prefix3) <= 626)) && 
		(cardLength >= 16 && cardLength <= 19)){
		return 'China UnionPay';

		// Switch
		// prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 - length of 16, 18, or 19
	}else if(
		(
			(prefix4 === '4903') ||
			(prefix4 === '4905') ||
			(prefix4 === '4911') ||
			(prefix4 === '4936') ||
			(prefix6 === '564182') ||
			(prefix6 === '633110') ||
			(prefix4 === '6333') ||
			(prefix4 === '6759')
		)	&& (
			(cardLength === 16) ||
			(cardLength === 18) ||
			(cardLength === 19)
			)
		){
		return 'Switch';

		// Visa
	}else if(cardNumber.startsWith('4') && cardLength === 13){
		return 'Visa';
	}else if(cardNumber.startsWith('4') && cardLength === 16){
		return 'Visa';
	}else if(cardNumber.startsWith('4') && cardLength === 19){
		return 'Visa';

		// MasterCard
	}else if(cardNumber.startsWith('51') && cardLength === 16){
		return 'MasterCard';
	}else if(cardNumber.startsWith('52') && cardLength === 16){
		return 'MasterCard';
	}else if(cardNumber.startsWith('53') && cardLength === 16){
		return 'MasterCard';
	}else if(cardNumber.startsWith('54') && cardLength === 16){
		return 'MasterCard';
	}else if(cardNumber.startsWith('55') && cardLength === 16){
		return 'MasterCard';

		// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
	}else if(((prefix4 === '6011' || ( (Number(prefix3) >= 644) && (Number(prefix3) <= 649) ) || prefix2 === '65')) && (cardLength === 16 || cardLength === 19 )) {
  	return "Discover";
  	// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
	}else if((prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304') && (cardLength >= 12 && cardLength <= 19)){
		return 'Maestro';
	}


 
  

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
