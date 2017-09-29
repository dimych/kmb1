function CarView(elId, title) {
	this._car = new Car(title);

	this._el = document.querySelector("#" + elId);
}

CarView.prototype.render = function () {
	this._el.innerHTML = `	
		<div class='car'>
		<h3 class='title' data-role='title'></h3>
		<div class='status' data-role='status'></div>
		<hr>
		<button data-role='on'>On</button>
		<button data-role='off'>Off</button>
		</div>	
	`;

	this._bindListeners();
}

CarView.prototype._bindListeners = function () {
	var onButton = this._el.querySelector('[data-role="on"]');
	onButton.addEventListener('click', this._car.start);	
}