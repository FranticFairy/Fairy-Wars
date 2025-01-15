BEACH.loadOverlaySprite = function(terrain)
{
	var surroundings = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_Direct, false);
	// load overlay south east
	if (!surroundings.includes("+S") && !surroundings.includes("+E"))
	{
		var surroundingsSE = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_SouthEast, false);
		if (surroundingsSE !== "")
		{
			terrain.loadOverlaySprite("beach" + surroundingsSE);
		}
	}
	// load overlay north east
	if (!surroundings.includes("+N") && !surroundings.includes("+E"))
	{
		var surroundingsNE = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_NorthEast, false);
		if (surroundingsNE !== "")
		{
			terrain.loadOverlaySprite("beach" + surroundingsNE);
		}
	}
	// load overlay south west
	if (!surroundings.includes("+S") && !surroundings.includes("+W"))
	{
		var surroundingsSW = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_SouthWest, false);
		if (surroundingsSW !== "")
		{
			terrain.loadOverlaySprite("beach" + surroundingsSW);
		}
	}
	// load overlay north west
	if (!surroundings.includes("+N") && !surroundings.includes("+W"))
	{
		var surroundingsNW = terrain.getSurroundings("SEA", true, true, GameEnums.Directions_NorthWest, false);
		if (surroundingsNW !== "")
		{
			terrain.loadOverlaySprite("beach" + surroundingsNW);
		}
	}
};