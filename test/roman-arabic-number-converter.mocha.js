var expect = require("chai").expect;
var arabicRomanNumberConverter = require("../roman-arabic-number-converter");

describe("arabicRomanNumberConverter", function() {
	
	describe("#convertArabicNumberToRoman", function() {
		
		it("should return I to 1", function() {
			expect(arabicRomanNumberConverter.convertArabicNumberToRoman(1)).to.eql("I");
		});
		
		it("should return III to 3", function() {
			expect(arabicRomanNumberConverter.convertArabicNumberToRoman(3)).to.eql("III");
		});
		
		it("should return IX to 9", function() {
			expect(arabicRomanNumberConverter.convertArabicNumberToRoman(9)).to.eql("IX");
		});
		
		it("should return MLXVI to 1066", function() {
			expect(arabicRomanNumberConverter.convertArabicNumberToRoman(1066)).to.eql("MLXVI");
		});
		
		it("should return MCMLXXXIX to 1989", function() {
			expect(arabicRomanNumberConverter.convertArabicNumberToRoman(1989)).to.eql("MCMLXXXIX");
		});
		
	});
	
	describe("#convertRomanNumberToArabic", function() {
		
		it('should return 1 to "I"', function() {
			expect(arabicRomanNumberConverter.convertRomanNumberToArabic("I")).to.eql(1);
		});
		
		it('should return 3 to "III"', function() {
			expect(arabicRomanNumberConverter.convertRomanNumberToArabic("III")).to.eql(3);
		});
		
		it('should return 9 to "IX"', function() {
			expect(arabicRomanNumberConverter.convertRomanNumberToArabic("IX")).to.eql(9);
		});
		
		it('should return 1066 to "MLXVI"', function() {
			expect(arabicRomanNumberConverter.convertRomanNumberToArabic("MLXVI")).to.eql(1066);
		});
		
		it('should return 1989 to MCMLXXXIX', function() {
			expect(arabicRomanNumberConverter.convertRomanNumberToArabic("MCMLXXXIX")).to.eql(1989);
		});
		
	});
});
