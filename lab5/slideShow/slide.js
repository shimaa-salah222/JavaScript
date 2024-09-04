var pictures=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

var index =0;
var imgIntervals;

var children = document.getElementById("img");

img.scr = pictures[0];

var startBtn = document.getElementById("start")
var prevBtn = document.getElementById("pre")
var stopBtn = document.getElementById("stop")
var nextBtn = document.getElementById("next");

function slideShow(){
        img.src = pictures[index];
}


prevBtn.addEventListener('click',()=>{
        index=(index - 1 + pictures.length)%pictures.length;
        slideShow();
});
nextBtn.addEventListener('click',()=>{
        index=(index+1)%pictures.length;
        slideShow();
});
startBtn.addEventListener('click',()=>{
        imgIntervals= setInterval(()=>{
                index=(index+1)% pictures.length;
                slideShow();
        },2000);
        
});
stopBtn.addEventListener('click',()=>{
        clearInterval (imgIntervals);
        imgIntervals=null;
}); 
