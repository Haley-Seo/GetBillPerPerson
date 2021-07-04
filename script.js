const bill = document.querySelector('#bill_value');
const tip = document.querySelector('#tip_value');
const number = document.querySelector('#number_of_party_value');



const calc_button = document.querySelector('#calc_button');
calc_button.onclick = calculate;



function calculate(){
    if (bill.value === 0) {
        alert('Total Bill should be bigger than $0');
        bill.focus();
        return;
    }
    if (tip.value > 100) {
        alert('Tip percentage should be between 0~100');
        tip.focus();
        return;
    }
    if (number.value === '') {
        alert('Number of party should be bigger than 0');
        number.focus();
        return;
    }
    const total = document.querySelector('#total');
    const totalValue = bill.value*1 * (100+tip.value*1)/100;
    total.textContent = '$'+totalValue;
    const perPerson = document.querySelector('#per_person');
    perPerson.textContent = '$' + (totalValue * 1 / number.value*1).toFixed(2);
}



