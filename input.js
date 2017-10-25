var wpi = require('wiring-pi');
wpi.setup('phys');
var pin = 7;
wpi.pinMode(pin, wpi.INPUT);
wpi.pullUpDnControl(pin, wpi.PUD_UP);

function read() {
	var value = wpi.digitalRead(pin);
	console.log(value);
	}

wpi.wiringPiISR(pin, wpi.INT_EDGE_BOTH, read);
