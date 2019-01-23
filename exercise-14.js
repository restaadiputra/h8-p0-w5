// Logic Challenge - Password Generator
function changeVocals (str) {
  var pairVocal = { a: 'b', i: 'j', u: 'v', e: 'f', o: 'p', A: 'B', I: 'J', U: 'V', E: 'F', O: 'P' }
  var result = ''
  for(var i = 0; i < str.length; i++) {
    if(pairVocal[str[i]]) {
      result += pairVocal[str[i]]
    } else {
      result += str[i]
    }
  }
  return result
}

function reverseWord (str) {
  var result = ''
  for(var i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

function setLowerUpperCase (str) {
  var result = ''
  for(var i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === str[i]) {
      result += str[i].toUpperCase()
    } else {
      result += str[i].toLowerCase()
    }
  }
  return result
}

function removeSpaces (str) {
  var result = ''
  for(var i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      result += str[i]
    }
  }
  return result
}

function passwordGenerator (name) {
  if(name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
    var vocalChanged = changeVocals(name)
    var wordReversed = reverseWord(vocalChanged)
    var switchCase = setLowerUpperCase(wordReversed)
    var spacesRemoved = removeSpaces(switchCase)
    return spacesRemoved
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'