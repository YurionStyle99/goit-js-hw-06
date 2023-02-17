
const form = document.querySelector(".login-form");

let obj = {};

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }else{
    for(const input of form.elements){
      if(input.type !== "submit")
      obj[input.type] = input.value;
    }
  }
    

  
  event.currentTarget.reset();
  return console.log(obj)
}