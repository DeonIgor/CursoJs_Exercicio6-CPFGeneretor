import generateDigit from './generateDigit.js';

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
    const cpf = [];

    for (let i = 0; i < 9; i++) {
        cpf.push(rand(0, 9));
    }

    cpf.push(generateDigit(cpf));
    cpf.push(generateDigit(cpf));

    return (
        cpf.slice(0, 3).join('') + '.' +
        cpf.slice(3, 6).join('') + '.' +
        cpf.slice(6, 9).join('') + '-' +
        cpf.slice(9, 11).join('')
    );
}