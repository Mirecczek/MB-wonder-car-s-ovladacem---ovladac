GHBit.onKey(GHBit.enButton.B3, function () {
    radio.sendString("BLUE")
    basic.showString("B")
})
GHBit.onKey(GHBit.enButton.B1, function () {
    radio.sendString("RED")
    basic.showString("R")
})
GHBit.onKey(GHBit.enButton.B4, function () {
    radio.sendString("YELLOW")
    basic.showString("Y")
})
GHBit.onKey(GHBit.enButton.B2, function () {
    radio.sendString("GREEN")
    basic.showString("G")
})
basic.showLeds(`
    . . . . .
    . . # # #
    . # # # #
    # # # # #
    . # . . #
    `)
radio.setGroup(15)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("UP")
        basic.showArrow(ArrowNames.North)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("DOWN")
        basic.showArrow(ArrowNames.South)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("LEFT")
        basic.showArrow(ArrowNames.West)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("RIGHT")
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("0")
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendString("PRESS")
    } else {
    	
    }
})
