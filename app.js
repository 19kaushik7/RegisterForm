const registerForm = document.getElementById('registerForm');
let alertEl = document.querySelector('.alert');

  // Your web app's Firebase configuration
  const firebaseConfig = {
     apiKey: "AIzaSyAknz_Oce_EItlBwNbD9T9Uz51TgpIPzZ8",
     authDomain: "registerfrom-70f76.firebaseapp.com",
     databaseURL: "https://registerfrom-70f76-default-rtdb.firebaseio.com",
     projectId: "registerfrom-70f76",
     storageBucket: "registerfrom-70f76.appspot.com",
     messagingSenderId: "226404543183",
     appId: "1:226404543183:web:878c0e0d4d51470909e5ba"
   };

   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref('User');

registerForm.addEventListener('submit', (e) => {
     e.preventDefault();
     let firstName = document.querySelector('#faName').value;
     let lastName = document.querySelector('#laName').value;
     let fullName = firstName + '' + lastName;
     let inputEmail = document.querySelector('#inputEmail4').value;
     let inputPassword = document.querySelector('#inputPassword4').value;
     let inputAddress = document.querySelector('#inputAddress').value;
     let inputCity = document.querySelector('#inputCity').value;
     let inputState = document.querySelector('#inputState').value;
     let inputZip = document.querySelector('#inputZip').value;
     let gridCheck = document.querySelector('#gridCheck');
     let inputCheck = false;
     if (gridCheck.checked) {
         inputCheck = true;
     }
     console.log(fullName, inputEmail, inputPassword, inputAddress, inputCity, inputState, inputZip, inputCheck);
     ref.push({
          name : fullName,
          email : inputEmail,
          password : inputPassword,
          address : inputAddress,
          city : inputCity,
          state : inputState,
          zip : inputZip,
          check : inputCheck
     });
     alertEl.style.display = 'block';
     setTimeout(() => {
          alertEl.style.display = 'none';
     }, 2000);
     registerForm.reset();
})