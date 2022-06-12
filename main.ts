scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleInnerNorthWest, function (sprite, location) {
    game.over(true, effects.hearts)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . 2 2 2 . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 . 2 2 2 . . . . . 
    . . . . 2 2 . . . . 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
info.startCountdown(10)
