//function send E-mail using smtpJS API
function sendmsg(){
    var name=document.getElementById("name").value
    var mobile=document.getElementById("ph").value
    var msg=document.getElementById("message").value
    var result = name.concat(" is sent an message to you !.\n", msg, ".My phone number is  ", mobile);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jerinmr51@gmail.com",//smtp username(email)
        Password : "D1C6814A5431044C2AB6174C238F61E39894",//smtp password
        To : 'jerinmr15@outlook.com',//destination email
        From : "jerinmr51@gmail.com",//smtp mail address
        Subject : "A new message from a Site Visitor",
        Body : result,
    }).then(
    message => alert(message)
    );
}


// This part down here does the required form validation for Login page and signup page 
const letterExp = /^[a-zA-Z]+$/;

const form = document.getElementById("ac-form")

const name = document.getElementById("name")
const email = document.getElementById("mail")
const ph = document.getElementById("ph")
const male = document.getElementById('male')
const female = document.getElementById('female')
const age = document.getElementById("age")
const prn = document.getElementById("prn")
const dept = document.getElementById("dept")
const password = document.getElementById("pass")

const name_error = document.getElementById("name-warn")
const email_error = document.getElementById("mail-warn")
const ph_error = document.getElementById("ph-warn")
const gender_error = document.getElementById("gender-warn")
const age_error = document.getElementById("age-warn")
const prn_error = document.getElementById("prn-warn")
const dept_error = document.getElementById("dept-warn")
const password_error = document.getElementById("pass-warn")


form.addEventListener("submit",(e) => {

  if(name.value === '' || name.value == null){
    e.preventDefault()
    name_error.innerText = "Name is required";
  }else if(!name.value.match(letterExp)){
    name_error.innerText = "Alphabets Only";
  }
  else{
    name_error.innerText = "";
  }

  if(email.value === '' || email.value == null){
    e.preventDefault()
    email_error.innerText = "Email is required";
  }else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    e.preventDefault()
    email_error.innerText ="Enter a Valid Email";
  }else{
    email_error.innerText = "";
  }

  if(ph.value === '' || ph.value == null){
    e.preventDefault()
    ph_error.innerText = " Mobile Number is required";
  }else if(ph.value.length != 10 ) {
    e.preventDefault()
    ph_error.innerText = "Enter a Valid Mobile number";
  }else{
    ph_error.innerText = "";
  }

  if(male.checked == true || female.checked == true) {
    gender_error.innerText = "";
  }else if(male.checked == false || female.checked == false){  
    gender_error.innerText = "Choose Gender";   
  }else{
    gender_error.innerText = "";
  }

  if(age.value === '' || age.value == null){
    e.preventDefault()
    age_error.innerText = "Age is required";
  }else if(age.value < 0 && age.value > 100) {
    e.preventDefault()
    age_error.innerText = "Enter a Valid age";
  }else{
    age_error.innerText = "";
  }

  if(prn.value === '' || prn.value == null){
    e.preventDefault()
    prn_error.innerText = "PRN is Required";
  }else if(prn.value.length != 10 ) {
    e.preventDefault()
    prn_error.innerText = "Invalid PRN";
  }else{
    prn_error.innerText = "";
  }

  if(dept.value == ""){
    dept_error.innerText = "Select Your Department";
  }else{
    dept_error.innerText = "";
  }

  if(password.value === '' || password.value == null) {
    e.preventDefault()
    password_error.innerText = "Enter a Password";
  }else if(password.value.length < 8 || password.value.length > 20){
    e.preventDefault()
    password_error.innerText = "Password length is 8 to 20 letters";
  } else {
    password.innerText = "";
  }
})
