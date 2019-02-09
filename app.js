

var input = document.getElementById('input');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn0 = document.getElementById('btn0');
var btnDot = document.getElementById('btn-dot');

var sumaBtn = document.getElementById('Suma');
var restaBtn = document.getElementById('Resta');
var multiBtn = document.getElementById('Multi');
var diviBtn = document.getElementById('Divi');
var result = document.getElementById('result');
var clear = document.getElementById('clear');

var valor1, valor2, operador;


sumaBtn.addEventListener('click', function(){
    valor1 = Number(input.innerHTML);
    operador = 'suma';
    input.innerHTML = '';
})

restaBtn.addEventListener('click', function(){
    valor1 = Number(input.innerHTML);
    operador = 'resta';
    input.innerHTML = '';
})

multiBtn.addEventListener('click', function(){
    valor1 = Number(input.innerHTML);
    operador = 'multi';
    input.innerHTML = '';
})

diviBtn.addEventListener('click', function(){
    valor1 = Number(input.innerHTML);
    operador = 'divi';
    input.innerHTML = '';
})

result.addEventListener('click', function() {
    valor2 = Number(input.innerHTML);
    var resultado = 0;
    if (operador === 'suma') {
        resultado = valor1 + valor2;
    }   else if (operador === 'resta') {
        resultado = valor1 - valor2;
    }   else if (operador === 'multi') {
        resultado = valor1 * valor2;
    }   else if (operador === 'divi') {
        resultado = valor1 / valor2;
    }
    input.innerHTML = resultado;
})



btn1.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "1";
    input.innerHTML = valorActual;
});

btn2.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "2";
    input.innerHTML = valorActual;
});

btn3.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "3";
    input.innerHTML = valorActual;
});

btn4.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "4";
    input.innerHTML = valorActual;
});


btn5.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "5";
    input.innerHTML = valorActual;
});

btn6.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "6";
    input.innerHTML = valorActual;
});

btn7.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "7";
    input.innerHTML = valorActual;
});

btn8.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "8";
    input.innerHTML = valorActual;
});

btn9.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "9";
    input.innerHTML = valorActual;
});

btn0.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "0";
    input.innerHTML = valorActual;
});

//btnDot.addEventListener('click', function() {
//    input.innerHTML = '.';
//});


