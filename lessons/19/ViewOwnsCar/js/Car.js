function Car(title) {
	this.title = title;
    this._engine = new Engine(this._engineStopped);
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
