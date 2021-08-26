for (i = 1; i < 12; i++) {
  let positionResult = document.getElementById(i).innerHTML
  if (!(positionResult === '')) {
    document.getElementById('i+1').innerHTML = printResult
  } else {
    document.getElementById('i').innerHTML = printResult
  }
}
