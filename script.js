let usedNumbers = {'CIRCUITOS': [], 'ELETRIZAÇÃO - FORÇA ELÉTRICA': [], 'FÍSICA GERAL': [], 'FLUÍDOS': [], 'GRAVITAÇÃO': [],'HISTÓRIA DA FÍSICA':[],'LEIS DE NEWTON': [],'MOVIMENTO':[],'NATUREZA E PROPAGAÇÃO DA LUZ':[],'ONDAS MECÂNICAS':[],'QUANTIDADE DE MOVIMENTO':[],'TERMODINÂMICA':[],'TRABALHO E ENERGIA':[],'UNIDADES E GRANDEZAS FÍSICAS':[],'TODOS':[]};
// const maxNumbers = 5;
const has_tab = {'CIRCUITOS': 17, 'ELETRIZAÇÃO - FORÇA ELÉTRICA': 6, 'FÍSICA GERAL': 13, 'FLUÍDOS': 14, 'GRAVITAÇÃO': 7,'HISTÓRIA DA FÍSICA': 12,'LEIS DE NEWTON': 10,'MOVIMENTO':5,'NATUREZA E PROPAGAÇÃO DA LUZ':19,'ONDAS MECÂNICAS':9,'QUANTIDADE DE MOVIMENTO':6,'TERMODINÂMICA':8,'TRABALHO E ENERGIA':5,'UNIDADES E GRANDEZAS FÍSICAS':21, 'TODOS': 152};
const selectOption = document.getElementById('mySelect');


function generateRandomNumber() {
    // If all numbers have been used, reset the list
    let SelectedValue = selectOption.value;
    maxNumbers = has_tab[SelectedValue];
    if (usedNumbers[SelectedValue].length === maxNumbers) {
        usedNumbers[SelectedValue] = [];
    }
console.log(usedNumbers);
    // Generate a random number that hasn't been used yet
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * maxNumbers) + 1;
    } while (usedNumbers[SelectedValue].includes(randomNumber));
console.log(randomNumber);
    // Add the new number to the usedNumbers list
    usedNumbers[SelectedValue].push(randomNumber);
    // Display the generated number
    // document.getElementById('random-number').src = call_image(randomNumber).then(function (res) {
    //     return res.text();
    // });
    document.getElementById('random-number').src = call_image(SelectedValue,randomNumber);
    // document.getElementById('random-number').innerText = randomNumber;
}

function call_image(SelectedValue,num){
    return `${SelectedValue}/${num}.JPG`;
}
