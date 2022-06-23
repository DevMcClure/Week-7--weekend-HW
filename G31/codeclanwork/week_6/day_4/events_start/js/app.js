document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');
  console.log(this);
  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  const input = document.querySelector('#input');
  input.addEventListener('input', handleTextInput);

  const select = document.querySelector('#select');
  select.addEventListener('change', handleSelectChange);

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

});

const handleButtonClick = function(){
  // console.log('Button has been clicked');
  const paragraph = document.querySelector('#button-result');
  paragraph.textContent = 'This is a clicked button'
}


const handleTextInput = function(event){
  const inputParagraph = document.querySelector('#input-result');
  inputParagraph.textContent = `You typed: ${event.target.value}`;
}

const handleSelectChange = function(event){
  const selectParagraph = document.querySelector('#select-result');
  selectParagraph.textContent = `You selected: ${event.target.value}`;
}

const handleFormSubmit = function(event){
  event.preventDefault()
   // console.log(event.target.first_name.value, event.target.last_name.value)
  const formParagraph = document.querySelector('#form-result');
  formParagraph.textContent = `Your name: ${event.target.first_name.value} ${event.target.last_name.value}`

}
