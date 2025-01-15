//Just one connection
FOG.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("fog");
};
FOG.loadOverlaySprite = function(terrain, map)
{
};
FOG.canBePlaced = function (x, y, map) {
    return true;
};
FOG.getTerrainSprites = function()
{
    return ["fog"];
};

var FOGInit = FOG.init;

FOG.init = function (terrain) {
    if (FOGInit) {
        FOGInit(terrain);
    }
    terrain.setSupportPalette(false);
};

FOG.getShowInEditor = function() {
    return false;
};