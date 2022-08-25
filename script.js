const main = document.getElementById('main')
const passLength = document.getElementById('passLength');
const passOutput = document.getElementById('passOutput');
const passGenerator = document.getElementById('passGenerator');
const containSymbols = document.getElementById('symbols');
const containNumbers = document.getElementById('numbers');
const containLetters = document.getElementById('letters');
const copyBtn = document.createElement('button');
copyBtn.setAttribute('id', 'copyBtn')
copyBtn.innerText = "Copy Password";

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let symbols = [',','.','/','!','£','$','%','^','&','*','-','_','#','<','>','?','@','+','=','[',']']
let numbers = [1,2,3,4,5,6,7,8,9,0]
// this is done in order to get the length of the array but since arrays are zero-indexed you need to remove 1
// let lettersLength = letters.length - 1;
// let symbolsLength = symbols.length - 1;
// let numbersLength = numbers.length - 1;

function generatePassword() {
    let length = parseInt(passLength.value);
    let output = "";
    let finalArray = [];
    if(containSymbols.checked) {
        finalArray.push(...symbols)
    }
    if(containNumbers.checked){
        finalArray.push(...numbers)
    } 
    if(containLetters.checked){
        finalArray.push(...letters)
    }
    let arrayLength = finalArray.length;
    if(finalArray.length != 0) {
        for(index=0; index<length; index++) {
            let random = Math.floor(Math.random() * arrayLength);
            output+= finalArray[random];
        }
        main.appendChild(copyBtn);
        copyBtn.addEventListener('click', async () => {
            await navigator.clipboard.writeText(passOutput.innerText);
        })
        if(length == 69) {
            alert('( ͠° ͟ʖ ͡°)') 
        }
        if(length == 420) {
            alert('( ͡~ ͜ʖ ͡°)')
        }
    }else {
        output = "Please check at least one of the above options";
        copyBtn.remove();
    }
    passOutput.innerText = `${output}`;
} 

passLength.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'Enter':
            generatePassword();
            break;
    }
})  
passGenerator.addEventListener('click', generatePassword)  
