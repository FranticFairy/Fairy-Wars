PLAYER.defaultColors = [
["#f00008", "#F05038", "os", "orange_star",], // os
["#0098f8", "#6058F0", "bm", "blue_moon",], // bm
["#00c010", "#60E058", "ge", "green_earth",], // ge
["#d08000", "#D8D008", "yc", "yellow_comet",], // yc
["#6038a0", "#6038A0", "bh", "black_hole",], // bh
["#5c5663", "#586070", "bg", "bolt_guard",], // bg
["#797b78", "#404040", "ma", "metal_army",], // ma
["#e88613", "#FC8800", "ac", "amber_corona",], // ac
["#bc8248", "#603C08", "bd", "brown_desert",], // bd
["#bf901c", "#D39C36", "gs", "golden_sun",], // gs
["#ff33cc", "#FF33CC", "pf", "pink_frontier",], // pf
["#17a195", "#17A195", "ti", "teal_isle",], // ti
["#800080", "#8C58B4", "dm", "dark_matter",], // dm
["#c4443d", "#943142", "",   "red_fire",], // red_fire
["#ff0000", "#C40000", "",   "red",], // red
["#2342ba", "#0034A0", "",   "cobalt_ice",], // cobalt_ice
["#01cbff", "#58A8F0", "",   "cyan",], // cyan
["#006400", "#205004", "",   "dark_green",], // dark_green
["#617c0e", "#949444", "",   "olive",], // olive
["#6b01db", "#A48CB8", "",   "purple",], // purple
["#a29db9", "#E4CCA0", "",   "light_grey",], // light_grey
["#85927b", "#85927B", "",   "silver",], // silver
["#aa003f", "#FC3C00", "",   "cherrystone",], // cherrystone
["#366eca", "#6484A8", "",   "felheim",], // felheim
["#77aa08", "#617C0E", "",   "gloomwood",], // gloomwood
["#d39c36", "#FCC400", "",   "heavensong",], // heavensong
["#8227b4", "#A58C31", "",   "requiem",], // requiem
["#20918b", "#4C7458", "",   "aurania",], // aurania
["#bd00a4", "#474370", "",   "cacophony",], // cacophany
["#cd4c18", "#CC8060", "",   "silmor",], // silmor
["#46324c", "#8F541A", "",   "fumomance",], // fumomance
["#FF66CC", "#FF66CC", "",   "fairy_alliance",], // fairy_alliance
["#908890", "#908890", "",   "neutral"], // neutral
];

PLAYER.startOfTurn = function(player, map)
{
    if(player.getCO(0) === null) {
        player.setCO("CO_EMPTY_OS",0)
    }
};

PLAYER.armies.push("FA");
PLAYER.armyNames.push("Fairy Alliance");