/////////////////////////////////////////////////////////////////////
///////////////Add Mustache Minion/////////////////////////////////
//////////////////////////////////////////////////////////////////// 

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  

  this.oldStep = this.step;
  this.step = function(){
    this.oldStep();
    this.$node.toggle();
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
    this.oldStep();
    this.$node.toggle();
  };
  this.setPosition(this.top, this.left)

};

squareDancer.prototype = Object.create(MakeDancer.prototype);
squareDancer.prototype.constructor = squareDancer;
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
    this.oldStep();
    this.$node.toggle();
  };
  this.setPosition(this.top, this.left)

};

extraDancer.prototype = Object.create(MakeDancer.prototype);

extraDancer.prototype.constructor = extraDancer;

