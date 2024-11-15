const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                result.value = eval(expression);
                expression = '';
            } catch (error) {
                result.value = 'Error';
            }
        } else if (button.textContent === 'C') {
            expression = '';
            result.value = '';
        } else if (button.textContent === 'CE') {
            expression = expression.slice(0, -1);
            result.value = expression;
        } else {
            expression += button.textContent;
            result.value = expression;
        }
    });
});