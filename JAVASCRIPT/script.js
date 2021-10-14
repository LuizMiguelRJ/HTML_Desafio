let video = document.getElementById('video');
let control = document.getElementsByClassName('control');

function back() {

    video.currentTime -= 15;

}

function foward() {

    video.currentTime += 15;

}

function play() {

    video.play();

}

function pause() {

    video.pause();

}

function stop() {

    video.pause();
    video.currentTime = 0;
    video.playbackRate = 1;

}

function increase() {

    video.playbackRate += 0.1;

}

function decrease() {

    video.playbackRate -= 0.1;

}

function up() {

    video.volume += 0.2;

}

function down() {

    video.volume -= 0.2;

}

function hide() {
    control.style.visibility = 'hidden'
}

function appear() {

    control.style.visibility = 'visible'

}