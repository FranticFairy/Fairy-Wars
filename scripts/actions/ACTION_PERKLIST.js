var Constructor = function () {

    this.canBePerformed = function(action, map)
    {
        if(ACTION_PERKLIST.canPickPerks(action, map)) {
            return true;
        }
        return false;
    };

    var allPerks = ["CO_PERK_APCBOOST","CO_PERK_APC_GUARD","CO_PERK_BACKSTAB","CO_PERK_BANSHEE","CO_PERK_BRUISER_5","CO_PERK_BRUISER_8","CO_PERK_CLASSIC_APC","CO_PERK_CLIMBER","CO_PERK_COM_ATTACKER","CO_PERK_COM_DEFENDER","CO_PERK_CONQUERER","CO_PERK_COUNTRY_HICK","CO_PERK_CURSED","CO_PERK_DRUNK_DRIVER","CO_PERK_DUCT_TAPE","CO_PERK_EAGLEEYE","CO_PERK_ENFLAKENATOR","CO_PERK_FACESTAB","CO_PERK_FLAT_TIRES","CO_PERK_FLIMSY","CO_PERK_FROSTBITTEN","CO_PERK_GEAR_HEAD","CO_PERK_GLASS_EYES","CO_PERK_GLASS_JAW","CO_PERK_GOLD_RUSH","CO_PERK_HACHIS_SOUL","CO_PERK_HIGH_AND_DRY","CO_PERK_HIPPY","CO_PERK_ICEBREAKER","CO_PERK_INCOME_TAX","CO_PERK_INTEL_LEAK","CO_PERK_INVADER","CO_PERK_LEADER","CO_PERK_LIGHT_MIST","CO_PERK_LUCK_10","CO_PERK_LUCK_5","CO_PERK_MECHANIC","CO_PERK_MOUNTAINEER","CO_PERK_NO_PLAIN_FIGHTER","CO_PERK_NO_SHERPA","CO_PERK_NULL_LUCK","CO_PERK_PACIFIST","CO_PERK_PATHFINDER","CO_PERK_PLAIN_FIGHTER","CO_PERK_PRAIRIE_DOG","CO_PERK_RANGER","CO_PERK_REFILLER","CO_PERK_REPARATIONS","CO_PERK_ROADRAGE","CO_PERK_SALE_PRICE_5","CO_PERK_SALE_PRICE_8","CO_PERK_SANDY_EYES","CO_PERK_SAND_SCORPION","CO_PERK_SCOUT","CO_PERK_SEAMANSHIP","CO_PERK_SEASICK","CO_PERK_SEAWALKER","CO_PERK_SHARPSHOOTER_5","CO_PERK_SHARPSHOOTER_8","CO_PERK_SICKLY","CO_PERK_SIGNAL_LOSS","CO_PERK_SLAM_GUARD_12","CO_PERK_SLAM_GUARD_8","CO_PERK_SNEAKY","CO_PERK_SNIPE_GUARD_12","CO_PERK_SNIPE_GUARD_8","CO_PERK_SOFTIE","CO_PERK_SOPPING_WET","CO_PERK_STAR_DRAIN","CO_PERK_STAR_POWER","CO_PERK_STEALTHY","CO_PERK_STUMBLER","CO_PERK_SURRENDER","CO_PERK_TAX_HIKE","CO_PERK_UNDERPOWERED","CO_PERK_UNUSUAL_HAT","CO_PERK_URBAN_FIGHTER"]
    
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
