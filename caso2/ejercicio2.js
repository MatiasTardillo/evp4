function mostrarNumeros() {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);


    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Por favor, ingrese valores válidos para min y max.');
        return;
    }

    let numeros = [];
    for (let i = 0; i < 20; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numeroAleatorio);
    }

    let lista = document.getElementById('lista');
    lista.innerHTML = ''; 
    numeros.forEach((numero, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1} - ${numero}`;
        lista.appendChild(li);
    });
}