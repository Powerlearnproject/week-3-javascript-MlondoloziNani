let num1 = 0;
let num2 = 0;

function add() {
    const result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    updateChart('Add', result);
}


function subtract() {
    const result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    updateChart('Subtract', result);
}


function multiply() {
    const result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    updateChart('Multiply', result);
}


function divide() {
    if (num2 === 0) {
        console.error("Cannot divide by zero!");
        return NaN;
    }
    const result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
    updateChart('Divide', result);
}


document.getElementById('addBtn').addEventListener('click', () => {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    add();
});

document.getElementById('subtractBtn').addEventListener('click', () => {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    subtract();
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    multiply();
});

document.getElementById('divideBtn').addEventListener('click', () => {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    divide();
});


let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Operation Results',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChart(operation, result) {
    myChart.data.labels.push(operation);
    myChart.data.datasets[0].data.push(result);
    myChart.update();
}
