var Constructor = function () {

    this.canBePerformed = function(action, map)
    {
        if(ACTION_PERKLIST.canPickPerks(action, map)) {
            return true;
        }
        return false;
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

    this.canPickPerks = function (action, map) {
        var player = map.getCurrentPlayer();
        var co = player.getCO(0);
        var stars = co.getPowerFilled();
        var perks = co.getPerkList();
        var allPerks = ACTION_GETALL.getPerks();
        
        var perkData = [];
        for (i = 0; i < allPerks.length; i++) {
            var forPerk = allPerks[i];
            var selectable = Global[forPerk].isSelectable();
            var enabled = Global[forPerk].getPerkEnabled(co,map);
            var cost = Global[forPerk].getCosts();
            if(!perks.includes(forPerk) && selectable && enabled) {
                perkData.push([cost, allPerks[i]]);
            }

        }

        for (i = 0; i < perkData.length; i++) {
            if (perkData[i][0] <= stars && perkData[i][0] > 0) {
                return true;
            }
        }
        return false;
    };

    this.getStepData = function (action, data, map) {
        var player = map.getCurrentPlayer();
        var co = player.getCO(0);
        var stars = co.getPowerFilled();
        var perks = co.getPerkList();
        var allPerks = ACTION_GETALL.getPerks();
        
        var perkData = [];
        for (i = 0; i < allPerks.length; i++) {
            var forPerk = allPerks[i];
            var selectable = Global[forPerk].isSelectable();
            var enabled = Global[forPerk].getPerkEnabled(co,map);
            var cost = Global[forPerk].getCosts();
            if(cost >= 0 && cost <= stars && !perks.includes(forPerk) && selectable && enabled) {
                perkData.push([cost, allPerks[i]]);
            }

        }
        for (i = 0; i < perkData.length; i++) {
            var name = Global[perkData[i][1]].getName();
            var icon = Global[perkData[i][1]].getIcon();

            data.addData(name + " " + perkData[i][0].toString(), perkData[i][1], icon, perkData[i][0]);
        }
    };


    this.perform = function(action, map)
    {
        action.startReading();
        var player = map.getCurrentPlayer();
        var co = player.getCO(0)
        var costs = action.getCosts()
        co.addPerk(action.readDataString());
        co.addPowerFilled(-costs);
        
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
