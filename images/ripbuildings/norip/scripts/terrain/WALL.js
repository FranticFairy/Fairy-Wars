WALL.loadBaseSprite = function(terrain)
{
	var surroundings = terrain.getSurroundings("WALL,ZGATE_E_W,ZGATE_N_S,WEAK_WALL", false, false, GameEnums.Directions_Direct, true, true);
	if (surroundings === "")
	{
		terrain.loadBaseSprite("wall");
	}
	else
	{
		terrain.loadBaseSprite("wall" + surroundings);
	}
};