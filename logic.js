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

			// var color_match = (pixel1[0] == pixel2[0] && pixel1[1] == pixel2[1] && pixel1[2] == pixel2[2] && pixel1[3] == pixel2[3])

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


	// var imageData   	= ctxT.getImageData(0,0,300,300);
	// var buf 			= new ArrayBuffer(imageData.data.length);
	// var buf8 			= new Uint8ClampedArray(buf);
	// var data 			= new Uint32Array(buf);

	// var imageData2   	= ctxT2.getImageData(0,0,300,300);
	// var buf_2 			= new ArrayBuffer(imageData.data.length);
	// var buf8_2 			= new Uint8ClampedArray(buf);
	// var data_2 			= new Uint32Array(buf);

	// var imageData3   	= ctx3.getImageData(0,0,300,300);
	// var buf_3 			= new ArrayBuffer(imageData.data.length);
	// var buf8_3 			= new Uint8ClampedArray(buf);
	// var data_3 			= new Uint32Array(buf);

	// for (var y = 0; y < 300; ++y) {
	//     for (var x = 0; x < 300; ++x) {
	//         var iter = y * 300 + x;
	//         if (imageData.data[iter] == imageData2.data[iter]) {
	//         	data_3[iter] =
	//             (255   << 24) |    // alpha
	//             (0   << 16) |      // blue
	//             (0   <<  8) |      // green
	//              0;                // red
	//         }
	//     }
	// }

	// imageData.data.set(buf8);
	// ctx3.putImageData(imageData, 0, 0);

	
	document.body.appendChild(cipo3);
});