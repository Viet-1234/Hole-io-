const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const player = {
    x:500,
    y:500,
    radius:35,
    speed:6
};

const keys = {};

window.addEventListener("keydown",(e)=>{
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup",(e)=>{
    keys[e.key.toLowerCase()] = false;
});

function update(){

    if(keys["w"]) player.y -= player.speed;
    if(keys["s"]) player.y += player.speed;
    if(keys["a"]) player.x -= player.speed;
    if(keys["d"]) player.x += player.speed;

}

function draw(){

    ctx.fillStyle="#65c466";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(player.x,player.y,player.radius,0,Math.PI*2);
    ctx.fill();

}

function gameLoop(){

    update();
    draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();
