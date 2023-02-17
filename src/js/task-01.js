const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories:${itemEl.length}`)

const heading = document.querySelectorAll('h2');
for(const h of heading){
  console.log(`Category:${h.textContent}`)
  console.log(`Element:${h.nextElementSibling.children.length}`)
}
