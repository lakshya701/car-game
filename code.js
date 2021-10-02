var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["84ff3118-5c5e-4ef8-be17-35ef72b41ac9","d9a4e292-6637-4a1a-b6fd-4cdeb137f3b8","850c4c73-16a2-476d-9f4b-67b84361e23c","1104f49c-35ab-41b2-af7d-d498f248e1ae","190c5a33-d6cc-44bd-8c12-ac5e21747c58"],"propsByKey":{"84ff3118-5c5e-4ef8-be17-35ef72b41ac9":{"name":"blue_shirt2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"d9a4e292-6637-4a1a-b6fd-4cdeb137f3b8":{"name":"monstertruck_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/C_kXaMVnUmpvdhj7FYK7tWJcJy4EBoI6/category_vehicles/monstertruck_01.png","frameSize":{"x":376,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"C_kXaMVnUmpvdhj7FYK7tWJcJy4EBoI6","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/C_kXaMVnUmpvdhj7FYK7tWJcJy4EBoI6/category_vehicles/monstertruck_01.png"},"850c4c73-16a2-476d-9f4b-67b84361e23c":{"name":"monstertruck_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/mxourM2rKgo0A3dS0AVuIai51.8VlQ.T/category_vehicles/monstertruck_06.png","frameSize":{"x":400,"y":263},"frameCount":1,"looping":true,"frameDelay":2,"version":"mxourM2rKgo0A3dS0AVuIai51.8VlQ.T","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":263},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mxourM2rKgo0A3dS0AVuIai51.8VlQ.T/category_vehicles/monstertruck_06.png"},"1104f49c-35ab-41b2-af7d-d498f248e1ae":{"name":"monstertruck_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OpsmvQ4PReiaNwI45_xkFNM7SEXtmeHJ/category_vehicles/monstertruck_08.png","frameSize":{"x":396,"y":252},"frameCount":1,"looping":true,"frameDelay":4,"version":"OpsmvQ4PReiaNwI45_xkFNM7SEXtmeHJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":252},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OpsmvQ4PReiaNwI45_xkFNM7SEXtmeHJ/category_vehicles/monstertruck_08.png"},"190c5a33-d6cc-44bd-8c12-ac5e21747c58":{"name":"monstertruck_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png","frameSize":{"x":394,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("blue_shirt2_1"); 
  sam.scale="0.20"
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("monstertruck_01_1")
  car1.scale="0.15"
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("monstertruck_06_1")
  car2.scale="0.15"
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
   car3.setAnimation("monstertruck_08_1")
    car3.scale="0.15"
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("monstertruck_02_1")
   car4.scale="0.15"
 car1.velocityY = 2;
  car2.velocityY = 3;
  car3.velocityY = -4;
  car4.velocityY = -5;
//add the velocity to make the car move.

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
 
 
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
 
 
   if(keyDown("right")){
    sam.x = sam.x + 3;
  }
  if(keyDown("left")){
    sam.x = sam.x - 4;
  }
  
   
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
  {
     sam.x = 25;
     sam.y = 180;
     life = life + 1;
    
  }
  
  
  }
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
