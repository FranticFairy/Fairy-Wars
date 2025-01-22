var Constructor = function () {

    this.canBePerformed = function(action, map)
    {
        return true;
    };
    
    this.isFinalStep = function (action, map) {
        if (action.getInputStep() === 0) {
            return false;
        }
        else {
            return true;
        }
    };

    this.getStepInputType = function (action, map) {
        // supported types are MENU and FIELD
        if (action.getInputStep() === 0) {
            return "MENU";
        }
        return "";
    };

    this.getStepData = function (action, data, map) {
        var player = map.getCurrentPlayer();
        var co = player.getCO(0);
        var perks = co.getPerkList();
        
        var perkData = [];
        for (i = 0; i < perks.length; i++) {
            var forPerk = perks[i];
            var cost = Global[forPerk].getCosts();

            perkData.push([cost, perks[i]]);
        }
        for (i = 0; i < perkData.length; i++) {
            var name = Global[perkData[i][1]].getName();
            var icon = Global[perkData[i][1]].getIcon().toUpperCase();
            GameConsole.print(icon,1);
            /*
            GameConsole.print("i, 0tS: " + perkData[i][0].toString(),1);
            GameConsole.print("i, 1: " + perkData[i][1],1);
            GameConsole.print("i, 1: " + perkData[i][1],1);
            GameConsole.print("i, 0: " + perkData[i][0],1);
            //data.AddData(text, actionID, icon, costs, enabled)
            */
            data.addData(name + " " + perkData[i][0].toString(), perkData[i][1], "icon_fire", perkData[i][0]);
            //data.addData(name + " " + perkData[i][0].toString(), perkData[i][1], icon, perkData[i][0]);
        }
    };


    this.perform = function(action, map)
    {
        action.startReading();
        var player = map.getCurrentPlayer();
        var co = player.getCO(0);
        GameConsole.print("Perks!",1);
        GameConsole.print(co.getPerkList(),1);

        
    };
    this.getIcon = function (map) {
        return "build";
    };

    this.getActionText = function (map) {
        return qsTr("Get Perks");
    };

    this.getName = function () {
        return qsTr("Get Perks");
    };

    this.getDescription = function () {
        return qsTr("Get Perks.");
    };
}

Constructor.prototype = ACTION;
var ACTION_PERKLIST = new Constructor();
