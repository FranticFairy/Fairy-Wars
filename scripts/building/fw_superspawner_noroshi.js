var Constructor = function()
{
    this.getBuildingGroup = function()
    {
        return 3;
    };
    this.init = function (building)
    {
        building.setHp(100);
        building.setAlwaysVisble(true);
    };
    
    this.loadSprites = function(building, neutral, map)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            building.loadSprite("fw_superspawner_noroshi", false);
            building.loadSpriteV2("fw_superspawner_noroshi+mask", GameEnums.Recoloring_Matrix);
        }
        else
        {
            building.loadSprite("fw_superspawner_noroshi+neutral", false);
        }
    };
    this.getBaseIncome = function()
    {
        return 0;
    };
    this.getDefense = function(building)
    {
        return 0;
    };
    this.startOfTurn = function(building, map)
    {
        ACTION_SUPERUNIT_HANDLER.spawnSuperUnit(map,"NOROSHI",building);
    };
    this.getName = function()
    {
        return qsTr("NOROSHI Experimental Supertank");
    };
    this.getActionTargetOffset = function(building)
    {
        // offset for large buildings since there reference point is bound to the lower right corner.
        return Qt.point(-1, -1);
    };
    this.getBuildingWidth = function()
    {
        // one field width default for most buildings
        return 3;
    };
    this.getBuildingHeigth = function()
    {
        // one field heigth default for most buildings
        return 3;
    };
    this.canBuildingBePlaced = function(terrain, building, map)
    {
        return BUILDING.canLargeBuildingPlaced(terrain, building, ZBLACKHOLE_CANNON_S.getBuildingWidth(), ZBLACKHOLE_CANNON_S.getBuildingHeigth(), map);
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_blackholebuilding";
    };
    this.getIsAttackable = function(building, x, y)
    {
        var buildX = building.getX();
        var buildY = building.getY();
        if (y === buildY && buildX - 1 === x)
        {
            return true;
        }
        return false;
    };
    this.onDestroyed = function(building, map)
    {
        // called when the terrain is destroyed and replacing of this terrain starts
    };
    this.getDamage = function(building, unit)
    {
        return 5;
    };
    this.getBuildingTargets = function()
    {
        return GameEnums.BuildingTarget_Enemy;
    };
    this.getShotAnimation = function(building, map)
    {
        var animation = GameAnimationFactory.createAnimation(map, building.getX(), building.getY(), 70);
        animation.addSprite("blackhole_shot_south", -map.getImageSize() * 2.0, -map.getImageSize() * 2.0, 0, 2);
        animation.setSound("blackcanon_shot.wav");
        return animation;
    };

    this.getDescription = function()
    {
        return qsTr("Spawns a NOROSHI at the target location.");
    };
}

Constructor.prototype = BUILDING;
var FW_SUPERSPAWNER_NOROSHI = new Constructor();
