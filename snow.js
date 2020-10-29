window.onload =  function(){
    let canvas = document.getElementById("snow");
    let ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let mp = 45;
    let particles = [];


    for(var i = 0; i < mp; i++){
      particles.push({
        x: Math.random()*width, 
        y: Math.random()*height, 
        r: Math.random()*4+1, 
        d: Math.random()*mp
      })
    }


    //Draw SnowFlakes

    function draw(){
        ctx.clearRect(0,0, width, height);
        ctx.fillStyle = "rgb(255, 255, 255, 0.8)"
        ctx.beginPath();

        for(var i = 0; i < mp; i++){
           var p = particles[i];
           ctx.moveTo(p.x, p.y);
           ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);

          }
          ctx.fill();
          update()
    }

    var angle = 0;

    //move the snowflakes
    function update(){
        angle += 0.01;
        for(var i = 0; i < mp; i++){
        var p = particles[i];
        p.y += Math.cos(angle+p.d) + 1 + p.r/2;
        p.x += Math.sin(angle) * 2;
        if(p.x > width+5 || p.x < -5 || p.y > height){
           if(i%3 > 0){
               particles[i] = {x: Math.random()*width, y: -10, r: p.r, d: p.d}
           } 
           else{
              if(Math.sin(angle) > 0){
                  particles[i] = {x: -5,  y: Math.random()*height, r: p.r, d: p.d};
              }
              else{
                particles[i] = {x: width+5,  y: Math.random()*height, r: p.r, d: p.d};
              } 
           }
        }
            
        }
    }

    //animation loop
    setInterval(draw, 35);
}
