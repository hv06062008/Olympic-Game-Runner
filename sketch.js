var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, player1, player2, player3,player4;

var track, player1_img, player2_img, player3_img, player4_img;

function preload(){
  track = loadImage("../carRacingStage2.5-master/images/tracks.jpg");
  player1_img = loadAnimation("../carRacingStage2.5-master/images/alienBlue.png");
  player2_img = loadAnimation("../carRacingStage2.5-master/imagesalienGreen.png");
  player3_img = loadAnimation("../carRacingStage2.5-master/images/alienPink.png");
  player4_img = loadAnimation("../carRacingStage2.5-master/images/alienYellow.png");
  ground = loadImage("../carRacingStage2.5-master/images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
