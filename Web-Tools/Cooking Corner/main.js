var numbers = ["2","3","4","5","6","7","8","9"];
var lower = ["a","b","c","d","e","f","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!","#","$","%","&","*","+","-","?","@","'","(",")",",",".","/",":",";","=","_"];

var similars = ["i","l","o","I","L","O","1","0","|"];
var ambiguous = ["\"","[","\\","]","^","`","{","}","~","<",">"];

function switch_change(obj) {
    if (obj.innerHTML == 'On') {obj.style = 'background-color: #ff0000';obj.innerHTML = 'Off';}
    else if (obj.innerHTML == 'Off') {obj.style = 'background-color: #227946';obj.innerHTML = 'On';}
    console.log('done');
}

function generate_pw() {
    var pw_length = parseFloat(document.getElementById('pw_length').innerHTML);
    var password = "";
	if (!isNaN(pw_length)) {
        if (pw_length < 8 || pw_length > 2048) {document.getElementById('pw_field').value = "Kein sicheres Kennwort";}
        else {
            password = getPassword(pw_length);
            if (password.substring(0, 1) == [symbols]) {alert('found symbol')}
            document.getElementById('pw_field').innerHTML = password;
        }
    }
}

function getPassword(pw_length) {
    var pw_length = parseFloat(document.getElementById('pw_length').innerHTML);
    var pw_numbers = document.getElementById('pw_numbers').innerHTML;
    var pw_lower = document.getElementById('pw_lower').innerHTML;
    var pw_upper = document.getElementById('pw_upper').innerHTML;
    var pw_symbols = document.getElementById('pw_symbols').innerHTML;
    var pw_similars = document.getElementById('pw_similars').innerHTML;
    
    var password = '';var array = [];var count = 0;

    if (pw_numbers == 'On') {array = array.concat(numbers);}
    if (pw_lower == 'On') {array = array.concat(lower);}
    if (pw_upper == 'On') {array = array.concat(upper);}
    if (pw_symbols == 'On') {array = array.concat(symbols);}
    if (pw_similars == 'Off') {array = array.concat(similars);}

    var randomIndex;
    if (array.length > 1) {
       for (var i = 0; i < pw_length; i++) {
           randomIndex = Math.floor(Math.random() * array.length);
           password = password + array[randomIndex];
       }
    }
    return password;
}

function copy_pw(obj) {
	navigator.clipboard.writeText(obj.innerHTML);
	alert('Passwort in Zwischenablage kopiert')
}