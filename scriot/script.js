   //empty fields
const fil = () => {

  const arr = [document.getElementById('nam'),
  document.getElementById('lname'),
  document.getElementById('logos'),
  document.getElementById('pass'),
  document.getElementById('passC'),
  document.getElementById('mail')]
  
  console.log(arr);

  arr.forEach(el => el.value == "" ? el.style.backgroundColor = "red" : el.style.backgroundColor = "green")
    
  
  //  inp.value == "" ? inp.style.backgroundColor = "red" : inp.style.backgroundColor = "green";
}


const chekForm = () => {
 
    // pass = pass?
    let pa = document.querySelector('#pass').value;
    let paC = document.querySelector('#passC').value
    pa !== paC ? alert('Diff passwords') : console.log('ok') ;

    //login cant be admin
     let val = document.querySelector('#logos').value;
     val.toLowerCase() === 'administrator' ? alert('Wrong login') : console.log('ok');

    //login = pass?
     pa === val && pa !== "" && val !== "" ? alert('Login = Password') : console.log('ok'); 
}


