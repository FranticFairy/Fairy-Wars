var Constructor = function () {
    this.init = function (co, map) {
        co.setPowerStars(3);
        co.setSuperpowerStars(4);

        var variables = co.getVariables();
        var combatCounterVar = variables.createVariable("combatCounter");
        var combatCounter = combatCounterVar.readDataInt32();
        combatCounterVar.writeDataInt32(0);
    };

    this.loadCOMusic = function (co, map) {
        if (CO.isActive(co)) {
            switch (co.getPowerMode()) {
                case GameEnums.PowerMode_Power:
                    audio.addMusic("resources/music/cos/bh_power.mp3", 1091, 49930);
                    break;
                case GameEnums.PowerMode_Superpower:
                    audio.addMusic("resources/music/cos/bh_superpower.mp3", 3161, 37731);
                    break;
                case GameEnums.PowerMode_Tagpower:
                    audio.addMusic("resources/music/cos/bh_tagpower.mp3", 779, 51141);
                    break;
                default:
                    audio.addMusic("resources/music/cos/lash.mp3", 8885, 58311);
                    break;
            }
        }
    };

    this.activatePower = function (co, map) {
        var dialogAnimation = co.createPowerSentence();
        var powerNameAnimation = co.createPowerScreen(GameEnums.PowerMode_Power);
        dialogAnimation.queueAnimation(powerNameAnimation);

        var units = co.getOwner().getUnits();
        var animations = [];
        var counter = 0;
        units.randomize();
        for (var i = 0; i < units.size(); i++) {
            var unit = units.at(i);
            var animation = GameAnimationFactory.createAnimation(map, unit.getX(), unit.getY());
            var delay = globals.randInt(135, 265);
            if (animations.length < 5) {
                delay *= i;
            }
            animation.setSound("power11.wav", 1, delay);
            if (animations.length < 5) {
                animation.addSprite("power11", -map.getImageSize() * 1.27, -map.getImageSize() * 1.27, 0, 2, delay);
                powerNameAnimation.queueAnimation(animation);
                animations.push(animation);
            }
            else {
                animation.addSprite("power11", -map.getImageSize() * 1.27, -map.getImageSize() * 1.27, 0, 2, delay);
                animations[counter].queueAnimation(animation);
                animations[counter] = animation;
                counter++;
                if (counter >= animations.length) {
                    counter = 0;
                }
            }
        }
    };

    this.activateSuperpower = function (co, powerMode, map) {
        var dialogAnimation = co.createPowerSentence();
        var powerNameAnimation = co.createPowerScreen(powerMode);
        powerNameAnimation.queueAnimationBefore(dialogAnimation);

        var units = co.getOwner().getUnits();
        var animations = [];
        var counter = 0;
        units.randomize();
        for (var i = 0; i < units.size(); i++) {
            var unit = units.at(i);
            var animation = GameAnimationFactory.createAnimation(map, unit.getX(), unit.getY());
            var delay = globals.randInt(135, 265);
            if (animations.length < 7) {
                delay *= i;
            }
            if (i % 2 === 0) {
                animation.setSound("power12_1.wav", 1, delay);
            }
            else {
                animation.setSound("power12_2.wav", 1, delay);
            }
            if (animations.length < 7) {
                animation.addSprite("power12", -map.getImageSize() * 2, -map.getImageSize() * 2, 0, 2, delay);
                powerNameAnimation.queueAnimation(animation);
                animations.push(animation);
            }
            else {
                animation.addSprite("power12", -map.getImageSize() * 2, -map.getImageSize() * 2, 0, 2, delay);
                animations[counter].queueAnimation(animation);
                animations[counter] = animation;
                counter++;
                if (counter >= animations.length) {
                    counter = 0;
                }
            }
        }
    };

    this.getCOUnitRange = function (co, map) {
        return 2;
    };
    this.getCOArmy = function () {
        return "BH";
    };

    this.startOfTurn = function (co) {

    }

    this.postBattleActions = function (co, attacker, atkDamage, defender, gotAttacked, weapon, action, map) {
        if (CO.isActive(co)) {
            var variables = co.getVariables();
            if (!gotAttacked) {
                if (attacker.getOwner() === co.getOwner()) {
                    var attackCounterVar = variables.createVariable("attackCounter");
                    var attackCounter = attackCounterVar.readDataInt32();
                    attackCounterVar.writeDataInt32((attackCounter + 1));
                    var combatCounterVar = variables.createVariable("combatCounter");
                    var combatCounter = combatCounterVar.readDataInt32();
                    combatCounterVar.writeDataInt32((combatCounter + 1));
                }
            } else {
                if (defender.getOwner() === co.getOwner()) {
                    var defendCounterVar = variables.createVariable("defendCounter");
                    var defendCounter = defendCounterVar.readDataInt32();
                    defendCounterVar.writeDataInt32((defendCounter + 1));
                    var combatCounterVar = variables.createVariable("combatCounter");
                    var combatCounter = combatCounterVar.readDataInt32();
                    combatCounterVar.writeDataInt32((combatCounter + 1));
                }
            }
        }
    }

    this.endOfTurn = function (co) {

        var variables = co.getVariables();

        var combatCounterVar = variables.createVariable("combatCounter");
        var combatCounter = combatCounterVar.readDataInt32();

        var combatCounterPrevVar = variables.createVariable("combatCounterPrev");
        var combatCounterPrev = combatCounterPrevVar.readDataInt32();

        var attackCounterVar = variables.createVariable("attackCounter");
        var attackCounter = attackCounterVar.readDataInt32();

        var attackCounterPrevVar = variables.createVariable("attackCounterPrev");
        var attackCounterPrev = attackCounterPrevVar.readDataInt32();

        var defendCounterVar = variables.createVariable("defendCounter");
        var defendCounter = defendCounterVar.readDataInt32();

        var defendCounterPrevVar = variables.createVariable("defendCounterPrev");
        var defendCounterPrev = defendCounterPrevVar.readDataInt32();

        attackCounterPrevVar.writeDataInt32(attackCounter);
        combatCounterPrevVar.writeDataInt32(combatCounter);
        defendCounterPrevVar.writeDataInt32(defendCounter);

        attackCounterVar.writeDataInt32(0);
        combatCounterVar.writeDataInt32(0);
        defendCounterVar.writeDataInt32(0);
    }

    this.superPowerTerrainDefenseModifier = 1;
    this.powerOffBonus = 10;
    this.powerDefBonus = 10;

    this.powerMultiplier = 5;
    this.superPowerMultiplier = 10;

    this.d2dTerrainBonus = 10;

    this.d2dCoZoneTerrainBonus = 10;
    this.d2dCoZoneOffBonus = 10;
    this.d2dCoZoneDefBonus = 10;

    var debuffedUnits = ["FW_BB", "FW_BOMBER", "FW_HTANK", "FW_SHTANK", "FW_HVY_ARTILLERY", "FW_ROCKET", "FW_FIGHTER"];
    this.debuffDebuff = -20;

    var buffedUnits = ["FW_LTANK", "FW_IFV", "FW_ATTACKER", "FW_CL", "FW_DD", "FW_LHELI", "FW_ACAR"];
    this.buffBuff = 20;

    this.getOffensiveBonus = function (co, attacker, atkPosX, atkPosY,
        defender, defPosX, defPosY, isDefender, action, luckmode, map) {
        if (CO.isActive(co)) {

            var variables = co.getVariables();
    
            var combatCounterVar = variables.createVariable("combatCounter");
            var combatCounter = combatCounterVar.readDataInt32();
    
            var combatCounterPrevVar = variables.createVariable("combatCounterPrev");
            var combatCounterPrev = combatCounterPrevVar.readDataInt32();
    
            var attackCounterVar = variables.createVariable("attackCounter");
            var attackCounter = attackCounterVar.readDataInt32();
    
            var attackCounterPrevVar = variables.createVariable("attackCounterPrev");
            var attackCounterPrev = attackCounterPrevVar.readDataInt32();
    
            var defendCounterVar = variables.createVariable("defendCounter");
            var defendCounter = defendCounterVar.readDataInt32();
    
            var defendCounterPrevVar = variables.createVariable("defendCounterPrev");
            var defendCounterPrev = defendCounterPrevVar.readDataInt32();

            var combatCounterTotal = combatCounter + combatCounterPrev;

            switch (co.getPowerMode()) {
                case GameEnums.PowerMode_Tagpower:
                case GameEnums.PowerMode_Superpower:
                    return combatCounterTotal * CO_FAI_OLD.superPowerMultiplier;
                case GameEnums.PowerMode_Power:
                    return combatCounterTotal * CO_FAI_OLD.powerMultiplier;
                default:
                    if (debuffedUnits.includes(attacker.getUnitID())) {
                        return CO_FAI_OLD.debuffDebuff;
                    }
                    if (buffedUnits.includes(attacker.getUnitID())) {
                        return CO_FAI_OLD.buffBuff;
                    }
            }
        }
        return 0;
    };

    this.getDeffensiveBonus = function (co, attacker, atkPosX, atkPosY,
        defender, defPosX, defPosY, isAttacker, action, luckmode, map) {
        var buffAmount = 0;
        if (CO.isActive(co)) {
            if (co.getPowerMode() > GameEnums.PowerMode_Off) {
                buffAmount += CO_FAI_OLD.powerDefBonus;
            }
            if (buffedUnits.includes(defender.getUnitID())) {
                buffAmount += CO_FAI_OLD.powerDefBonus;
            }
        }
        return buffAmount;
    };

    this.getMovementcostModifier = function (co, unit, posX, posY, map) {
        if (CO.isActive(co)) {
            if (unit.getOwner() === co.getOwner()) {
                switch (co.getPowerMode()) {
                    case GameEnums.PowerMode_Tagpower:
                    case GameEnums.PowerMode_Superpower:
                        return -999;
                    case GameEnums.PowerMode_Power:
                    default:
                }
            }
        }
        return 0;
    };

    this.getCOUnits = function(co, building, map)
    {
        if (CO.isActive(co))
        {
            var buildingId = building.getBuildingID();
            if (buildingId === "FACTORY" ||
                    buildingId === "TOWN" ||
                    buildingId === "AMPHIBIOUSFACTORY" ||
                    buildingId === "DEPOT" ||
                    buildingId === "FORTHQ" ||
                    buildingId === "LABOR" ||
                    BUILDING.isHq(building))
            {
                return ["FW_IFV"];
            }
        }
    };
    this.getAiCoUnitBonus = function (co, unit, map) {
        return 1;
    };
    // CO - Intel
    this.getBio = function (co) {
        return qsTr("wa.");
    };
    this.getHits = function (co) {
        return qsTr("Chocolate, Cookies, Causing Trouble");
    };
    this.getMiss = function (co) {
        return qsTr("Suffering the consequences of her actions.");
    };
    this.getCODescription = function (co) {
        return qsTr("Good at mid-game combat with standard units.\nBonuses to light/medium armour and artillery, but penalties for expensive and slow units.\nCO Power increases in strength per battel fought over previous two turns.");
    };
    this.getLongCODescription = function (co, map) {
        var text = qsTr("\nSpecial Unit:\nIFV\n\nGlobal Effect: \nTBD.") +
            qsTr("\n\nCO Zone Effect: \nRin does not gain bonuses from CO Zone use.");
        return text;
    };
    this.getPowerDescription = function (co) {
        var variables = co.getVariables();
        var combatCounterVar = variables.createVariable("combatCounter");
        var combatCounter = combatCounterVar.readDataInt32();
    
        var combatCounterPrevVar = variables.createVariable("combatCounterPrev");
        var combatCounterPrev = combatCounterPrevVar.readDataInt32();

        var combatCounterTotal = combatCounter + combatCounterPrev;

        var text = qsTr("Fai gains a %0% firepower boost per combat she's been involved in over the last two turns, continuing to grow during power use, currently %1 fights for %2%.");
        text = replaceTextArgs(text, [CO_FAI_OLD.powerMultiplier, combatCounterTotal, (combatCounterTotal * CO_FAI_OLD.powerMultiplier)]);
        return text;
    };
    this.getPowerName = function (co) {
        return qsTr("Mass Combat");
    };
    this.getSuperPowerDescription = function (co) {
        var variables = co.getVariables();
        var combatCounterVar = variables.createVariable("combatCounter");
        var combatCounter = combatCounterVar.readDataInt32();
    
        var combatCounterPrevVar = variables.createVariable("combatCounterPrev");
        var combatCounterPrev = combatCounterPrevVar.readDataInt32();

        var combatCounterTotal = combatCounter + combatCounterPrev;

        var text = qsTr("Fai gains a %0% firepower boost per combat she's been involved in over the last two turns, continuing to grow during power use, currently %1 fights for %2%. Her movements are unhindered by terrain.");
        text = replaceTextArgs(text, [CO_FAI_OLD.superPowerMultiplier, combatCounterTotal, (combatCounterTotal * CO_FAI_OLD.superPowerMultiplier)]);
        return text;
    };
    this.getSuperPowerName = function (co) {
        return qsTr("Storm of Steel");
    };

    //Attacked more than got attacked, generally less common.
    var powerQuotes = [
    qsTr("Let's keep going! More violence!"),
    qsTr("Beating you while you're down is fun!"),
    qsTr("I think I've not hit you enough yet; let's ramp it up!"),
    qsTr("I'm having fun! Can you tell~!!!"),
    qsTr("*>:D's menacingly*"),
    qsTr("I am a magician! I can make YOU disappear!")];

    //Got attacked more than did attacks, generally more common.
    var powerQuotesDefensive = [
    qsTr("Oooo! I get to press the funny button now!"),
    qsTr("Ooo! I get to do cool things!"),
    qsTr("Let's see how you like this!"),
    qsTr("Time to make you suffer~!"),
    qsTr("*:D's menacingly*"),
    qsTr("I am a magician! I make things... disappear.")];

    //Attacked more than got attacked, generally less common. Superpower Variant
    var superPowerQuotes = [
    qsTr("COME ON, BREAK ALREADY!"),
    qsTr("HOW ARE YOU STILL ALIVE?!"),
    qsTr("EXPLOSIONS! MORE EXPLOSIONS!"),
    qsTr("I'M KICKING YOU WHILE YOU'RE DOWN. AND IT'S FUN!"),
    qsTr("*incomprehensible and worrying violence noises*"),
    qsTr("...you know I hope I won't need that thing I just blew up.")];

    //Got attacked more than did attacks, generally more common. Superpower Variant
    var superPowerQuotesDefensive = [
    qsTr("Yeah! Let's do this! Let's cause some property damage!"),
    qsTr("Time to leave this place a burning pile of wreckage!"),
    qsTr("Let's see how many things I can make go boom real fast!"),
    qsTr("hold on give me a sec i dropped my detonator"),
    qsTr("*:D's ominously*"),
    qsTr("And for my next magic trick, I will ruin literally everything.")];

    //Performing a tag power.
    var powerQuotesTag = [
    qsTr("Let's do this! You and I, together for violence!"),
    qsTr("It's always fun to have someone to play with!"),
    qsTr("Okay! As we rehearsed! Let's make 'em hurt!"),
    qsTr("They don't stand a chance against us two!"),
    qsTr("*:D's menacingly, with echo, somehow*"),
    qsTr("Let's show them some magic tricks!.")];

    this.getPowerSentences = function (co, map) {
        var variables = co.getVariables();
        var attackCounterVar = variables.createVariable("attackCounter");
        var attackCounter = attackCounterVar.readDataInt32();
        var defendCounterVar = variables.createVariable("defendCounter");
        var defendCounter = defendCounterVar.readDataInt32();
        var otherCO = "";
        switch (co.getPowerMode()) {
            case GameEnums.PowerMode_Tagpower:
                for(var i = 0; i < map.getCurrentPlayer().getCoCount(); i++) {
                    if(map.getCurrentPlayer().getCO(i).getCoID() != "CO_FAI_OLD") {
                        otherCO = map.getCurrentPlayer().getCO(i).getCoID();
                    }
                }
                return powerQuotesTag;
            case GameEnums.PowerMode_Superpower:
                if(defendCounter >= attackCounter) {
                    return superPowerQuotesDefensive;
                } else {
                    return superPowerQuotes;
                }
            case GameEnums.PowerMode_Power:
                if(defendCounter >= attackCounter) {
                    return powerQuotesDefensive;
                } else {
                    return powerQuotes;
                }
            default:
                return [qsTr("No sentence found...? I'll show you a sentence; DEATH!")];
        }
    };
    this.getVictorySentences = function (co) {
        return [qsTr(":>"),
        qsTr("That was fun! Let's go again!"),
        qsTr("More! More! More explosions!")];
    };
    this.getDefeatSentences = function (co) {
        return [qsTr("Iiiim... just gonna leave~!"),
        qsTr("Oh. Er. Hrm. That. Hm. I. Uh. Hrm. Uhm. Hm.")];
    };
    this.getName = function () {
        return qsTr("Faye");
    };
}

Constructor.prototype = CO;
var CO_FAI_OLD = new Constructor();
