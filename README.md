# Phaser Render Shape

Render a Shape

This project demonstrates one way to organize your game code in seperate state source files as javascript classes.
It loads the [`Boot`](/public/js/states/boot.js) state first, which would start to preload any of your assets before staring your game, then switches to the [`Game`](/public/js/states/game.js) state.

A great starting point for game projects and game jams.

See our other [Phaser Code Samples](https://github.com/GomaGames?query=Phaser)

See all of our [GameDev resources](http://gomagames.github.io/)

----


![shape](/doc/shape.png)


----

## To run this starter kit project

Git clone or download this project from github.

Phaser games are tested in the browser.

It's recommended to run a local web server when developing your game.

Make sure to point the *web root* at the `./public/` directory.

#### Starting a local web server

Change your current working directory to `./public/`.

Open a terminal and navigate to this project directory.

In the terminal, change directories into `./public/` and start the *http server* with *python*

```bash
cd public/

python -m SimpleHTTPServer
```

This will start web server listening on port *8000*

To test the project, open a good browser for development like Google Chrome, and navigate to [http://localhost:8000](http://localhost:8000)


More options for running your game projects locally with Phaser are detailed in the [Phaser Getting Started Guide](http://phaser.io/tutorials/getting-started/part2)

This demo includes the phaser game engine source files from cdnjs. [https://cdnjs.com/libraries/phaser](https://cdnjs.com/libraries/phaser)
