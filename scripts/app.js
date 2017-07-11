console.log("sanity check")

// function Car(type, color) {
// 	this.type = type;
// 	this.color = color;
// 	this.move = function(){};
// }
//
// var ferrari = new Car("ferrari", "red");
// var lamborghini = new Car("lamborghini", "black");
//
//
//
// //How would you make your player's "cars" use custom images?
//   link a image type to the image image sub-object
//   ie: this.image = "url to image"
//
// //how to make car move
// have a listener that waits for a "click" then move X pixels or spaces?
//
// //Can a player type in their name to see custom win messages?
// link 2 use instances to input commands
// set name to input text
// set win to "`${user-name} has won!`"
//
// //Can you enable a reset button to restart the race?
// cmmd-R
//
// //How about a win counter that spans across multiple races?
// if player A wins countA ++;
// if player B wins countB ++;
//
// link a score counter to countA and countB

$(function() {

  // global variables
  //$confetti = $('#confetti');
  $reset = $('#reset');
  var winner = null;

  // reset to initial state of race
  var raceAgain = function() {
    //$confetti.css({'z-index': -1, opacity: 0});
    $reset.addClass('tmp-hidden');
    $('.player1').css({left: 0});
    $('.player2').css({left: 0});
    winner = null;
  };

  // show confetti and reset button when winner declared
  var executeWin = function() {
    // $confetti.css({'z-index': 1, opacity: 1});
  };

  // take keypress event and move correct player
  var movePlayer = function(keypressEvent) {
    // returns key like 'a', 'l', etc.
    var keyCode = String.fromCharCode(keypressEvent.keyCode);
    // find player and player's position
    var $player = $('[data-key="' + keyCode + '"]');
    var leftPosition = $player.offset().left;
    // set player's new position (move forward)
    $player.css({left: leftPosition + 1});

    // if player moved past end of track
    if ($player.offset().left >= $('#track').width() - $player.width()) {
      // set winner to player and execute win
      winner = $player;
      executeWin();
    }
  };
  // add event-handlers
  var race = function() {
    $(window).on('keypress', function(event) {
      $reset.removeClass('tmp-hidden');
      if (!winner) {
        movePlayer(event);
      }
    });
    $reset.on('click', function() {
      raceAgain();
    });
  };
  // start the race!
  race();

});
