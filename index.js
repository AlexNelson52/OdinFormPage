'strict mode';
let form = document.querySelector("#fourm-a")
const telephoneNumber = document.querySelector('#telephone')

const button = document.querySelector('#formButton')
let passwordNotMatch = document.getElementById('#passwordLabel');

form.addEventListener('submit', (e) => {

  let password = document.querySelector('#password').value
  let password2 = document.querySelector('#password2').value
  if (password === password2) {
    console.log('matching')
  } else if (password != password2) {

    console.log('not matching')
  }


})


const information = {
  firstName: [],
  lastName: [],
  email: [],
  userPassWord: [],
  phoneNumber: [],
}





