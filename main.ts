input.onButtonPressed(Button.A, function () {
    if (vaisseau_x > 0) {
        led.unplot(vaisseau_x, vaisseau_y)
        vaisseau_x += -1
        led.plot(vaisseau_x, vaisseau_y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (vaisseau_x < 4) {
        led.unplot(vaisseau_x, vaisseau_y)
        vaisseau_x += 1
        led.plot(vaisseau_x, vaisseau_y)
    }
})
let vaisseau_x = 0
let vaisseau_y = 0
let vaiseau = 1
let Fusée = 0
let Fusée_y = 0
let Fusée_x = randint(0, 4)
vaisseau_y = 4
vaisseau_x = 2
led.plot(vaisseau_x, vaisseau_y)
loops.everyInterval(200, function () {
    if (Fusée == 0) {
        Fusée = 1
        led.unplot(Fusée_x, Fusée_y)
        Fusée_y = 0
        Fusée_x = randint(0, 4)
        led.plot(Fusée_x, Fusée_y)
        if (vaiseau == 0) {
            vaiseau = 1
            led.plot(vaisseau_x, vaisseau_y)
        }
    } else {
        if (Fusée_y < 4) {
            led.unplot(Fusée_x, Fusée_y)
            Fusée_y += 1
            led.plot(Fusée_x, Fusée_y)
        } else {
            Fusée = 0
            if (Fusée_x == vaisseau_x) {
                music.playMelody("- C5 B - A G D E ", 120)
                vaisseau_x = 2
                vaiseau = 0
            }
        }
    }
})
