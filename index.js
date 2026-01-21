document.getElementById("formEntrada").addEventListener("submit", function (event) {
   event.preventDefault()

   criarEntrada()
})

document.getElementById("formSaida").addEventListener("submit", function (event) {
   event.preventDefault()

   criarSaida()
})

function criarEntrada() {
  const oEntrada = {
    tipo: "Entradas",
    data: document.getElementById("data").value,
    descricao: document.getElementById("servico").value,
    valor: Number(document.getElementById("valor").value),
    pagamento: document.getElementById("pagamento").value
  }

  console.log("Entrada criada:", oEntrada)
  
  document.getElementById("formEntrada").reset()

  alert("Entrada salva com sucesso!")
  enviarEntrada(oEntrada)
}

function criarSaida() {
   const oSaida = {
    tipo: "Saidas",
    data: document.getElementById("dataSaida").value,
    descricao: document.getElementById("descricaoSaida").value,
    valor: Number(document.getElementById("valorSaida").value),    
  }

  console.log("Saída criada:", oSaida)
  
  document.getElementById("formSaida").reset()

  alert("Saída salva com sucesso!")
  enviarEntrada(oSaida)
}

function enviarEntrada(oEntrada) {
   fetch("https://script.google.com/macros/s/AKfycbxLcZjpFrlwfqyZIFA-bGPO7Lh4nGUhzTM9FPqfjNDG5X_AVOboysq7DwdEeKm1pLjCPg/exec", {
      method: "POST",
      body: JSON.stringify(oEntrada)
   });
}
