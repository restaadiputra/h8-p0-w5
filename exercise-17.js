// Logic Challenge - Kali Terus (Rekursif)

// using while + recursion
function kaliTerusRekursif(angka) {
  var result = 1
  while(angka !== 0) {
    result *= (angka % 10)
    angka = (angka - (angka % 10)) / 10
  }

  if(result < 10) {
    return result
  }

  return kaliTerusRekursif(result)
}

// full recursion
function alt_kaliTerusRekursif(angka) {
  if(angka < 10) {
    return angka
  }

  if((angka % 10) * kaliTerusRekursif((angka - (angka % 10)) / 10) < 10) {
    return angka % 10 * kaliTerusRekursif((angka - (angka % 10)) / 10)
  }

  return kaliTerusRekursif(angka % 10 * kaliTerusRekursif((angka - (angka % 10)) / 10))
}

// TEST CASES - using while and recursion
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6

console.log('---------')

// TEST CASES - using full recursion
console.log(alt_kaliTerusRekursif(66)); // 8
console.log(alt_kaliTerusRekursif(3)); // 3
console.log(alt_kaliTerusRekursif(24)); // 8
console.log(alt_kaliTerusRekursif(654)); // 0
console.log(alt_kaliTerusRekursif(1231)); // 6