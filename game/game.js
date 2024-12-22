function changeScene(closeId, openId) {
  document.getElementById(closeId).classList.remove("active")
  document.getElementById(openId).classList.add("active")
  playAudio(`${openId}-audio`)
}

function playAudio(id) {
  const element = document.getElementById(id)
  if (element && element.play) {
    element.play()
  }
}

function stopAudio(id) {
  const element = document.getElementById(id)
  if (element && element.pause) {
    element.pause()
    element.currentTime = 0
  }
}
