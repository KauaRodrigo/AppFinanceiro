async function buscarDadosResumo() {
   let oDados = await fetch("https://script.google.com/macros/s/AKfycbz6cLjp6VDjqHR5SBVT6LLxASqBlhwaaYcynmDB6mykVEbRGVcu4L9p74dFJ3KsoFtZCg/exec?req=getResumo&aba=Resumo");   

   oDados = await oDados.json();

   document.getElementById("totalDespesas").textContent = `R$ ${parseFloat(oDados.totalDespesas).toFixed(2)}`;
   document.getElementById("totalReceitas").textContent = `R$ ${parseFloat(oDados.totalReceitas).toFixed(2)}`;
   document.getElementById("saldoFinal").textContent = `R$ ${parseFloat(oDados.saldoFinal).toFixed(2)}`;
}

$(() => {
   buscarDadosResumo()
});