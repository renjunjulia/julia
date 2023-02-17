function setup() {
    // put setup code here
    createCanvas(400,400);
    background(255,255,102);

    x1=20;
    y1=350;

    x2=340;
    y2=37;

    x=199;
    y=199;

    rectWidht=90;
    rectHeight=30

    N=44
    L=7;
    P=N-L;
    k=0;
   }

   function draw() {
    // put drawing code here
        //line(x1,y1,x2,y2)

        strokeWeight(2)
        fill("magenta")
        rect(x-rectWidht/2,y-rectHeight/2,rectWidht,rectHeight);
        fill("white")
        ellipse(x,y,rectWidht-30*Math.sin(PI/10*k),rectHeight);
        k+=1
        strokeWeight(3)
        fill("white")
        stroke("pink")
        arc(x,y-70,rectWidht,rectWidht,0,2*PI*P/N);
        arc(x,y+70,rectWidht,rectWidht,0,2*PI*L/N);

        for (var j=10; j<=390;j++){
            xs = j
            ys = 350+ 30 * Math.sin(PI/10*xs)
            point(xs,ys)
        }
   }