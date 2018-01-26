var Main = Main || {};

Main.Preload = function() {};

// Preload loads all game assets. If there are a lot, it is a perfect time to show a loading bar, which is loaded in Boot.

Main.Preload.prototype = {
	preload: function () {
		this.game.stage.backgroundColor = '#00ff00';
		this.game.load.image('chicken', 'assets/chicken.jpg');
	},
	create: function () {
		this.state.start( 'MainMenu' );
	}
};
