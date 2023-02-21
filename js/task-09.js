function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChange = document.querySelector('button.change-color');
const body = document.getElementsByTagName('body')[0];
const spanEl = document.querySelector('span.color')

console.log(getRandomHexColor())
const handleClick = (event) => {
  const color = getRandomHexColor()
  body.style.backgroundColor = color;
  spanEl.textContent= color; 
};
btnChange.addEventListener("click", handleClick);