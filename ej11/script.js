// declaramos el array 
let numeroApariciones = [];

// asignamos el valor inicial de 0 a cada posición de array
for (let i = 0; i < 13; i++){
    numeroApariciones.push(0);
}

// obtenemos números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados (36.000 veces)
for (let i = 0; i < 36000; i++) {

    let dado1 = Math.floor(Math.random() * 6 + 1);
    let dado2 = Math.floor(Math.random() * 6 + 1);

    console.log(dado1);
    console.log(dado2);

    let sumaDados = dado1 + dado2;
    console.log(`Suma de los dados: ${sumaDados}`);

    // asignamos el número de repeticiones a la posición con la suma que ha salido
    numeroApariciones[sumaDados] = numeroApariciones[sumaDados] + 1;
    
}
// quitamos dos posiciones del array original, ya que la suma mínima es 2
console.log(numeroApariciones.slice(2));