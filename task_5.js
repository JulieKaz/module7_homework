class ElectricalDevice {
    constructor(power, material) {
        this.plug = false;
        this.power = power;
        this.material = material;
    }
    plugIn() {
        this.plug = true;
    }
    plugOut() {
        this.plug = false;
    }
}

class Kettle extends ElectricalDevice {
    constructor(power, material, volume, color) {
        super(power, material);
        this.volume = volume;
        this.color = color;
    }
    boil() {
        console.log('Boiling...');
    }
}

class Lamp extends ElectricalDevice {
    constructor(power, material, bulbType) {
        super(power, material);
        this.bulbType = bulbType;
    }
}

let tefal = new Kettle(2200, 'steel', 1.7, 'white');

let camelion = new Lamp(9, 'plastic', 'LED');