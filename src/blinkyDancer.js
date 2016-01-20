/////////////////////////////////////////////////////////////////////
///////////////Add Mustache Minion/////////////////////////////////
//////////////////////////////////////////////////////////////////// 

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  

  this.oldStep = this.step;
  this.step = function(){
     this.oldStep();
     this.$node.toggle();
    //$('.dancer').addClass('animated infinite bounceInLeft');
  };


};

makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

/////////////////////////////////////////////////////////////////////
///////////////Add Dancing Guitarist/////////////////////////////////
////////////////////////////////////////////////////////////////////

var squareDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="squareDancer"></span>');
  this.oldStep = this.step;
  this.step = function(){
    // this.oldStep();
    // this.$node.toggle();
    // $('.squareDancer').addClass('animated infinite bounce');
  };
  
  /*this.move = function(){
    // this.oldStep();
    // this.$node.toggle();
     $('.squareDancer').addClass('animated infinite bounce');
  };*/
  this.setPosition(this.top, this.left)

};

squareDancer.prototype = Object.create(MakeDancer.prototype);
squareDancer.prototype.constructor = squareDancer;

/*squareDancer.prototype.together = function(){

    var maxleft = this.left+30;
    var minleft = this.left-30;
    var maxtop = this.top+30;
    var mintop = this.top-30;
    var arr = [];

    if( (dancers[i].left <= maxleft && dancers[i].left>= minleft) &&
          (dancers[i].top <= maxtop && dancers[i] >= mintop) ){
      $('.squareDancer').addClass('animated infinite bounce');
    }
}
        

    //pushes all the dancesr within the radius into arr
    /*for(var i =0; i<window.dancers.length; i++){
      if( (dancers[i].left <= maxleft && dancers[i].left>= minleft) &&
          (dancers[i].top <= maxtop && dancers[i] >= mintop) )
        arr.push(dancers[i]);
    }

    //iterate thorough arr and add a class to each dancer
    for(var i=0; i<arr.lenght; i++){
      arr[i]
    }*/


/*squareDancer.prototype.lineUp = function(){
  for(var i = 0; i < window.dancers.length; i++){
     if(window.dancers[i] === ){
      tis.setPosition(50, 100);
    }
  }
};*/

/////////////////////////////////////////////////////////////////////
///////////////Add Two Minions Dancing Together//////////////////////
////////////////////////////////////////////////////////////////////

var extraDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
 
  this.$node = $('<span class="extraDancer"></span>');
  this.oldStep = this.step;
  this.step = function(){
    // this.oldStep();
    // this.$node.toggle();
    $('.extraDancer').addClass('animated infinite bounceInRight');
  };
  this.setPosition(this.top, this.left)

};

extraDancer.prototype = Object.create(MakeDancer.prototype);

extraDancer.prototype.constructor = extraDancer;




/////////////////////////////////////////////////////////////////////
///////////////Add Two Minions Dancing Together//////////////////////
////////////////////////////////////////////////////////////////////

var newDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
 
  this.$node = $('<span class="newDancer"></span>');
  this.oldStep = this.step;
  this.step = function(){
    // this.oldStep();
    // this.$node.toggle();
    $('.newDancer').addClass('animated infinite slideInLeft');
  };
  this.setPosition(this.top, this.left)

};

newDancer.prototype = Object.create(MakeDancer.prototype);

newDancer.prototype.constructor = newDancer;
