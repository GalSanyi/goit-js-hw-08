import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
console.log(iframe);



const onPlay = function(time) {
    localStorage.setItem('videoplayer-current-time', time.seconds);
};


if (localStorage.getItem('videoplayer-current-time') !== "") {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(onPlay, 1000));