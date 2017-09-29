function Engine(engineFinishedCallback) {
    this._engineFinishedCallback == engineFinishedCallback;
    this._status = "off";
}
Engine.prototype.turnOn = function () {
    var randomNumber = Math.random();
    if (randomNumber > 0.5) {
        this._status = "on";        
        return true;
    } else {
        this._status = "off";
        return false;
    }
}

Engine.prototype._runStopTimer = function () {
    var that = this;
    setTimeout(function() {
        that._status = "off";
        if (!!that._engineFinishedCallback) {
            that._engineFinishedCallback();
        }
    }, 15000);
}