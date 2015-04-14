function ArabicRomanNumberDictionaryEntry(arabic, roman) {
	this.arabic = arabic;
	this.roman = roman;
}


var arabicRomanNumberConverter = {
	
	ArabicRomanNumberDictionary : [
		new ArabicRomanNumberDictionaryEntry(1000, "M"),
		new ArabicRomanNumberDictionaryEntry(900, "CM"),
		new ArabicRomanNumberDictionaryEntry(500, "D"),
		new ArabicRomanNumberDictionaryEntry(400, "CD"),
		new ArabicRomanNumberDictionaryEntry(100, "C"),
		new ArabicRomanNumberDictionaryEntry(90, "XC"),
		new ArabicRomanNumberDictionaryEntry(50, "L"),
		new ArabicRomanNumberDictionaryEntry(40, "XL"),
		new ArabicRomanNumberDictionaryEntry(10, "X"),
		new ArabicRomanNumberDictionaryEntry(9, "IX"),
		new ArabicRomanNumberDictionaryEntry(5, "V"),
		new ArabicRomanNumberDictionaryEntry(4, "IV"),
		new ArabicRomanNumberDictionaryEntry(1, "I")
	],
	
	convertArabicNumberToRoman : function(arabicNumber) {
		var romanNumber = "";
		var restOfArabicNumber = arabicNumber;
		this.ArabicRomanNumberDictionary.forEach(function(dictionaryEntry) {
			while (restOfArabicNumber - dictionaryEntry.arabic >= 0) {
				romanNumber += dictionaryEntry.roman;
				restOfArabicNumber -= dictionaryEntry.arabic;
			}
		});
		return romanNumber;
	}, 
	
	convertRomanNumberToArabic : function(romanNumber) {
		var arabicNumber = 0;
		var restOfRomanNumber = romanNumber;
		this.ArabicRomanNumberDictionary.forEach(function(dictionaryEntry) {
			while (restOfRomanNumber.indexOf(dictionaryEntry.roman) === 0) {
				arabicNumber += dictionaryEntry.arabic;
				restOfRomanNumber = restOfRomanNumber.substring(dictionaryEntry.roman.length);
			}
		});
		return arabicNumber;
	}
};

module.exports = arabicRomanNumberConverter;
