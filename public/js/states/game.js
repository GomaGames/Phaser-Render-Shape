// class constructor
RenderShape.Game = function () {

  this.shape;
  this.shape_props = {
    FILL_COLOR : 0x6595FF,
    LINE_COLOR : 0x65FA95,
    LINE_THICKNESS : 2,
    SIZE : 100
  };

};

RenderShape.Game.prototype.preload = function(){

};

RenderShape.Game.prototype.create = function(){

  this.shape = this.game.add.graphics((this.stage.width - this.shape_props.SIZE) / 2, (this.stage.height - this.shape_props.SIZE) / 2);

  // set a fill and line style
  this.shape.beginFill(this.shape_props.FILL_COLOR);
  this.shape.lineStyle(this.shape_props.LINE_THICKNESS, this.shape_props.LINE_COLOR, 1);
  this.shape.drawRect(0, 0, this.shape_props.SIZE, this.shape_props.SIZE);

};

RenderShape.Game.prototype.update = function(){

};

