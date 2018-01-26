
var Main = Main || {};

Main.Game = function()
{
};

Main.Game.prototype.create = function ()
{
	var graphics = Main.game.add.graphics(0, 0);

	if (graphics) {
		graphics.beginFill(0x0000FF, 1);
		graphics.drawCircle(300, 300, 100);
	}
};

Main.Game.prototype.preRender = function ()
{
};

Main.Game.prototype.update = function ()
{
};

Main.Game.prototype.render = function ()
{
};
