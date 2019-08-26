import fibonacci from "./fibo.js"

const renderList = (ul, value) =>{
  ul.innerHTML = ""
  for(let i = 0; i < value; i++){
    const li = document.createElement("li")
    li.innerHTML = fibonacci(i)
    ul.appendChild(li)
  }
  return ul
}

export default renderList;