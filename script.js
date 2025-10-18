var messageBox = document.getElementById('messageBox')
var counter = document.getElementById('counter')
var warning = document.getElementById('warning')
var maxChars = 200

messageBox.addEventListener('input', function () {
  var typed = messageBox.value.length
  var remaining = maxChars - typed

  if (typed >= maxChars) {
    messageBox.value = messageBox.value.substring(0, maxChars)
    warning.classList.remove('hidden')
  } else {
    warning.classList.add('hidden')
  }

  counter.textContent = typed + '/' + maxChars + ' characters'
})
