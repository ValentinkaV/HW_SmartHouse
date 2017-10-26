"use strict";

function Device(name, brand, location) {
	this.name = name;
	this.brand = brand;
	this.location = location;
}

// //мультиварка
// function Multicooker(name, brand, location, program, delayStart) {
// 	Device.call(this, name, brand, location);
// 	this.program = [{
// 		name: "Baking",
// 		temperature: "170",
// 		cookingTime: 3000
// 	}, {
// 		name: "Аrying",
// 		temperature: "130",
// 		cookingTime: 200
// 	}];
// 	this._delayStart = delayStart;
// 	this.getProgram = function() {
// 		return this._program;
// 	};
// 	this.setProgram = function() {
// 		this._program = program;
// 	};
// 	this.getDelayStart = function() {
// 		return this._delayStart;
// 	};
// 	this.setDelayStart = function() {
// 		this._delayStart = delayStart;
// 	};
// }


// // // кондиционер
// function Conditioner(name, brand, location, temperature) {
// 	Device.call(this, name, brand, location);
// 	var step = 0;
// 	var maxStep = 5;
// 	this.setNextStep = function() {
// 		step++;
// 		if(step > maxStep) {
// 			step = 0;
// 		}
// 	};
// 	this.temperature = 22;
// 	this.minTemperature = 0;
// 	this.maxTemperature = 35;
// }

// // // стиральная машина
// function WashingMachine(name, brand, location, delayStart, timeOff) {
// 	Device.call(this, name, brand, location);
// 	this.delayStart = delayStart;
// 	this.timeOff = timeOff;
// 	this.getDelayStart = function() {
// 		return this._delayStart;
// 	};
// 	this.setDelayStart = function() {
// 		this._delayStart = program;
// 	};
// 	this.getTimeOff = function() {
// 		return this._timeOff;
// 	};
// 	this.setTimeOff = function() {
// 		this._timeOff = timeOff;
// 	};
// }

// // // телевизор
// function Tv(name, brand, location, volume, channel) {
// 	Device.call(this, name, brand, location);
// 	this.channel = channel;
// 	this.volume = 0;
// 	this.nextChannel = function() {
// 			tv.nextChannel = ++tv.channel
// 		},
// 		this.previousChannel = function() {
// 			tv.previousChannel = --tv.channel
// 		},
// 		this.setChannel = function(number) {
// 			this.setChannel = number
// 		}
// 	this.setVolume = function(volume) {
// 		if (volume >= 0 && volume <= 100) {
// 			_volume = volume;
// 		}
// 	};
// 	this.getVolume = function() {
// 		return _volume;
// 	};
// }

var DevObj = {
	"tv": {
		name: "tv",
		brand: "Samsung",
		location:  "Kitchen",
		volume: 20,
		channel: 30
	},
	"conditioner": {
		name: "cond",
		brand: "Samsung",
		location:  "Kitchen",
		temperature: 24
	},
	"multicooker": {
		name: "multicooker",
		brand: "Tefal",
		location:  "Kitchen",
		program: "baking",
		delayStart: 3000
	},
	"washingmachine": {
		name: "Washing Machine",
		brand: "Samsung",
		location:  "Bathroom",
		delayStart: 3000,
		timeOff: 18
	}
};

var addDev = document.querySelectorAll(".btn-add");

for (var i = 0; i < addDev.length; i++) {
	addDev[i].addEventListener('click', function(e) {
		e.preventDefault();
		addDevice(this);
	});
};

var results = document.getElementById("results");

function addDevice(button) {
	var idElem = button.getAttribute("id");
	var divDev = document.createElement("div");
	divDev.className = "controler-dev-box";
	results.appendChild(divDev);

	var templateBox = document.getElementById('template');
	var source = templateBox.innerHTML;
	var template = Handlebars.compile(source);

	DevObj[idElem].id = Date.now();

	divDev.innerHTML = template(DevObj[idElem]);

	// удаление блока
	var btnDelete = divDev.querySelector('.danger');

	btnDelete.addEventListener('click', function(e) {
		e.preventDefault();
		divDev.remove();
	});

	var btnApply = divDev.querySelectorAll(".btn-apply");
	var devValue = document.createElement("span");
	devValue.className = "value";
	divDev.appendChild(devValue);

	for (var i = 0; i < btnApply.length; i++) {
		btnApply[i].addEventListener('click', function(e) {
			e.preventDefault();
			var parent = this.closest('.add-value');
			var field = parent.querySelectorAll('input, select')[0];
			var valueField = parent.querySelector('.value');

			valueField.innerHTML = field.value;
		});
	}

	var state = false;
	divDev.querySelector('[type="checkbox"]').addEventListener('change', function() {
		console.log(this.checked);
		state = this.checked;
	});
}

