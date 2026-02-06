async function buscarDadosResumo() {
   let oDados = await fetch("https://script.google.com/macros/s/AKfycbz6cLjp6VDjqHR5SBVT6LLxASqBlhwaaYcynmDB6mykVEbRGVcu4L9p74dFJ3KsoFtZCg/exec?req=getResumo&tipo=Resumo");   

   oDados = await oDados.json();

   document.getElementById("totalDespesas").textContent = `R$ ${oDados.totalDespesas}`;
   document.getElementById("totalReceitas").textContent = `R$ ${oDados.totalReceitas}`;
   document.getElementById("saldoFinal").textContent = `R$ ${oDados.saldoFinal}`;
}

$(() => {
   buscarDadosResumo()
});