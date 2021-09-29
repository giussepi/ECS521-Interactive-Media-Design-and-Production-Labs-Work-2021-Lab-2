window.addEventListener('load', function() {
    /* Add the scale below */

    var bg_canvas = document.getElementById('background');
    var bg_ctx = bg_canvas.getContext('2d');

    var fg_canvas = document.getElementById('foreground');
    var fg_ctx = fg_canvas.getContext('2d');


    function drawCloud(startX, startY, alpha) {
	fg_ctx.globalAlpha = alpha;
	fg_ctx.globalCompositeOperation = 'lighter';

	fg_ctx.beginPath();
	fg_ctx.moveTo(startX, startY);
	fg_ctx.bezierCurveTo(startX - 40, startY + 20, startX -40, startY + 70, startX + 60, startY + 70);
	fg_ctx.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
	fg_ctx.bezierCurveTo(startX + 250, startY + 70, startX+ 250, startY + 40, startX + 220, startY + 20);
	fg_ctx.bezierCurveTo(startX + 260, startY -40, startX + 200, startY -50, startX + 170, startY - 30);
	fg_ctx.bezierCurveTo(startX + 150, startY -75, startX + 80, startY -60, startX + 80, startY - 30);
	fg_ctx.bezierCurveTo(startX + 30, startY -75, startX -20, startY -60, startX, startY);

	fg_ctx.fillStyle = '#ffffff';
	fg_ctx.fill();
    }

    function drawBackground(width, height) {
	/* Change the canvas size below */

	bg_ctx.fillStyle = '#3ba1d4';
	bg_ctx.fillRect(0, 0, bg_canvas.width, bg_canvas.height);
    }

    function drawForeground(width, height) {
	/* Change the canvas size below */

	/* Add the albatross image below */

	/* Add the clouds below */

    }


    function redraw() {
	/* Add style width and height below */

	drawBackground(bg_canvas.width, bg_canvas.height);
	drawForeground(fg_canvas.width, fg_canvas.height);
    }


    redraw();
});
