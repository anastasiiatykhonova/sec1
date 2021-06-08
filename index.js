const Calc = require('./calc');

console.log("Тихонова Анастасія");
console.log("Демонстрація Ряду Тейлора ch(x):");

var steps = 4;

var res = Calc.TaylorCh(2, steps);
console.log(res);