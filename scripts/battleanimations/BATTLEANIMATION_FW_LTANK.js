var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 5;
    };
    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        sprite.loadSpriteV2("FW_LTANK+mask", GameEnums.Recoloring_Matrix, BATTLEANIMATION_FW_LTANK.getMaxUnitCount(), Qt.point(10, 10));
        sprite.loadSpriteV2("FW_LTANK", GameEnums.Recoloring_None, BATTLEANIMATION_FW_LTANK.getMaxUnitCount(), Qt.point(10, 10));
        BATTLEANIMATION_FW_LTANK.getMaxUnitCount(), Qt.point(0, 10);

    };
};

Constructor.prototype = BATTLEANIMATION;
var BATTLEANIMATION_FW_LTANK = new Constructor();
