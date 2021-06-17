function ElectricalDevice(power, material) {
    this.plug = false;
    this.power = power;
    this.material = material;
}

ElectricalDevice.prototype.plugIn = function() {
    this.plug = true;
}
ElectricalDevice.prototype.plugOut = function() {
    this.plug = false;
}

function Kettle(power, material, volume, color) {
    this.power = power;
    this.material = material;
    this.volume = volume;
    this.color = color;
}

Kettle.prototype = new ElectricalDevice();
Kettle.prototype.boil = function() {
    console.log('Boiling...');
}

function Lamp(power, material, bulbType) {
    this.power = power;
    this.material = material;
    this.bulbType = bulbType;
}
Lamp.prototype = new ElectricalDevice();

let tefal = new Kettle(2200, 'steel', 1.7, 'white');

let camelion = new Lamp(9, 'plastic', 'LED');