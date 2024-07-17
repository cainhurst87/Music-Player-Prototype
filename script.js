
// DOM Load Events
document.addEventListener('DOMContentLoaded', function() {

    // Button Mute Toggle 
    const btnMute = document.getElementById('button-mute');
    btnMute.addEventListener('click', function() {

        const iconMute = btnMute.querySelector('i');
        
        if (iconMute.classList.contains('bi-volume-up')) {
            iconMute.classList.remove('bi-volume-up');
            iconMute.classList.add('bi-volume-mute');
        } else {
            iconMute.classList.remove('bi-volume-mute');
            iconMute.classList.add('bi-volume-up');
        }
    });

    // Button Light Toggle & Light/Dark Mode Toggle
    const btnLight = document.getElementById('button-light');
    btnLight.addEventListener('click', function() {

        const iconLight = btnLight.querySelector('i');

        if(iconLight.classList.contains('bi-sun')){
            iconLight.classList.remove('bi-sun');
            iconLight.classList.add('bi-sun-fill');
        } else {
            iconLight.classList.remove('bi-sun-fill');
            iconLight.classList.add('bi-sun');
        }

        if(document.documentElement.getAttribute('data-theme') === 'dark'){
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

    });

    // Button Play/Pause Toggle 
    const btnPlay = document.getElementById('button-play/pause');
    btnPlay.addEventListener('click', function() {

        const iconPlay = btnPlay.querySelector('i');

        if(iconPlay.classList.contains('bi-play-fill')){
            iconPlay.classList.remove('bi-play-fill');
            iconPlay.classList.add('bi-pause-fill');
        } else {
            iconPlay.classList.remove('bi-pause-fill');
            iconPlay.classList.add('bi-play-fill');
        }
    });

});



