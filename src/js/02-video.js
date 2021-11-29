const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
console.log(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);