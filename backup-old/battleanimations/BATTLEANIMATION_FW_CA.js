var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 10;
    };
    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        sprite.loadSpriteV2("FW_CA+mask", GameEnums.Recoloring_Matrix, BATTLEANIMATION_FW_CA.getMaxUnitCount(), Qt.point(10, 10));
        sprite.loadSpriteV2("FW_CA", GameEnums.Recoloring_None, BATTLEANIMATION_FW_CA.getMaxUnitCount(), Qt.point(10, 10));
        BATTLEANIMATION_FW_CA.getMaxUnitCount(), Qt.point(0, 10);

    };
};

Constructor.prototype = BATTLEANIMATION;
var BATTLEANIMATION_FW_CA = new Constructor();
