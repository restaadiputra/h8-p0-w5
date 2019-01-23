/**
Logic Challenge: Melee Ranged Grouping
--------------

Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong 
*/ 

function meleeRangedGrouping (str) {
  if(str.length === 0) {
    return []
  } else {
    var result = { Ranged: [], Melee: [] }
    var hero = ''
    var type = ''
    
    for(var i = 0; i < str.length; i++) {
      if((str[i] !== '-' && str[i] !== ',') && (hero !== '' || str[i] !== ' ')){
        hero += str[i]
      } else if(str[i] === '-') {
        i++
        while(!result[type] && str[i] !== ',') {
          if(type !== '' || str[i] !== ' ') {
            type += str[i]
          }
          i++
        }
  
        result[type].push(hero)
        hero = ''
        type = ''
      }
    }
    return Object.values(result)
  }  
}

// TEST CASE

console.log(meleeRangedGrouping(' Razor-   Ranged   ,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []