// Inserire i dati su console tramite tasto Send
var send = document.getElementById('send');
send.addEventListener('click',
 function () {
   var name = document.getElementById('name').value;
   console.log(name);
   var email = document.getElementById('email').value;
   console.log(email);
   var tel = parseInt(document.getElementById('telephone').value);
   console.log(tel);
   var text = document.getElementById('text-area').value;
   console.log(text);
   if (name.length < 5 || email.length < 9 || (isNaN(tel)) ) {
     alert('Compilare tutti i campi necessari');
   }
 }
);
