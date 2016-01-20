$(document).ready(function(){
  window.dancers = [];

/////////////////////////Button 1/////////////////////

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


/////////////////////////Button 2/////////////////////

 $(".addSquareDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-custom");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

/////////////////////////Button 3/////////////////////
$(".addextraDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-extra");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


/////////////////////////Button 3/////////////////////
$(".addnewDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-new");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


/////////////////////////Button 4/////////////////////

$(".BDLineUp").on("click", function(event){
     for(var i=0; i<window.dancers.length; i++){
       if(window.dancers[i].constructor==makeBlinkyDancer){
         window.dancers[i].left = 100; 
         window.dancers[i].setPosition(this.top, this.left)
       } 
     }

});

$(".SDLineUp").on("click", function(event){
     for(var i=0; i<window.dancers.length; i++){
       if(window.dancers[i].constructor==squareDancer){
         window.dancers[i].top = 20; 
         window.dancers[i].setPosition(this.top, this.left)
       } 
     }

});

$(".EDLineUp").on("click", function(event){
     for(var i=0; i<window.dancers.length; i++){
       if(window.dancers[i].constructor==extraDancer){
         window.dancers[i].left = 1000; 
         window.dancers[i].setPosition(this.top, this.left)
       } 
     }

});


$(".NDLineUp").on("click", function(event){
     for(var i=0; i<window.dancers.length; i++){
       if(window.dancers[i].constructor==newDancer){
         window.dancers[i].top = 600; 
         window.dancers[i].setPosition(this.top, this.left)
       } 
     }

});


$("body").on("click", '.squareDancer', function(event){
     //$(this).css("background-size", "1120px");
    var topValue =$(this).position().top;
    var leftValue = $(this).position().left;
    var maxleft = $(this).position().left+250; //200     
    var minleft = $(this).position().left-150;  //0
    var maxtop = $(this).position().top+200;  //200
    var mintop = $(this).position().top-200;  //0

   // console.log(topValue, leftValue, maxleft,minleft,maxtop,mintop);
    console.log($(this));
    var arr = [];
    var move = function(x){
    // this.oldStep();
    // this.$node.toggle();
     $(x).addClass('animated infinite bounce');
    };

      /*for(var i=0; i<window.dancers.length; i++){
        var dancerValue = Math.floor(window.dancers[i].left);
        var thisValue = Math.floor($(this).position().left);
        console.log("dancerValue: ", dancerValue);
        console.log("thisValue: ", thisValue);
        if(dancerValue === thisValue){
          window.dancers.splice(window.dancers.length[i], 1);
        } 
      }*/

    //pushes all the dancesr within the radius into arr
    for(var i =0; i<window.dancers.length; i++){

      var dancerLeft=dancers[i].$node.position().left;
      var dancerTop = dancers[i].$node.position().top;
      var thisLeft = $(this).position().left-5;
      var thisLeft2 = $(this).position().left+5;
      var thisTop = $(this).position().top-5;
      var thisTop2 = $(this).position().top+5;


      if( dancerLeft <= maxleft && dancerLeft >= minleft &&
          dancerTop <= maxtop && dancerTop >= mintop &&
          dancerLeft<thisLeft  ){
          //$(this).addClass('animated infinite bounce');
        //console.log(dancers[i].left);
        
        //move(dancers[i].$node);
         // dancers[i].move();

          arr.push(dancers[i]);
      }
    }
    console.log(arr);
    for(var i=0; i<arr.length; i++){      
        move(arr[i].$node); 
    }
    if(arr.length>1){
      move(this);
    }


});



$("body").on("mouseover", ".newDancer",function(){
    $(this).css("background-image", "url(\"src/minions/danceTogether.png\")");
});

$("body").on("mouseover", ".extraDancer",function(){
    var remove = function(x){
    // this.oldStep();
    // this.$node.toggle();
    $(x).removeClass('animated infinite bounceInRight');
    };
    remove(this)
    
    
});



});










