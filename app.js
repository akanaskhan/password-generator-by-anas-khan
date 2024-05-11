var rangeInput = document.getElementById("range")
var sliderValue = document.getElementById("rangeValue");
var password = document.getElementById("password")
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var symbols = document.getElementById("symbol");
var generateBtn = document.getElementById("generateBtn")



sliderValue.textContent = rangeInput.value;
rangeInput.addEventListener('input', ()=>{
    sliderValue.textContent = rangeInput.value;    
});

generateBtn.addEventListener("click", ()=>{
    password.value = generatePassword();
})
var allSymbols = "!@#$%^&*";
var allNumber = "0123456789";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword(){
    var generatePass = "";
    var allChars = "";
    
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? allNumber : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return generatePass;
    };

    for(var i = 1; i <= rangeInput.value; i ++){
        generatePass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return generatePass;
};

console.log(password)