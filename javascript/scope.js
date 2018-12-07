"use strict";
(function(){
var myNameIs = 'Arash'; // TODO: Fill in your name here.
function sayHello(name){
	console.log ("Hello " + name);
} sayHello(myNameIs);

var random = Math.floor((Math.random()*100)+1);


function isOdd(testnumber){
	(testnumber % 2 !== 0) ? console.log ("the random number is " + testnumber + " and it's odd") : console.log ("the random number is " + testnumber + " and it's even");
}
isOdd(random);
})();