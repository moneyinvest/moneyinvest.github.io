var video= document.querySelector('video');
var playBtn= document.querySelector('.play_button');

playBtn.addEventListener('click', function () {
    if (video.paused) {  // если видео остановлено, запускаем
        video.play();
        playBtn.style.display="none"
    } else {
        video.pause();
    }
}, false);
video.onended=function()
{
    this.src = this.src;
    playBtn.style.display="block";
}
video.addEventListener('click', function()
{
    if(playBtn.style.display="none")
    {
        if(video.paused)
        {
            video.play();
        }
        else 
        video.pause();
    }
})
