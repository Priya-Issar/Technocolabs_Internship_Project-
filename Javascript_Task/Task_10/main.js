
//const getUserChoice =(userInput) =>
const getUserChoice = function(userInput) 
{
	userInput=userInput.toLowerCase();
	
	if(userInput=="rock" || userInput=="paper" || userInput=="scissors")
		{
			return userInput;
		}
	else
	{
		console.log('Error');
	}
		
}

function getComputerChoice()
{
	switch (Math.floor(Math.random() * 3)) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	
	}
}

function determineWinner(userChoice,computerChoice)
{
	if(userChoice==computerChoice)
		return "the game was a tie";
	if(userChoice=='rock')
	{
		if(computerChoice=='paper')
			return 'computer won';
		else
			return 'you won';
	}
	
	if(userChoice=='paper')
	{
		if(computerChoice=='scissors' || computerChoice=='rock' )
			return 'computer won';
		else
			return 'you won';
	}
	
	if(userChoice=='scissors')
	{
		if(computerChoice=='rock' || computerChoice=='paper' )
			return 'computer won';
		else
			return 'you won';
	}
}

function playGame()
{
	var userChoice=getUserChoice('rock');
	var computerChoice=getComputerChoice();
	
	console.log("user choice is "+userChoice);
	console.log("computer choice is "+computerChoice);
	console.log("hello");
	console.log("winner is: "+determineWinner(userChoice,computerChoice));
}

playGame();