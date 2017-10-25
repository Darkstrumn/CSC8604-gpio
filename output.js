var wpi = require('wiring-pi');
wpi.setup('phys');
var pin = 13;
wpi.pinMode(pin, wpi.OUTPUT);

var value = 0;
function toggle(){
	if (value==0){
		value = 1;
	} else {
		value = 0;
	}
	wpi.digitalWrite(pin, value);
}

setInterval(toggle, 500);
