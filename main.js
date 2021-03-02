nose_x=0;
nose_y=0;
function preload(){
        clown_nose=loadImage('https://i.postimg.cc/SQ1GB3Xc/Clown-Nose-PNG-Image.png');
    }

    function setup(){
     canvas = createCanvas(800,600);
        canvas.position(565,250);
        video=createCapture(VIDEO);
        video.hide();
        posenet=ml5.poseNet(video,modelLoaded);
        posenet.on('pose',gotposes);
    }
        function gotposes(result){
            if(result.length>0){
                console.log(result);
                nose_x=result[0].pose.nose.x;
                nose_y=result[0].pose.nose.y;
                console.log("nose_x = "+ result[0].pose.nose.x);
                console.log("nose_y = "+ result[0].pose.nose.y);
                
            }}

        function modelLoaded(){
            console.log("posenet model Loaded");
        }
    function draw(){
        image(video, 0,0,800,600);
        fill("red");
        image(clown_nose,nose_x+80,nose_y+80,45,45)
        //circle(nose_x+300,nose_y+296,20);
       // filter(INVERT);
        
    }
    function snapshot(){
        save('pic.jpg');
    }