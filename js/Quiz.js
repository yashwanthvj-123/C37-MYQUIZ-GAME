
class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      contestant = new Contestant();
      contestant.getCount();
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements 
    question.hide ();

    //write code to change the background color here and code to show a heading for the result
    if (gameState===1) {
      background("yellow");
      var result=createElement ('h1');
      result.html ("Result of the Quiz");
      result.position(350,0);
      text("_____________________________________________",320,45);
    }

    //call getContestantInfo( ) here
    contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined and code to add a note here
    if (allContestants !== undefined) {
      fill("Blue");
      textSize(20);
      text ("*NOTE : Contestant who answere correct is highlighted in green colour",130,230);
    }

    //write code to highlight contest who answered correctly
    for (var plr in allContestants) {

      var correctAns = "2";

      if (correctAns === allContestants[plr].answer) { fill("green"); }

      else { fill("red"); }
    }
    
  }

}
