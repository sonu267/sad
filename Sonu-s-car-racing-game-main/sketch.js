var hypnoticBall, database;
var position;
var gameState=0
var form,player,game
var playerCount
var distance = 0
var allplayers
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game()
  game.getState()
  game.start()
  
}

function draw(){

  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
}

