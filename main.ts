namespace SpriteKind {
    export const mouse = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    turn = !(turn)
})
sprites.onOverlap(SpriteKind.mouse, SpriteKind.Player, function (sprite, otherSprite) {
    movePiece(otherSprite, turn)
})
function createArray () {
    spriteX81 = [
    8,
    8,
    8,
    8,
    23,
    23,
    23,
    23,
    38,
    38,
    38,
    38,
    83,
    83,
    83,
    83,
    98,
    98,
    98,
    98,
    113,
    113,
    113,
    113
    ]
    spriteY92 = [
    8,
    38,
    68,
    98,
    23,
    53,
    83,
    113,
    8,
    38,
    68,
    98,
    23,
    53,
    83,
    113,
    8,
    38,
    68,
    98,
    23,
    53,
    83,
    113
    ]
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (Black_turn == true) {
        sprites.destroy(otherSprite)
    }
})
browserEvents.onMouseMove(function (x, y) {
    pointer.setPosition(x, y)
})
function movePiece (piece: Sprite, redTurn: boolean) {
    if (browserEvents.MouseLeft.isPressed() && redTurn) {
        pause(500)
        pauseUntil(() => browserEvents.MouseLeft.isPressed() || browserEvents.Enter.isPressed())
        if (browserEvents.MouseLeft.isPressed()) {
            easing.blockEaseTo(piece, pointer.x - pointer.x % 15 + 8, pointer.y - pointer.y % 15 + 8, 500, easing.Mode.Linear)
            pause(500)
        }
    }
    if (turn) {
        miniPiece32.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        miniPiece32.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
sprites.onOverlap(SpriteKind.mouse, SpriteKind.Enemy, function (sprite, otherSprite) {
    movePiece(otherSprite, !(turn))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Black_turn == false) {
        sprites.destroy(otherSprite)
    }
})
let Black_turn = false
let turn = false
let pointer: Sprite = null
let red: Sprite = null
let spriteY92: number[] = []
let spriteX81: number[] = []
let black: Sprite = null
let miniPiece32: Sprite = null
let index = 0
scene.setBackgroundImage(img`
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffff222222222222222fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
miniPiece32 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
miniPiece32.setPosition(155, 11)
let turnFlag = textsprite.create("Turn:")
turnFlag.setOutline(1, 15)
turnFlag.setPosition(136, 10)
createArray()
for (let index2 = 0; index2 <= 23; index2++) {
    if (index2 <= 11) {
        black = sprites.create(img`
            . . . . 6 6 6 6 6 6 6 . . . . 
            . . 6 6 5 5 5 5 5 5 5 6 6 . . 
            . 6 5 5 5 5 5 5 5 5 5 5 5 6 . 
            . 6 5 5 5 5 5 5 5 5 5 5 5 6 . 
            6 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
            6 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
            6 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
            6 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
            6 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
            6 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
            6 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
            . 6 5 5 5 5 5 5 5 5 5 5 5 6 . 
            . 6 5 5 5 5 5 5 5 5 5 5 5 6 . 
            . . 6 6 5 5 5 5 5 5 5 6 6 . . 
            . . . . 6 6 6 6 6 6 6 . . . . 
            `, SpriteKind.Enemy)
        black.setPosition(spriteX81[index2], spriteY92[index2])
    } else {
        red = sprites.create(img`
            . . . . 3 3 3 3 3 3 3 . . . . 
            . . 3 3 4 4 4 4 4 4 4 3 3 . . 
            . 3 4 4 4 4 4 4 4 4 4 4 4 3 . 
            . 3 4 4 4 4 4 4 4 4 4 4 4 3 . 
            3 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
            3 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
            3 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
            3 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
            3 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
            3 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
            3 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
            . 3 4 4 4 4 4 4 4 4 4 4 4 3 . 
            . 3 4 4 4 4 4 4 4 4 4 4 4 3 . 
            . . 3 3 4 4 4 4 4 4 4 3 3 . . 
            . . . . 3 3 3 3 3 3 3 . . . . 
            `, SpriteKind.Player)
        red.setPosition(spriteX81[index2], spriteY92[index2])
    }
}
pointer = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.mouse)
