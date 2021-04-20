const canvas = document.getElementById("jsCanvas");

let painting = false;


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting()
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    ca nvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener
}
  
    //2-1 공부가 재미가 없어요