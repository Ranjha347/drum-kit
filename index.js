document.addEventListener('keydown',(e)=>{
    let audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
   
    if (!audio) {
        return ;
    }
    // console.log(audio);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    // setTimeout(function(){
    //     key.classList.remove('playing');
    // },500)
    function removeTransition(e) {

        this.classList.remove('playing');
    }
    
    let keys = document.querySelectorAll('.key');
    
    keys.forEach(key =>key.addEventListener('transitionend', removeTransition ));
   
})

