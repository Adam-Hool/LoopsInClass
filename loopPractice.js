"use strict";
var MaxNumber=0;
var CurrentNumber=0;

CurrentNumber=prompt("what number do you want to start on?");
MaxNumber=prompt("What Max Number do you want?");
for(CurrentNumber;CurrentNumber<=MaxNumber;CurrentNumber++)
{
	if (CurrentNumber%3 && CurrentNumber%5===0)
	{
        console.log("fizzbuzz");
	}
	else if(CurrentNumber%5==0)
	{
		console.log("buzz");
	}
	else if(CurrentNumber%3===0)
	{
		console.log("fizz");
	}
	else
	{
        console.log(CurrentNumber);
	}
}
