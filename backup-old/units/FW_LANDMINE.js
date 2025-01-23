var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setAmmo1(1);
        unit.setMaxAmmo1(1);
        unit.setWeapon1ID("FW_WEP_LANDMINE");

        unit.setAmmo2(0);
        unit.setMaxAmmo2(0);
        unit.setWeapon2ID("");

        unit.setFuel(0);
        unit.setMaxFuel(0);
        unit.setBaseMovementPoints(0);
        unit.setMinRange(0);
        unit.setMaxRange(0);
        unit.setVision(1);
		
		unit.setHidden(true);
    };
    
    this.getMovementType = function()
    {
        return "MOVE_LANDMINE";
    };

    this.getBaseCost = function()
    {
        return 1000;
    };

    this.getName = function()
    {
        return qsTr("Landmine");
    };
    this.createExplosionAnimation = function(x, y, unit, map)
    {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion.wav");
        return animation;
    };
    this.getLoadingPlace = function()
    {
        return 0;
    };
    
    this.actionList = ["ACTION_WAIT"];
    
    this.getDescription = function()
    {
        return qsTr("Land Mine. Explodes when trapping a non-air unit and dealing 5 damage to the trapped unit.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getShowInEditor = function() {
        return true;
    }

}

Constructor.prototype = UNIT;
var FW_LANDMINE = new Constructor();
