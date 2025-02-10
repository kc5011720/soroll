input.onButtonPressed(Button.A, function () {
    SOROLL = input.soundLevel()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(SOROLL)
})
let SOROLL = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
