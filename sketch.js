//Create variables here
var dog,dogImg,dogImg1;
 var database; 
 var foodS,foodStock;
 var dog,sadDog,happyDog, database;
  var foodS,foodStock;
   var fedTime,lastFed;
    var feed,addFood;
     var foodObj;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/happydog.png");
   sadDog=loadImage("images/dogImg.png");
    happyDog=loadImage("images/happydog.png");
   }


function setup() {
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);

  dog.scale = 0.15;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock); 
  database=firebase.database();
   createCanvas(1000,400);
    foodObj = new Food();
     foodStock=database.ref('Food');
      foodStock.on("value",readStock);
       dog=createSprite(800,200,150,150);
        dog.addImage(sadDog);
         dog.scale=0.15;
          feed=createButton("Feed the dog");
           feed.position(700,95);
            feed.mousePressed(feedDog);
             addFood=createButton("Add Food");
              addFood.position(800,95);
               addFood.mousePressed(addFoods); 
  
}


function draw() {  
  background(46,139,87);
   if(keyWentDown(UP_ARROW)){
      writeStock(foodS); 
      dog.addImage(dogImg1);
     } drawSprites();
      fill(255,255,254);
       stroke("black");
        text("Food remaining : "+foodS,170,200);
         textSize(13);
          text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  
  //add styles here
  background(46,139,87);
   foodObj.display();
    fedTime=database.ref('FeedTime');
     fedTime.on("value",function(data){ 
       lastFed=data.val();
       });
        fill(255,255,254);
         textSize(15);
          if(lastFed>=12){ 
            text("Last Feed : "+ lastFed%12 + " PM", 350,30);
           }
           else if(lastFed==0){ 
             text("Last Feed : 12 AM",350,30);
             }
             else{ text("Last Feed : "+ lastFed + " AM", 350,30);
             } 
             drawSprites();
             }
  //function to read food Stock
   function readStock(data){ 
     foodS=data.val();
      foodObj.updateFoodStock(foodS); 


function readStock(data){
  foodS = data.val();
  
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
database.ref('/').update({
  Food:x
})
}
   }
   function feedDog(){
      dog.addImage(happyDog);
       foodObj.updateFoodStock(foodObj.getFoodStock()-1); 
       database.ref('/').update({
          Food:foodObj.getFoodStock(),
           FeedTime:hour()
           })
          }
            //function to add food in stock 
           function addFoods(){ 
             foodS++; database.ref('/').update({ 
               Food:foodS
               }) 
              }

