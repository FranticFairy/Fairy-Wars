FOREST.loadOverlaySprite = function(terrain)
{
	// Check every side.
	var surroundings = terrain.getSurroundings("FOREST", false, false, GameEnums.Directions_Direct, false);
	// Load overlay south east, strict.
	if (surroundings.includes("+S") && surroundings.includes("+E"))
	{
		var surroundingsSE = terrain.getSurroundings("FOREST", false, false, GameEnums.Directions_SouthEast, false);
		if (surroundingsSE !== "")
		{
			terrain.loadOverlaySprite("forest+SE");
		}
	}
	// Load overlay north east, strict.
	if (surroundings.includes("+N") && surroundings.includes("+E"))
	{
		var surroundingsNE = terrain.getSurroundings("FOREST", false, false, GameEnums.Directions_NorthEast, false);
		if (surroundingsNE !== "")
		{
			terrain.loadOverlaySprite("forest+NE");
		}
	}
	// Load overlay south west, strict.
	if (surroundings.includes("+S") && surroundings.includes("+W"))
	{
		var surroundingsSW = terrain.getSurroundings("FOREST", false, false, GameEnums.Directions_SouthWest, false);
		if (surroundingsSW !== "")
		{
			terrain.loadOverlaySprite("forest+SW");
		}
	}
	// Load overlay northwest, strict.
	if (surroundings.includes("+N") && surroundings.includes("+W"))
	{
		var surroundingsNW = terrain.getSurroundings("FOREST", false, false, GameEnums.Directions_NorthWest, false);
		if (surroundingsNW !== "")
		{
			terrain.loadOverlaySprite("forest+NW");
		}
	}
};