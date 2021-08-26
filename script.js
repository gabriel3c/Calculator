//função que insere valor no campo
function insert(num) {
  let number = document.getElementById('result').innerHTML
  // limita tamanho da string na calculadora
  if (number.length < 11) {
    let number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num
  }
}

//Limpa o campo todo
function cleanAll() {
  document.getElementById('result').innerHTML = ''
}

//Remove último caractere do campo
function cleanLast() {
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number.substring(
    0,
    number.length - 1
  )
}

//Calcula e printa
function resolve() {
  let expression = document.getElementById('result').innerHTML
  //if para verificar se há caractere de operação matématica, se não tiver a função termina, se tiver segue o baile
  if (
    !(
      expression.includes('-') ||
      expression.includes('+') ||
      expression.includes('*') ||
      expression.includes('/')
    )
  ) {
    return
  }
  //if verifca se tem operador no inicio ou fim da string

  result = eval(expression)
  if (!Number.isInteger(result)) {
    result = eval(expression).toFixed(2)
  }
  document.getElementById('result').innerHTML = result

  let print = expression + '  =  ' + result

  for (i = 1; i < 12; i++) {
    let positionResult = document.getElementById(i).innerHTML
    if (positionResult === '') {
      document.getElementById(i).innerHTML = print
      return
    }
  }
}

function clearResults() {
  for (i = 1; i < 12; i++) {
    document.getElementById(i).innerHTML = ''
  }
}
