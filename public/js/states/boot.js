// class constructor
RenderShape.Boot = function () {

};

RenderShape.Boot.prototype.preload = function(){

};

RenderShape.Boot.prototype.create = function(){

  // switch to game state
  this.state.start(RenderShape.STATES.GAME);

};
