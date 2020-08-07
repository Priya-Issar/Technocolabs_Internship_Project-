
var runnertime=true;

var runnerAge=20;

var raceTime="";

var raceNumber = Math.floor(Math.random() * 1000);

if(runnerAge>18 & runnertime==true)
	var RaceNumber=1000;
	

if(runnerAge>18 & runnertime==true)
{
	raceTime="9.30 am";
	console.log("You will run at " + raceTime + " and your race number is " + raceNumber);

}

else if(runnerAge>18 & runnertime==false)
{
	raceTime="11.00 am";
	console.log("You will run at " + raceTime + " and your race number is " + raceNumber);

}

else if(runnerAge==18)
{
	console.log("Please see the registration desk.");
}
else{
	raceTime = "12:30 pm";
	console.log("You will run at " + raceTime + " and your race number is " + raceNumber);
}