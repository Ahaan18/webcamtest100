cam = document.getElementById("camera");
Webcam.attach(cam);
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});
function take(){
    Webcam.snap(function(a){
document.getElementById("result").innerHTML = '<img id="any" src="'+a+'"/>';
b = document.getElementById("downloadimg");
c = document.getElementById("any").src;
b.href = c;
b.click();
});
}