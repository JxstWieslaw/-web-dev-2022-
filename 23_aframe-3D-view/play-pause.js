Aframe.registerComponent('play-pause', {
    init: function(){
        const myVideo = document.querySelector("#jelly-video");
        const videoControls = document.querySelector("#videoControls");
        this.el.addEventListener('click', function(){
            if(myVideo.paused){
                myVideo.play()
                videoControls.setAttribute('src', '#pause');
            }else {
                myVideo.pause();
                videoControls.setAttribute('src', '#play');
            }
        });
    }
});

