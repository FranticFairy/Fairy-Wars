var MapStart =
{
	gameStart: function(map)
    {
        if (map.getCurrentDay() < 2) {
            ACTION_HANDLER.replaceUnusedTerrains(map);
        }
    },
}