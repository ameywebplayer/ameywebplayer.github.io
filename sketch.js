var song1, song2, song3, song4, song5, song6, song7, song8, song9, song10;
var whosspecial, whosspecialImg;
var font;
var song1b, song2b, song3b, song4b, song5b, song6b, song7b, song8b, song9b, song10b;
var n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;
var appearstate = "after1500";
var stop;
var lyricsback;


function preload(){
    whosspecialImg = loadImage("Alluarjun.jpg");
    font = loadFont("Nexa Light.otf");
    song1 = loadSound("1.mp3");
    song2 = loadSound("2.mp3");
    song3 = loadSound("3.mp3");
    song4 = loadSound("4.mp3");
    song5 = loadSound("5.mp3");
    song6 = loadSound("6.mp3");
    song7 = loadSound("7.mp3");
    song8 = loadSound("8.mp3");
    song9 = loadSound("9.mp3");
    song10 = loadSound("10.mp3");

    
}

function setup() {
    createCanvas(windowWidth,windowHeight+700);



    whosspecial = createSprite(130,150,50,50);
    whosspecial.addImage("alluarjun",whosspecialImg);

    song1b = createButton("►");
    song1b.position(10,350);
    song1b.class("playbutton");
    song1b.mouseClicked(song1play);

    song2b = createButton("►");
    song2b.position(10,450);
    song2b.class("playbutton");
    song2b.mouseClicked(song2play);

    song3b = createButton("►");
    song3b.position(10,550);
    song3b.class("playbutton");
    song3b.mouseClicked(song3play);

    song4b = createButton("►");
    song4b.position(10,650);
    song4b.class("playbutton");
    song4b.mouseClicked(song4play);

    song5b = createButton("►");
    song5b.position(10,750);
    song5b.class("playbutton");
    song5b.mouseClicked(song5play);

    song6b = createButton("►");
    song6b.position(10,850);
    song6b.class("playbutton");
    song6b.mouseClicked(song6play);

    song7b = createButton("►");
    song7b.position(10,950);
    song7b.class("playbutton");
    song7b.mouseClicked(song7play);

    song8b = createButton("►");
    song8b.position(10,1050);
    song8b.class("playbutton");
    song8b.mouseClicked(song8play);

    song9b = createButton("►");
    song9b.position(10,1150);
    song9b.class("playbutton");
    song9b.mouseClicked(song9play);

    song10b = createButton("►");
    song10b.position(10,1250);
    song10b.class("playbutton");
    song10b.mouseClicked(song10play);

    n1 = createButton("Srivalli - Pushpa");
    n1.position(160, 350);
    n1.class("songname");

    n2 = createButton("Eyy Bidda Idhi Naa Adda - Pushpa");
    n2.position(160, 450);
    n2.class("songname");

    n3 = createButton("Supermachi - Son Of Satyamurty");
    n3.position(160, 550);
    n3.class("songname");

    n4 = createButton("Seeti Maar - DJ");
    n4.position(160, 650);
    n4.class("songname");

    n5 = createButton("Gudilo Badilo - DJ");
    n5.position(160, 750);
    n5.class("songname");

    n6 = createButton("Top Lesi Poddi");
    n6.position(160, 850);
    n6.class("songname");

    n7 = createButton("Saami Saami - Pushpa");
    n7.position(160, 950);
    n7.class("songname");

    n8 = createButton("Butta Bomma - AlaVaikunthapuramloo");
    n8.position(160, 1050);
    n8.class("songname");

    n9 = createButton("Ramuloo Ramulaa - AlaVaikunthapuramloo");
    n9.position(160, 1150);
    n9.class("songname");

    n10 = createButton("Telusa Telusa - Sarrainodu");
    n10.position(160, 1250);
    n10.class("songname");




    


    



    song1b.hide();
    song2b.hide();
    song3b.hide();
    song4b.hide();
    song5b.hide();
    song6b.hide();
    song7b.hide();
    song8b.hide();
    song9b.hide();
    song10b.hide();

    n1.hide();
    n2.hide();
    n3.hide();
    n4.hide();
    n5.hide();
    n6.hide();
    n7.hide();
    n8.hide();
    n9.hide();
    n10.hide();

}

function draw() {
    background("black");
    drawSprites();
    fill("White");
    textSize(50);
    textFont(font);
    text("Allu Arjun Special",whosspecial.x + 150,200);

    if(appearstate === "after1500"){
        setTimeout(timeout,3000);
    }

}

function timeout(){
    song1b.show();
    song2b.show();
    song3b.show();
    song4b.show();
    song5b.show();
    song6b.show();
    song7b.show();
    song8b.show();
    song9b.show();
    song10b.show();

    n1.show();
    n2.show();
    n3.show();
    n4.show();
    n5.show();
    n6.show();
    n7.show();
    n8.show();
    n9.show();
    n10.show();

}

function song1play(){
    if(song1.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.play();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        song7.stop();
        song8.stop();
        song9.stop();
        song10.stop();

    }
    
}
function song2play(){
    if(song2.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.play();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        song7.stop();
        song8.stop();
        song9.stop();
        song10.stop();

    }
    
}

function song3play(){
    if(song3.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.stop();
        song3.play();
        song4.stop();
        song5.stop();
        song6.stop();
        song7.stop();
        song8.stop();
        song9.stop();
        song10.stop();

    }
    
}

function song4play(){
    if(song4.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.stop();
        song3.stop();
        song4.play();
        song5.stop();
        song6.stop();
        song7.stop();
        song8.stop();
        song9.stop();
        song10.stop();

    }
    
}

function song5play(){
    if(song5.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.play();
        song6.stop();
        song7.stop();
        song8.stop();
        song9.stop();
        song10.stop();

    }
    
}

function song6play(){
    if(song6.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.play();
        song7.stop();
        song8.stop();
        song9.stop();
        song10.stop();

    }
    
}

function song7play(){
    if(song7.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        song7.play();
        song8.stop();
        song9.stop();
        song10.stop();

    }
    
}

function song8play(){
    if(song8.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        song7.stop();
        song8.play();
        song9.stop();
        song10.stop();

    }
    
}

function song9play(){
    if(song9.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        song7.stop();
        song8.stop();
        song9.play();
        song10.stop();

    }
    
}

function song10play(){
    if(song10.isPlaying()){
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song10.stop();
    }else{
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        song7.stop();
        song8.stop();
        song9.stop();
        song10.play();

    }
    
}