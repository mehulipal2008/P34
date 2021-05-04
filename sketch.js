var dog, happyDog, database, foodS, foodStock;
var dog_img, happyDog_img;
function preload(){
	dog_img.loadImage("images/dogImg1.png");
  happyDog_img.loadImage("images/dogImg.png");


}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage("dog", dog_img);

 // happyDog = createSprite();
 // happyDog.addImage("happyDog", happyDog_img);

  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  backgroud(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    
  }

  drawSprites();
  //add styles here
    textSize(30);
    fill("white");
    stroke(10);
}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}



