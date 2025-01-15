DESERT_FOREST.loadOverlaySprite = function(terrain)
{
	// Check every side.
	var surroundings = terrain.getSurroundings("DESERT_FOREST", false, false, GameEnums.Directions_Direct, false);
	// Load overlay south east, strict.
	if (surroundings.includes("+S") && surroundings.includes("+E"))
	{
		var surroundingsSE = terrain.getSurroundings("DESERT_FOREST", false, false, GameEnums.Directions_SouthEast, false);
		if (surroundingsSE !== "")
		{
			terrain.loadOverlaySprite("desert_forest+SE");
		}
	}
	// Load overlay north east, strict.
	if (surroundings.includes("+N") && surroundings.includes("+E"))
	{
		var surroundingsNE = terrain.getSurroundings("DESERT_FOREST", false, false, GameEnums.Directions_NorthEast, false);
		if (surroundingsNE !== "")
		{
			terrain.loadOverlaySprite("desert_forest+NE");
		}
	}
	// Load overlay south west, strict.
	if (surroundings.includes("+S") && surroundings.includes("+W"))
	{
		var surroundingsSW = terrain.getSurroundings("DESERT_FOREST", false, false, GameEnums.Directions_SouthWest, false);
		if (surroundingsSW !== "")
		{
			terrain.loadOverlaySprite("desert_forest+SW");
		}
	}
	// Load overlay northwest, strict.
	if (surroundings.includes("+N") && surroundings.includes("+W"))
	{
		var surroundingsNW = terrain.getSurroundings("DESERT_FOREST", false, false, GameEnums.Directions_NorthWest, false);
		if (surroundingsNW !== "")
		{
			terrain.loadOverlaySprite("desert_forest+NW");
		}
	}
};