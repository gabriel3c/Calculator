function insert(num) {
  let number = document.getElementById('result').innerHTML
  if (number.length < 11) {
    // limita tamanho da string na calculadora
    let number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num
  }
}

function resolve() {
  let expression = document.getElementById('result').innerHTML
  result = eval(expression)
  document.getElementById('result').innerHTML = result
  return console.log(expression + ' = ' + result)
}

function cleanAll() {
  document.getElementById('result').innerHTML = ''
}

function cleanLast() {
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number.substring(
    0,
    number.length - 1
  )
}
