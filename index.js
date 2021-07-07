for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var key = this.innerHTML;
        soundfunc(key);
        animatefunc(key);
    });
}
document.addEventListener("keydown",function(event){
    soundfunc(event.key);
    animatefunc(event.key);
})
function soundfunc(key)
{
    switch(key)
    {
        case 'w': var audio = new Audio("https://github.com/sankave00/Drum-kit/blob/main/tom-1.mp3?raw=true");
                  audio.play();
                  break;
        case 'a': var audio = new Audio("https://github.com/sankave00/Drum-kit/blob/main/tom-2.mp3?raw=true");
                  audio.play();
                  break;
        case 's': var audio = new Audio("https://github.com/sankave00/Drum-kit/blob/main/tom-3.mp3?raw=true");
                  audio.play();
                  break;
        case 'd': var audio = new Audio("https://github.com/sankave00/Drum-kit/blob/main/tom-4.mp3?raw=true");
                  audio.play();
                  break;
        case 'j': var audio = new Audio("https://github.com/sankave00/Drum-kit/blob/main/kick-bass.mp3?raw=true");
                  audio.play();
                  break;
        case 'k': var audio = new Audio("https://github.com/sankave00/Drum-kit/blob/main/snare.mp3?raw=true");
                  audio.play();
                  break;
        case 'l': var audio = new Audio("https://github.com/sankave00/Drum-kit/blob/main/crash.mp3?raw=true");
                  audio.play();
                  break;
    }

}
function animatefunc(key){
    var bpressed = document.querySelector("."+key);
    bpressed.classList.add("pressed");
    setTimeout(function(){
        bpressed.classList.remove("pressed");
    },200);
}
