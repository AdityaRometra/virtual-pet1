//Create variables here
var dog,happyDog,database,foodS,foodStock,virtualDog;

function preload()
{
	//load images here
  happyDog=loadImage("images/dogImg1.png");
  dog=loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  virtualDog=createSprite(250,350,10,10);
  virtualDog.addImage(dog);
  virtualDog.scale=0.3;
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
   writeStock(foodS-1);
    virtualDog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white");
  text("food remaining: "+foodS,250,200)
  text("Note:Press UP ARROW key to feed drago milk",20,50);
}


function readStock(data){
foodS=data.val();

}
function writeStock(x){
  database.ref('/').update({
    food:x

  })

}






