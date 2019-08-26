export const Input = () =>{
  let element = document.createElement('input')
  element.type ='number'
  element.placeholder = 'Ingresa un numero...'
  element.min = 1
  return element;
}

export default Input