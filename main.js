function countVowels(str){
  let total = 0;
  if(arguments.length === 0){
    return total
  }else if(typeof str !== 'string'){
    return 'not a string'
  }else{
    str.toLowerCase().split('').forEach((ele)=>{
      if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u'){
        total ++
      }
    })
    return total
  }
}

module.exports = countVowels;
