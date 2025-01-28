var Constructor = function()
{
    this.canBePerformed = function(action, map)
    {
        return ACTION_BUILDSITE.canBePerformed(action, map)
    };
    this.getActionText = function(map)
    {
        return qsTr("Build");
    };
    this.getIcon = function(map)
    {
        return "build";
    };
    this.isFinalStep = function(action, map)
    {
        return ACTION_BUILDSITE.isFinalStep(action, map)
    };

    this.getStepInputType = function(action, map)
    {
        return ACTION_BUILDSITE.getStepInputType(action, map)
    };

    this.getStepData = function(action, data, map)
    {
        var building = action.getTargetBuilding();
        var types = ["FACTORY", "AIRPORT"];
        var names = ["Factory", "Airport"];
        if(ACTION_BUILDSITE.checkCoastal(building) === true) {
            types.push("HARBOUR");
            names.push("Harbour");
            types.push("AMPHIBIOUSFACTORY");
            names.push("Naval Factory");
        }
        var funds = map.getCurrentPlayer().getFunds();
        for (i = 0; i < types.length; i++) {
            var name = names[i];
            var costs = 7500;
            var enabled = false;
            if (costs <= funds) {
                enabled = true;
            }
            data.addData(name + " " + costs.toString(),types[i],types[i], costs, enabled);
        }
    };

    this.perform = function (action) {
        return ACTION_BUILDSITE.perform(action)
    };

    this.getName = function()
    {
        return qsTr("Upgrade Dreamscape");
    };
    this.getDescription = function()
    {
        return qsTr("Turn this dreamscape into a functional building.");
    };
}

Constructor.prototype = ACTION;
var ACTION_DREAMSCAPE = new Constructor();
