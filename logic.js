var cipoT, cipoT2, ctxT,ctxT2 = '';
var lolailo = function() {
	canvas = document.getElementsByTagName('canvas');
	cipoT = canvas[0];
	cipoT2 = canvas[1];
	canvas = [];
	
	cipoT.setAttribute('width', '300');
	cipoT2.setAttribute('width', '300');
	cipoT.setAttribute('height', '300');
	cipoT2.setAttribute('height', '300');

	ctxT  = cipoT.getContext('2d');
	ctxT2 = cipoT2.getContext('2d');
	draw(ctxT);
	draw(ctxT2);
}

var draw = function(ctx) {
	for (var i=0; i < 300; i++) {
		for (var j=0; j < 300;j++) {
			ctx.fillRect([i],[j],1,1);
			// ctx.fillStyle = "#"+(~~(Math.random()*(1<<24))).toString(16);
			ctx.fillStyle = (Date.now() % 2 === 0) ? "blue" : "yellow";
		}
	}
}

lolailo();

document.querySelector('button').addEventListener('click', function () {
    var cipo3 = document.createElement('canvas');
    cipo3.id = 'cipo3';
    var ctx3  = cipo3.getContext('2d');
    ctx3.canvas.width = 300;
    ctx3.canvas.height = 300;

    for (var i=0; i < 300; i++) {
		for (var j=0; j < 300; j++) {
			ctx3.fillRect([i],[j],1,1);
			var pixel1 = ctxT.getImageData([i],[j],1,1).data;
			var pixel2 = ctxT2.getImageData([i],[j],1,1).data;
			var color_match = Array.prototype.slice.apply(pixel1).every(function(element, index) {
			    return element === ctxT2.getImageData([i],[j],1,1).data[index]; 
			});

			if (color_match) {
				ctx3.fillStyle = "#000";
			} else {
				ctx3.fillStyle = "#fff";
			}
		}
	}
	document.body.appendChild(cipo3);
});