$(document).ready(function(){
	var turn = 1;

	$('td').click(function(){
		var that = $(this);
		if (turn % 2 === 0) {
		  that.text("O");
		  that.addClass("O");
		  n = 'O'
		  	//if true always run above code...
		} else {
			that.text("X");
			that.addClass('X');
			//change this to that
			n = 'X';
		}
		//check for winner
		checkIfWon(n);

		turn++;
		that.off('click'); 
	});
			//.hasClass Determine whether any of the matched elements are assigned the given class.
			var checkIfWon = function(n){
					if (
						($('#spot1').hasClass(n) && $('#spot2').hasClass(n) && $('#spot3').hasClass(n)) ||
						($('#spot4').hasClass(n) && $('#spot5').hasClass(n) && $('#spot6').hasClass(n)) ||
						($('#spot7').hasClass(n) && $('#spot8').hasClass(n) && $('#spot9').hasClass(n)) ||
						($('#spot1').hasClass(n) && $('#spot4').hasClass(n) && $('#spot7').hasClass(n)) ||
						($('#spot1').hasClass(n) && $('#spot5').hasClass(n) && $('#spot9').hasClass(n)) ||
						($('#spot2').hasClass(n) && $('#spot5').hasClass(n) && $('#spot8').hasClass(n)) ||
						($('#spot3').hasClass(n) && $('#spot5').hasClass(n) && $('#spot7').hasClass(n)) ||
						($('#spot3').hasClass(n) && $('#spot6').hasClass(n) && $('#spot9').hasClass(n))
						)
					{
						 console.log(turn);
						 window.alert(n + " has won!!");
						 $('.td').off('click');
					} else  if (turn === 9) {
						 window.alert("Tie Game");
						 }

				}


});
		

		// this is a callback
		// function(){
		// $('td').on('click', function() {})
		// });