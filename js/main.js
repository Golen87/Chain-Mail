var Main = Main || {};

var SCREEN_WIDTH = 64*14;
var SCREEN_HEIGHT = 64*10;
Main.game = new Phaser.Game( SCREEN_WIDTH, SCREEN_HEIGHT, Phaser.CANVAS );

Main.game.state.add( 'Boot', Main.Boot );
Main.game.state.add( 'Preload', Main.Preload );
Main.game.state.add( 'MainMenu', Main.MainMenu );
Main.game.state.add( 'Game', Main.Game );
Main.game.state.add( 'Credits', Main.Credits );

Main.game.state.start( 'Boot' );

Main.debug = false;

var RED = 'rgba(255,0,0,0.4)';
var YELLOW = 'rgba(255,255,0,0.4)';
var GREEN = 'rgba(0,255,0,0.4)';
var CYAN = 'rgba(0,255,255,0.4)';
var BLUE = 'rgba(0,0,255,0.4)';
var PURPLE = 'rgba(255,0,255,0.4)';