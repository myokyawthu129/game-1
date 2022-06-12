// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000202020202020202020202020202020201010101010101010101010101010102010202020202020201020202010201020102010101010101010201020102010201030102020202020102010201010102010201010101010202020102010201020102010101010102010101020102020201020202020202020102010201020101010101010101010201020102010201020102020202020101010201020102010201010101010101020102010201010102010202020202010202020102010201020a0303030303030201020102010202020102010101010101010201020102050401020101010101010102010207020b0101020202020202020202010208060901`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
. 2 2 2 2 2 2 2 . 2 2 2 . 2 . 2 
. 2 . . . . . . . 2 . 2 . 2 . 2 
. . . 2 2 2 2 2 . 2 . 2 . . . 2 
. 2 . . . . . 2 2 2 . 2 . 2 . 2 
. 2 . . . . . 2 . . . 2 . 2 2 2 
. 2 2 2 2 2 2 2 . 2 . 2 . 2 . . 
. . . . . . . 2 . 2 . . . 2 . 2 
. 2 2 2 2 2 . . . . . 2 . 2 . 2 
. . . . . . . 2 . 2 . 2 . . . 2 
. 2 2 2 2 2 . 2 2 2 . 2 . 2 . 2 
. . . . . . . 2 . 2 . 2 . 2 2 2 
. 2 . . . . . . . 2 . 2 . 2 . . 
. 2 . . . . . . . 2 . 2 . 2 . . 
. 2 2 2 2 2 2 2 2 2 . 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.builtin.crowd0,sprites.builtin.crowd5,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.dungeon.stairEast,sprites.dungeon.purpleInnerNorthWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
