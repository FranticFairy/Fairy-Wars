var Constructor = function()
{

    this.getVisionrangeModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getUnitType() === GameEnums.UnitType_Heli) {
				return 1;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the vision of Helicopters by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_heli+vis";
    };
    this.getName = function()
    {
        return qsTr("Helicopters Vision+");
    };
    this.getGroup = function()
    {
        return qsTr("Air");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_HELI_VIS = new Constructor();
