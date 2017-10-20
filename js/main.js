"use strict"

function Device(name, brand, location) {
	this.name = name;
	this.brand = brand;
	this.location = location;
	var _state = false;

	this.switchState = function () {
		querySelector('[type="checkbox"]').addEventListener('change', function() {
			console.log(this.checked);
			_state = this.checked;
		});
	}
}

//мультиварка
function Multicooker(name, brand, location, program) {
	Device.call(this, name, brand, location);
	// this.program = [{
	// 	name: "Baking",
	// 	temperature: "170",
	// 	cookingTime: 3000
	// }, {
	// 	name: "Аrying",
	// 	temperature: "130",
	// 	cookingTime: 200
	// }];
	// this.getProgram = function() {
	// 	return this._program;
	// };
	// this.setProgram = function() {
	// 	this._program = program;
	// };
	this.program = program;
}
var multicooker = new Multicooker('Multicooker', 'Tefal', 'Kitchen', "Baking");


// // кондиционер
function Conditioner(name, brand, location, temperature) {
	Device.call(this, name, brand, location);
	var _temperature = 10;
	this.setTemperature = function(temperature) {
		if (temperature >= 0 && volume <= 35) {
			_temperature = temperature;
		}
	};
	this.getTemperature = function() {
		return _temperature;
	};
}
var conditioner = new Conditioner('Conditioner', 'Samsung', 'Common room', 22);

// // аудиоплеер
function Player(name, brand, location, volume) {
	Device.call(this, name, brand, location);
	this.volume = 0;
	this.setVolume = function(volume) {
		if (volume >= 0 && volume <= 100) {
			_volume = volume;
		}
	};
	this.getVolume = function() {
		return _volume;
	};
}
var player = new Player('Audio player', 'Sony', 'Common room', 20);


function SmartHouse() {
	var _devices = [];

	this.addDevice = function(device) {
		device = _devices.length;
		_devices.push(device);
	};

	this.delDeviceItem = function(item) {
		for(var i = 0; i < _devices.length; i++) {
			if(_devices[i].item == item) {
				_devices.splice(i,1);
				return;
			}
		}
	};

	this.getDevices = function () {
		var devices = _devices.slice();
		return devices;
	};
}

var results = document.getElementById("dev-holder");

function AddingToSmartHouse() {
	var idElem = button.getAttribute("id");
	var divDev = document.createElement("div");
	divDev.className = "dev-box";
	results.appendChild(divDev);

	var deviceType = divDev.querySelector('.title');
	deviceName.innerHTML = device.deviceName;

	var deviceName = divDev.querySelector('.brand');
	deviceBrand.innerHTML = device.deviceBrand;

	var devicelocation = divDev.querySelector('.location');
	deviceLocation.innerHTML = deviceLocation;

	// удаление блока
	var btnDelete = divDev.querySelector('.danger');

	btnDelete.addEventListener('click', function(e) {
		e.preventDefault();
		divDev.remove();
	});
}


var SmartHouse = new SmartHouse();
// SmartHouse.addDevice(player);
// SmartHouse.addDevice(conditioner);
// SmartHouse.addDevice(multicooker);
