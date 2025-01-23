var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 10;
    };
    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        sprite.loadSpriteV2(UNIT.getSpriteReference(unit)+"+mask", GameEnums.Recoloring_Matrix, BATTLEANIMATION_FW_ACAR.getMaxUnitCount(), Qt.point(0, 0));
        sprite.loadSpriteV2(UNIT.getSpriteReference(unit), GameEnums.Recoloring_None, BATTLEANIMATION_FW_ACAR.getMaxUnitCount(), Qt.point(0, 0));
        BATTLEANIMATION_FW_ACAR.getMaxUnitCount(), Qt.point(0, 0);
    };
};

Constructor.prototype = BATTLEANIMATION;
var BATTLEANIMATION_FW_ACAR = new Constructor();
