const mensaje = 'Hola mundo desde script.js';

console.log(mensaje.length);
console.log(mensaje.toUpperCase());
console.log(mensaje.toLowerCase());
console.log(mensaje.includes('mundo'));
console.log(mensaje.replace('mundo', 'JavaScript'));
console.log(mensaje.charAt(0));

const numeroPar = 42;

console.log(numeroPar);

let otroMensaje = 'Este es otro mensaje';
console.log(otroMensaje);
otroMensaje = 'Mensaje modificado';
console.log(otroMensaje);



const nombre = 'Pedro';
const edad = 20;

console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);


if (edad >= 18) {
    console.log(`${nombre} es mayor de edad.`);
} else {
    console.log(`${nombre} es menor de edad.`);
}

for (let i = 1; i <= mensaje.length; i++) {
    console.log(`Número: ${i}`);
}

for (const caracteres of mensaje) {
    console.log(`Letra: ${caracteres}`);
}

const array = [1, 2, 3, 4, 5];

array.push(6);
array.unshift(0);
console.log(array);
array.slice(2, 4);
console.log(array);
array.pop();
array.splice(2, 1);
array.indexOf(3);
array.includes(4);
array.reverse();
console.log(array.reverse);
array.join('-');

console.log(array.join(','));


function saludar(param) {
    console.log(`Esta es una función de saludo: ${param}`);
}

saludar('Joaquin el Rey de los PROMPTS');

const despedida = (param) => {
    console.log(`Esta es una función de despedida: ${param}`);
}

despedida('Ulises Duque de los Prompts');



const name = document.querySelector('.name');

name.textContent = 'Nicolas /';

const esIsograma = (palabra) => {
    const arrayLetras = [];
    for (const letra of palabra) {
     if (arrayLetras.includes(letra)) {
            return false;
        }
        arrayLetras.push(letra);
}
return console.log(`Es un isograma: ${palabra}`);
}
const anagrama = (palabra1, palabra2) => {
    const arrayLetras1 = palabra1.split('').sort();
    const arrayLetras2 = palabra2.split('').sort();
    return arrayLetras1.join('') === arrayLetras2.join('');
}

console.log(anagrama('amor', 'roma'));


const body = document.querySelector('body'); "MAS IMPORTANTE"
const body2 = document.getElementsByTagName('body')[0];
const byid = document.getElementById('byid');
const byclass = document.getElementsByClassName('byclass')[0];
const byname = document.getElementsByName('nombre')[0];

console.log(byname);
console.log(byid);
console.log(byclass);
console.log(body2);
console.log(body);


const buttons = document.querySelectorAll('.project-card button');
const projectCards = document.querySelectorAll('.project-card');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button){
            const id = button.dataset.id;

        projectCards.forEach((card) => {
            const cardId = card.dataset.card;

            if(cardId === id){
                card.classList.toggle('is-active');

                button.textContent = 'Ver Proyecto';

                if (card.classList.contains('is-active')) {
                    button.textContent = 'Cerrar Proyecto';
                }
            }
            // Si queremos seleccionar solamente una card.
            // else{
            //     card.classList.remove('is-active');
            // }
        });
        }
    });
});