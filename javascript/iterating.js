(function(){
    "use strict";

var names = ['aaa','bbb','ccc','ddd'];
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
console.log (names.length + " names in the array");
    // TODO: Create a log statement that will log the number of elements in the names array.
console.log ("First name is " + names[0]);
console.log ("second name is " + names[1]);
console.log ("third name is " + names[2]);
console.log ("fourth name is " + names[3]);

//console.log (names[0] + " is First name");
//console.log (names[1] + " is second name");
//console.log (names[2] + " is third name");
//console.log (names[3] + " is fourth name");
    // TODO: Create log statements that will print each of the names array elements individually.

for (var i = 0; i < names.length; i++) {
	console.log ("name " + i + ":"+ names[i]);
}
names.forEach(function(element, index, array)
{
console.log (" name " + index + ": is " + element)
});

})();