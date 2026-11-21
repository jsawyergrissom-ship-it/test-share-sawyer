namespace SpriteKind {
    export const mouse = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.mouse, SpriteKind.Player, function (sprite, otherSprite) {
    if (browserEvents.MouseLeft.isPressed() && turn) {
        pause(500)
        browserEvents.MouseLeft.pauseUntil(browserEvents.MouseButtonEvent.Pressed)
        easing.blockEaseTo(otherSprite, pointer.x - pointer.x % 15 + 8, pointer.y - pointer.y % 15 + 8, 500, easing.Mode.Linear)
        pause(500)
        turn = !(turn)
    }
})
browserEvents.onMouseMove(function (x, y) {
    pointer.setPosition(x, y)
})
sprites.onOverlap(SpriteKind.mouse, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (browserEvents.MouseLeft.isPressed() && !(turn)) {
        pause(500)
        browserEvents.MouseLeft.pauseUntil(browserEvents.MouseButtonEvent.Pressed)
        easing.blockEaseTo(otherSprite, pointer.x - pointer.x % 15 + 8, pointer.y - pointer.y % 15 + 8, 500, easing.Mode.Linear)
        pause(500)
        turn = !(turn)
    }
})
let turn = false
let pointer: Sprite = null
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
let black = sprites.create(img`
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
black.setPosition(8, 8)
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
black.setPosition(8, 38)
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
    `, SpriteKind.mouse)
black.setPosition(8, 68)
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
black.setPosition(8, 98)
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
black.setPosition(23, 23)
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
black.setPosition(23, 53)
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
black.setPosition(23, 83)
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
black.setPosition(23, 113)
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
black.setPosition(38, 8)
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
black.setPosition(38, 38)
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
black.setPosition(38, 68)
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
black.setPosition(38, 98)
let red = sprites.create(img`
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
red.setPosition(83, 23)
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
red.setPosition(83, 53)
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
red.setPosition(83, 83)
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
red.setPosition(83, 113)
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
red.setPosition(98, 8)
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
red.setPosition(98, 38)
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
red.setPosition(98, 68)
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
red.setPosition(98, 98)
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
red.setPosition(113, 23)
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
red.setPosition(113, 53)
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
red.setPosition(113, 83)
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
red.setPosition(113, 113)
