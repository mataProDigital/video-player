const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $volume = document.querySelector('#volume');
const $mute = document.querySelector('#mute');
const $toggleSize = document.querySelector('#toggle-size');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$mute.addEventListener('click', handleMute);
$volume.addEventListener('input', handleVolume);
$toggleSize.addEventListener('click', handleToggleSize);


function handlePlay() {
	$video.play();
	$play.hidden = true;
	$pause.hidden = false;
	console.log('le diste click al boton de play');
}
function handlePause() {
	$video.pause();
	$pause.hidden = true;
	$play.hidden = false;
	console.log('le diste click al boton de pause');
}

$backward.addEventListener('click', handleBackward);

function handleBackward() {
	// $video.currentTime = $video.currentTime - 10;
	$video.currentTime -= 10;
	console.log('para atras 10 segundos');
}

$forward.addEventListener('click', handleForward);

function handleForward() {
	// $video.currentTime = $video.currentTime + 10
	$video.currentTime += 10;
	console.log('para adelante 10 segundos');
}
function handleMute() {
	$video.muted = !$video.muted;
	$mute.classList.toggle('muted', $video.muted);
}

function handleVolume() {
	$video.volume = $volume.value;
}
function handleToggleSize() {
	if ($video.requestFullscreen) {
		$video.requestFullscreen();
	} else if ($video.webkitRequestFullscreen) {
		$video.webkitRequestFullscreen();
	} else if ($video.msRequestFullscreen) {
		$video.msRequestFullscreen();
	}
}


const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUptime);

function handleLoaded() {
  $progress.max = $video.duration
	console.log('ha cargado mi video', $video.duration);
}

function handleTimeUptime() {
  $progress.value = $video.currentTime
  // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value)
}