document.getElementById('login-btn')
.addEventListener('click',function(event){
event.preventDefault();
const accountNumber=document.getElementById("Account-number").value;
const epin=document.getElementById("pin").value;
const convertPin=parseInt(epin);
if(accountNumber.length===11){
  if(convertPin===1234)
  {
    window.location.href="./main.html"
  }
  else{
    alert("thik nai");
  }
}
else{
  alert("ned valid account number");
}
})