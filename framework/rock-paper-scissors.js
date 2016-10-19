// JavaScript code goes on this page
var userChoice = prompt("Do you choose rock, paper, scissors, spock, or rock?");
var win;
var computerChoice = Math.random();
if (computerChoice <= 0.2)
{
  computerChoice = "rock";
}
else if (computerChoice <= 0.4)
{
  computerChoice = "paper";
}
else if (computerChoice <= 0.6)
{
  computerChoice = "lizard";
}
else if (computerChoice <= 0.8)
{
  computerChoice = "spock";
}
else
{
  computerChoice = "scissors";
}
console.log(computerChoice);
var compare = function(userChoice, computerChoice)
{
if (userChoice === computerChoice)
{
  window.alert("The result is a tie!");
}
  else if (userChoice === "rock")
  {
    win = (computerChoice === "scissors" || computerChoice === "lizard");
  }
  else if (userChoice === "paper")
  {
    win = (computerChoice === "rock" || computerChoice === "spock");
  }
  else if (userChoice === "scissors")
  {
    win = (computerChoice === "paper" || computerChoice === "lizard");
  }
  else if (userChoice === "spock")
  {
    win = (computerChoice === "rock" || computerChoice === "scissors");
  }
  else if (userChoice === "lizard")
  {
    win = (computerChoice === "spock" || computerChoice === "paper");
  }
  if(win)
  {
    window.alert("You Win! "+userChoice+" beats " + computerChoice +".");
  }
  else
  {
    window.alert("You Lose! "+computerChoice+" beats "+userChoice+".");
  }
};
