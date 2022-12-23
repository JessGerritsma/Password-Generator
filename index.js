const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const pwdOneEl = document.getElementById("pwd-one");
const pwdTwoEl = document.getElementById("pwd-two");
const slider = document.getElementById("pwd-range");
const output = document.getElementById("pwd-length-display");
let pwdOne = " " ;
let pwdTwo = " " ;

output.textContent = "Password length " + slider.value;
slider.oninput = function() {
    output.textContent = "Password length " + this.value;
    colorChange();
}
function colorChange() {
    let colorHeading = document.getElementById("colored-heading")
if (slider.value < 8) { 
    colorHeading.style.color = '#FF0000';
}else if (slider.value <= 12){ 
    colorHeading.style.color = '#FFA500';
} else if (slider.value >12 ) {
    colorHeading.style.color = '#4ADF86';
} else colorHeading.innerText = "random password"
}

function showCopyBtn() {
    var cbOne = document.getElementById("copy-pwd-one");
    cbOne.className = "show";
    var cbTwo = document.getElementById("copy-pwd-two");
    cbTwo.className = "show";
}

function generatePwd() {
    pwdOne = randPwd ()
    pwdTwo = randPwd ()
    pwdOneEl.textContent = pwdOne
    pwdTwoEl.textContent = pwdTwo
    showCopyBtn()
}

function randPwd() {
    let newPassword = ""
    let availableCharacters = []
    if (document.getElementById("no-numbers").checked){
        availableCharacters =[...symbols, ...characters];
    } else if (document.getElementById("no-symbols").checked){
        availableCharacters = [...numbers, ...characters];
    } else {
        availableCharacters = [...symbols, ...numbers, ...characters]
    }   
    for (let i = 0; i <slider.value; i++) {
        newPassword += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    }
    return newPassword
}    

function showSnackBar() {
    var sb = document.getElementById("snackbar");
    sb.className = "show";
    setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}

function copyTextOne() {
    let content = document.getElementById("pwd-one").textContent;
    navigator.clipboard.writeText(content);
    showSnackBar()
}

function copyTextTwo() {
    let content = document.getElementById("pwd-two").textContent;
    navigator.clipboard.writeText(content);
    showSnackBar()
}

