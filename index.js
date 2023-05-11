function duplicateEncode(word){
let lowerWord = word.toLowerCase()
let charCount = {}
let result = ''
 for (let i = 0; i < lowerWord.length; i++) {
  charCount[lowerWord[i]] = charCount[lowerWord[i]] + 1 || 1
}
 for (let i = 0; i < lowerWord.length; i++) {
  charCount[lowerWord[i]] === 1 ? result += '(' : result += ')'
 }
  
  return result
}