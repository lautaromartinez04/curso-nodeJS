const generarNumeroAleatorio = () => {
    numero=Math.floor(Math.random() * 100) + 1;
    console.log (''+numero+'')
    return Math.round(numero)
    
};
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) {
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};