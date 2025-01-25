var Constructor = function()
{

    this.getVisionrangeModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getUnitType() === GameEnums.UnitType_Vehicle_Medium) {
				return 1;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the vision of Medium Vehicles by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_mvhc+vis";
    };
    this.getName = function()
    {
        return qsTr("Medium Vehicles Vision+");
    };
    this.getGroup = function()
    {
        return qsTr("Ground");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_MVHC_VIS = new Constructor();
