describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer =  new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

});


describe("squareDancer", function() {

  var x;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    x =  new squareDancer(10, 20, timeBetweenSteps);
  });


  it("should have constructor squareDancer", function(){
    //sinon.spy(squareDancer.$node, 'top');
    //blinkyDancer.step();
    expect(x.constructor).to.be.equal(squareDancer);
  });
  describe("squreDance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(x, "step");
      expect(x.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(x.step.callCount).to.be.equal(1);

    });
  });
});


describe("extraDancer", function() {

  var y;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    y =  new extraDancer(10, 20, timeBetweenSteps);
  });


  it("should have constructor squareDancer", function(){
    //sinon.spy(squareDancer.$node, 'top');
    //blinkyDancer.step();
    expect(y.constructor).to.be.equal(extraDancer);
  });
  describe("squreDance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(y, "step");
      expect(y.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(y.step.callCount).to.be.equal(1);

    });
  });
});