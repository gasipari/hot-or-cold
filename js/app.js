
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	// global variables
  	var randomNumber;
  	var guessCount;

  	// start
  	newGame();

  	// create new game
  	function newGame() {
  		// generate new random number
  		generateNumber();
  		// reset guess count
  		guessCount = 0;
  	}

  	// generate random number between 1 and 100
  	function generateNumber(){
  		randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  		console.log('random number :'+randomNumber);
  	}

  	// reset game
  	function resetGame(){
  		$("#userGuess").val(''); // clear user guess input
  		$("#count").text(0); // reset guess count
  		$("ul#guessList >li").remove(); // reset guess list
  		$("#feedback").text("Make your Guess!"); // reset feedback title
  	}

  	function compareNumbers(userNumber){
  		var diff = Math.abs(userNumber - randomNumber);
  		console.log('diff is: '+diff);

  		if ( diff > 50) {
  			$("#feedback").text('Ice cold');
  		}else if (diff >= 30 && diff <= 50) {
  			$("#feedback").text('cold');
  		}else if (diff >= 20 && diff <= 30) {
  			$("#feedback").text('warm');
  		}else if (diff >= 10 && diff <= 20) {
  			$("#feedback").text('hot');
  		}else if (diff >= 1 && diff <= 10) {
  			$("#feedback").text('very hot');
  		 }else if (diff == 0 ){
  			$("#feedback").text('Goog job!You guessed it');
  		}
  	}

  	// grab user guess and compare with the generated random number
  	$("form").submit(function(event){
  		event.preventDefault();
  		var userNumber = $("#userGuess").val();
  		if (userNumber > 0 && userNumber <= 100) {
  			compareNumbers(userNumber);
  			$("#count").text(guessCount += 1); // increment guess count by 1
  			$("ul#guessList").append("<li>"+userNumber+"</li>"); // add user guess to the list
  		}else {
  			alert("Please choose a number between 1 and 100!");
  		}
  		//
  		$("#userGuess").val(''); // clear guess input
  	})

  	// switch to new game
  	$(".new").click(function(){
  		resetGame();
  	})

});