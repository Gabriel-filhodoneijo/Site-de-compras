let saldoAtual = parseFloat(prompt("Digite o valor que você tem"));
let compra = parseFloat(prompt("Digite o valor de sua compra"));

if(saldoAtual > compra){
    alert('A compra ocorreu corretamente')
}
else if(saldoAtual < compra){
    alert('Saldo insuficiente')
}
else{
    alert('A compra ocorreu corretamente')
}