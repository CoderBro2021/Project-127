harry_potter_song = " ";
metamorphosis_song = " ";
function setup(){
    canvas = createCanvas(600, 530);
    canvas.center();  


    video = createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video,0,0,600,530);
}
function preload(){
    harry_potter_song = loadSound("music.mp3");
    metamorphosis_song = loadSound("Meta.mp3");   
}