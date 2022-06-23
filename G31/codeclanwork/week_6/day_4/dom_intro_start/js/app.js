document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.textContent = 'JavaScript says Hello';

    // const ourElement = document.querySelector('body > #welcome-paragraph');
    // console.log(ourElement);

    const redElements = document.querySelectorAll('.red');
    for (const redElement of redElements){
        redElement.classList.add('bold');
        redElement.classList.remove('red');
    }

    const greenElements = document.querySelectorAll('.green');
    for (const greenElement of greenElements){
        greenElement.classList.remove('green'); 
        greenElement.classList.add('purple');
    }
});


// const greenLi = document.querySelector('li.green');
// greenLi.textContent = 'Purple';
// greenLi
