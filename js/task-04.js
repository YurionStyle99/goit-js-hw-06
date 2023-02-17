let counterValue = document.querySelector("#value")
const minusBtn = document.querySelector('[data-action ="decrement"]')
const plusBtn = document.querySelector('[data-action ="increment"]')
let sum = 0;

const minusHandle = function(even){
  sum -=1;
  console.log(sum)
  counterValue.textContent=sum;
}

const plusHandle = function(even){
  sum +=1;
  console.log(sum)
  counterValue.textContent=sum;
}

minusBtn.addEventListener("click", minusHandle);
plusBtn.addEventListener("click", plusHandle);



