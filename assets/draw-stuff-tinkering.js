// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
function draw_rect(ctx, stroke, fill) {
  stroke = stroke || 'lightgrey';
  fill = fill || 'dimgrey';
  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  ctx.lineWidth = 5;
  ctx.rect(75, 50, canvas.width - 150, canvas.height - 100);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}
function draw_point(ctx, x, y) {
  stroke = 'lightgrey';
  fill = 'white';
  ctx.save();
  ctx.fillStyle = fill;
  ctx.lineWidth = 5;
  ctx.rect(x, y, 1, 1);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}
// =====================================================  draw_grid ====
function draw_grid(rctx, rminor, rmajor, rstroke, rfill) {
  rctx.save();
  rctx.strokeStyle = rstroke;
  rctx.fillStyle = rfill;
  let width = rctx.canvas.width;
  let height = rctx.canvas.height;
  for (var ix = 0; ix < width; ix += rminor) {
    rctx.beginPath();
    rctx.moveTo(ix, 0);
    rctx.lineTo(ix, height);
    rctx.lineWidth = (ix % rmajor == 0) ? 0.5 : 0.25;
    rctx.stroke();
    if (ix % rmajor == 0) { rctx.fillText(ix, ix, 10); }
  }
  for (var iy = 0; iy < height; iy += rminor) {
    rctx.beginPath();
    rctx.moveTo(0, iy);
    rctx.lineTo(width, iy);
    rctx.lineWidth = (iy % rmajor == 0) ? 0.5 : 0.25;
    rctx.stroke();
    if (iy % rmajor == 0) { rctx.fillText(iy, 0, iy + 10); }
  }
  rctx.restore();
}


function cella(ctx, currentLine, lineNumber) {


  // Base Case check if last line to draw
  if (lineNumber > 100) return;

  // Create new array of size 400 and fill it with zeros
  let nextLine = Array.apply(null, Array(400)).map(Number.prototype.valueOf, 0);
  let i = 0;
  nextLine = cella_draw(ctx, currentLine, lineNumber, nextLine, i);
  console.log(nextLine);

  cella(ctx, nextLine, (lineNumber + 1));
}

function cella_draw(ctx, currentLine, lineNumber, nextLine, i) {


  if (currentLine[i] == 1) {
    setTimeout(draw_point(ctx, i, lineNumber), 0);
  }

  let trio = "" + currentLine[i] + currentLine[i + 1] + currentLine[i + 2]


  switch (trio) {
    case "111":
      break;
    case "110":
      nextLine[i + 1] = 1;
      console.log("new array index: " + (i + 1));
      break;
    case "101":
      break;
    case "100":
      nextLine[i + 1] = 1;
      console.log("new array index: " + (i + 1));
      break;
    case "011":
      nextLine[i + 1] = 1;
      console.log("new array index: " + (i + 1));
      break;
    case "010":
      break;
    case "001":
      nextLine[i + 1] = 1;
      console.log("new array index: " + (i + 1));
      break;
    case "000":
      break;
    default:
  }
  if (i < currentLine.length) {
    i++;
    setTimeout(nextLine = cella_draw(ctx, currentLine, lineNumber, nextLine, i), 100);
  } else {
    return nextLine
  }
}