const rt = require('./rt-ctrl');

var downstairs = '99.149.178.119';
var upstairs = 'other ip';
var selected = null;
/*
	alexa ac
	-which ac would you like to change?
	upstairs
	okay, upstairs ac selected,  
	set selected to upstairs
	what would you like to do?
	set to 78
	repeat "did you say set to 78?"
	if yes

		rt.setTemp(78)

*/
console.log("ran startup script");