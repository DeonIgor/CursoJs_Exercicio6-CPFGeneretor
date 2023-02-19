import './assets/css/styles.css';

import cpfGenerator from './assets/modules/cpfGenerator.js';

const result = document.querySelector('.result');
const button = document.querySelector('.generateCPF-btt');

(() => {
    
    result.innerHTML = cpfGenerator();

    button.addEventListener('click', () => {
        result.innerHTML = cpfGenerator();
    });

})();