const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGenratorForm')
const includeUpperCaseElement = document.getElementById('includeUpperCase')
const includeNumberElement = document.getElementById('includeNumber')
const includeSymbolElement = document.getElementById('includeSymbol')
const passwordDisplay = document.getElementById('passwordDisplay')

const upperCaseCharCodes = arrayFromLowToHigh(65, 90)
const lowerCaseCharCodes = arrayFromLowToHigh(97, 122)
const numberCharCodes = arrayFromLowToHigh(48, 57)
const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)


form.addEventListener('submit', e => {
    e.preventDefault()
    const charactorAmount = characterAmountNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeNumber = includeNumberElement.checked
    const includeSymbol = includeSymbolElement.checked
    const password = generatePassword(charactorAmount, includeUpperCase, includeNumber, includeSymbol)
    passwordDisplay.innerText = password
})

function generatePassword(charactorAmount, includeUpperCase, includeNumber, includeSymbol){
let charCodes = lowerCaseCharCodes
if(includeUpperCase) charCodes = charCodes.concat(upperCaseCharCodes)
if(includeNumber) charCodes = charCodes.concat(numberCharCodes)
if(includeSymbol) charCodes = charCodes.concat(symbolCharCodes)
const passwordCharactors=[]
for(let i = 0; i < charactorAmount; i++){
    const charactor = charCodes[Math.floor(Math.random()*charCodes.length)]
    passwordCharactors.push(String.fromCharCode(charactor))
}
return passwordCharactors.join('')

}


function arrayFromLowToHigh(low, high){
  const array = []
  for(let i = low; i <= high; i++){
      array.push(i)
  }
  return array
}

function syncCharacterAmount(e){
   const value = e.target.value
   characterAmountRange.value=value
   characterAmountNumber.value=value
}