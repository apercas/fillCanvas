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
    var cipo4 = document.createElement('canvas');
    cipo3.id = 'cipo3';
    cipo4.id = 'cipo4';
    var ctx3  = cipo3.getContext('2d');
    var ctx4  = cipo4.getContext('2d');
    ctx3.canvas.width = 300;
    ctx3.canvas.height = 300;
    ctx4.canvas.width = 300;
    ctx4.canvas.height = 300;

 //    for (var i=0; i < 300; i++) {
	// 	for (var j=0; j < 300; j++) {
	// 		ctx4.fillRect([i],[j],1,1);
	// 		var pixel1 = ctxT.getImageData([i],[j],1,1).data;
	// 		var pixel2 = ctxT2.getImageData([i],[j],1,1).data;

	// 		var color_match = (pixel1[0] == pixel2[0] && pixel1[1] == pixel2[1] && pixel1[2] == pixel2[2] && pixel1[3] == pixel2[3])

	// 		// var color_match = Array.prototype.slice.apply(pixel1).every(function(element, index) {
	// 		//     return element === Array.prototype.slice.apply(pixel2); 
	// 		// });

	// 		if (color_match) {
	// 			ctx4.fillStyle = "#000";
	// 		} else {
	// 			ctx4.fillStyle = "#fff";
	// 		}
	// 	}
	// }


	var imageData   	= ctxT.getImageData(0,0,300,300);
	var buf 			= new ArrayBuffer(imageData.data.length);
	var buf8 			= new Uint8ClampedArray(buf);
	var data 			= new Uint32Array(buf);

	var imageData2   	= ctxT2.getImageData(0,0,300,300);
	var buf_2 			= new ArrayBuffer(imageData.data.length);
	var buf8_2 			= new Uint8ClampedArray(buf_2);
	var data_2 			= new Uint32Array(buf_2);

	var imageData3   	= ctx3.getImageData(0,0,300,300);
	var buf_3 			= new ArrayBuffer(imageData.data.length);
	var buf8_3 			= new Uint8ClampedArray(buf_3);
	var data_3 			= new Uint32Array(buf_3);

	for (var y = 0; y < 300; ++y) {
	    for (var x = 0; x < 300; ++x) {
	        var iter = y * 300 + x;
	        var value = x * y & 0xff;
	        if (imageData.data[iter] == imageData2.data[iter]) {
	        	data_3[iter] =
	            (255   << 24) |	// alpha
            	(0 << 16) |		// blue
            	(0 <<  8) |		// green
            	 255;			// red
	            
	        }
	    }
	}

	imageData3.data.set(buf8_3);
	ctx3.putImageData(imageData3, 0, 0);

	
	document.body.appendChild(cipo3);
	// document.body.appendChild(cipo4);
});