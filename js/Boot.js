var Main = Main || {};

Main.Boot = function() {};

// Boot starts the system and may load preloader screen assets.

Main.Boot.prototype = {
	preload: function() {
	},
	create: function() {
		this.game.physics.startSystem( Phaser.Physics.ARCADE );
		this.state.start( 'Preload' );
	},
};
