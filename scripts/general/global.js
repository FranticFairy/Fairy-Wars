Global.getValidDirectionsFromTarget = function (currentTerrain,terrain) {
    if(Global.getIsAdjacentFai(currentTerrain.getX(),currentTerrain.getY(),terrain.getX(),terrain.getY())) {
        var sprite = terrain.getTerrainSpriteName();
        if(sprite.includes("+NE")) {
            sprite = sprite.replace("+NE", "");
        }
        if(sprite.includes("+SE")) {
            sprite = sprite.replace("+SE", "");
        }
        if(sprite.includes("+SW")) {
            sprite = sprite.replace("+SW", "");
        }
        if(sprite.includes("+NW")) {
            sprite = sprite.replace("+NW", "");
        }
        var curX = currentTerrain.getX();
        var curY = currentTerrain.getY();
        var terX = terrain.getX();
        var terY = terrain.getY();

        var valid = 0;

        if ((curX === terX) && (curY - 1 === terY) && sprite.includes("+S")) {
            //We are to the South, check if +S exists
            valid = 1;
        }

        if ((curX === terX) && (curY + 1 === terY) && sprite.includes("+N")) {
            //We are to the North, check if +N exists
            valid = 1;
        }

        if ((curY === terY) && (curX - 1 === terX) && sprite.includes("+E")) {
            //We are to the East, check if +E exists
            valid = 1;
        }

        if ((curY === terY) && (curX + 1 === terX) && sprite.includes("+W")) {
            //We are to the West, check if +W exists
            valid = 1;
        }

        if(valid === 0) {
            return false;
        }
        return true;
    }
}

Global.getValidDirectionsFromHere = function(currentTerrain,terrain) {
    if(Global.getIsAdjacentFai(currentTerrain.getX(),currentTerrain.getY(),terrain.getX(),terrain.getY())) {
        var sprite = currentTerrain.getTerrainSpriteName();
        if(sprite.includes("+NE")) {
            sprite = sprite.replace("+NE", "");
        }
        if(sprite.includes("+SE")) {
            sprite = sprite.replace("+SE", "");
        }
        if(sprite.includes("+SW")) {
            sprite = sprite.replace("+SW", "");
        }
        if(sprite.includes("+NW")) {
            sprite = sprite.replace("+NW", "");
        }
        var curX = currentTerrain.getX();
        var curY = currentTerrain.getY();
        var terX = terrain.getX();
        var terY = terrain.getY();

        var valid = 0;

        if ((curX === terX) && (curY - 1 === terY) && sprite.includes("+N")) {
            //We are to the North, check if +N exists
            valid = 1;
        }

        if ((curX === terX) && (curY + 1 === terY) && sprite.includes("+S")) {
            //We are to the South, check if +S exists
            valid = 1;
        }

        if ((curY === terY) && (curX - 1 === terX) && sprite.includes("+W")) {
            //We are to the West, check if +W exists
            valid = 1;
        }

        if ((curY === terY) && (curX + 1 === terX) && sprite.includes("+E")) {
            //We are to the East, check if +E exists
            valid = 1;
        }

        if(valid === 0) {
            return false;
        }
        return true;
    }
}

Global.getIsAdjacentFai = function(fX,fY,tX,tY) {

    if(fX === tX && (fY -1 === tY || fY +1 === tY)) {
        return true;
    }
    if(fY === tY && (fX -1 === tX || fX +1 === tX)) {
        return true;
    }
    return false;
}