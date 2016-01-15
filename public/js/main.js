window.RenderShape = {

  STAGE : {
    WIDTH : 800,
    HEIGHT : 600
  },

  STAGE_ID : "game",

  STATES : {
    BOOT : "Boot",
    GAME : "Game",
  }

};

window.onload = function(){
  RenderShape.game = new Phaser.Game(RenderShape.STAGE.WIDTH, RenderShape.STAGE.HEIGHT, Phaser.AUTO, RenderShape.STAGE_ID);
  RenderShape.game.state.add(RenderShape.STATES.BOOT, RenderShape.Boot);
  RenderShape.game.state.add(RenderShape.STATES.GAME, RenderShape.Game);
  RenderShape.game.state.start(RenderShape.STATES.BOOT);
};
