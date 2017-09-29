function Car(title, elId) {
	this.title = title;
    this._engine = new Engine(this._engineStopped);
    this._view = new CarView({
        elementId: elId,
        stopCar: this.stopCar,
        tryStartCar: this.start
    });
}

Car.prototype.start = function() {
	return this._engine.turnOn();
}

Car.prototype.stopCar = function() {
	this._engine.turnOn();
}

Car.prototype._engineStopped = function() {
	this._view.carStopped();
}
