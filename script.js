/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo oppure in console la bici con peso minore.*/

const bici = [
    {
        nome: 'bici1',
        peso: 23,
    },
    {
        nome: 'bici2',
        peso: 20,
    },
    {
        nome: 'bici3',
        peso: 20,
    },
    {
        nome: 'bici4',
        peso: 15,
    }
];

let bicileggera = bici[0];
for (let i = 0; i < bici.length; i++) {
    const curebici = bici[i];
    if (curebici.peso < bicileggera.peso) {
        bicileggera = curebici;
    }
}

console.log(bicileggera);




/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const sq = [
    {
        nome: 'sq1',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'sq2',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'sq3',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'sq4',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

const max = 100;
const min = 0;
const newArray = [];

for (let i = 0; i < sq.length; i++) {
    const curesq = sq[i];
    curesq.puntiFatti = (random(max, min));
    curesq.falliSubiti = (random(max, min));
    newArray.push(curesq.nome, curesq.falliSubiti);
}


console.log(newArray);




function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};




/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS*/


const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const newArray2 = [];

function selectArray(array, num1, num2) {
    for (let i = num1; i <= num2; i++) {
        const cureArray = array[i];
        if (i >= 0 && i < array.length) {
            newArray2.push(cureArray);
        }
    }

    return newArray2;
}

console.log(selectArray(array , 2 , 6));

