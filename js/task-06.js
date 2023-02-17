const inputForm = document.querySelector('#validation-input');

console.log(inputForm.getAttribute('data-length'))

let maxValue = Number(inputForm.getAttribute('data-length'));

inputForm.addEventListener("blur", (event) => {
  if(event.currentTarget.value.length === maxValue){
inputForm.classList.remove('invalid')
 inputForm.classList.add('valid')
  }else{
    inputForm.classList.remove('valid')
    inputForm.classList.add('invalid')
  }

  
});