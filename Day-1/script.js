function playSound (e) {
  let audioElem = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let keyElem = document.querySelector(`div[data-key="${e.keyCode}"]`);
  keyElem.classList.add('playing')
  if (!audioElem) return;
  audioElem.currentTime = 0;
  audioElem.play();
}

function removeTransition (e) {
	e.target.classList.remove('playing')
}


let allKeys = Array.from(document.getElementsByClassName('key'));
for (let i = 0; i < allKeys.length; i++) {
	allKeys[i].addEventListener('transitionend', removeTransition)
}
window.addEventListener('keydown', playSound);