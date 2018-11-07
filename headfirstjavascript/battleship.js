let randomLoc = Math.floor(Math.random()*5);
		location1 = randomLoc;
		location2 = randomLoc+1;
		location3 = randomLoc+2;
		hits = 0;
		guesses = 0;
		isSunk = false;
var guess;
while (isSunk==false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	if (guess<0||guess>6) {
		alert("请输入正确的数字");
	} else {
		guesses++;
		if (guess==location1 || guess==location2 || guess==location3) {
			alert("Hit!");
			hits++;
			if (hits==3) {
				isSunk = true;
				alert("You sank my battleship!");
			} 
		} else {
				alert("Miss!");
		}
	}		
}
var stats = "You took " + guesses + " guesses to sink my battleship, " +
						"which means your shooting accuracy was " + (3/guesses);
alert(stats);