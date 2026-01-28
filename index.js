document.getElementById("formEntrada").addEventListener("submit", function (event) {
   event.preventDefault()

   criarEntrada()
})

document.getElementById("formSaida").addEventListener("submit", function (event) {
   event.preventDefault()

   criarSaida()
})

var iTotalEntradas = 0;
var iTotalSaidas   = 0;
var iLucro         = 0;

function criarEntrada() {
  const oEntrada = {
    tipo: "Entradas",
    data: document.getElementById("data").value,
    descricao: document.getElementById("servico").value,
    valor: Number(document.getElementById("valor").value)    
  }

  console.log("Entrada criada:", oEntrada)
  
  document.getElementById("formEntrada").reset()

  alert("Entrada salva com sucesso!")
  enviarEntrada(oEntrada)
  showMenu();
}

function criarSaida() {
   const oSaida = {
    tipo: "Saidas",
    data: document.getElementById("dataSaida").value,
    descricao: document.getElementById("descricaoSaida").value,
    valor: Number(document.getElementById("valorSaida").value),
    pagamento: document.getElementById("pagamento").value
  }

  console.log("Saída criada:", oSaida)
  
  document.getElementById("formSaida").reset()

  alert("Saída salva com sucesso!")
  enviarEntrada(oSaida)
  showMenu();
}

async function buscarDadosResumo() {
   const aEntradas = await fetch("https://script.google.com/macros/s/AKfycbywwaqcqs_FOp2t6hlarFD_zrJ4ABLPIIUKtkHPOZMxROJQOWOMjyYbzplx8zme2fOeMQ/exec?tipo=Movimentações");
   const aSaidas   = await fetch("https://script.google.com/macros/s/AKfycbywwaqcqs_FOp2t6hlarFD_zrJ4ABLPIIUKtkHPOZMxROJQOWOMjyYbzplx8zme2fOeMQ/exec?tipo=Movimentações");

   const dados = {
      aEntradas: await aEntradas.json(),
      aSaidas:   await aSaidas.json()
   };

   for(let oEntrada of dados.aEntradas) {
      iTotalEntradas += oEntrada.valor
   }

   for(let oSaida of dados.aSaidas) {      
      iTotalSaidas += oSaida.valor
   }   

   iLucro = iTotalEntradas - iTotalSaidas;

   document.getElementById("totalSaidas").textContent = `R$ ${iTotalSaidas}`;
   document.getElementById("totalEntradas").textContent = `R$ ${iTotalEntradas}`;
   document.getElementById("totalLucro").textContent = `R$ ${iLucro}`;
}

function enviarEntrada(oEntrada) {
   fetch("https://script.google.com/macros/s/AKfycbywwaqcqs_FOp2t6hlarFD_zrJ4ABLPIIUKtkHPOZMxROJQOWOMjyYbzplx8zme2fOeMQ/exec", {
      method: "POST",
      body: JSON.stringify(oEntrada)
   });
}

function fecharFormulario() {
   return showMenu();
}

function showMenu() {
   document.getElementById('containerEntrada').style.display = 'none';
   document.getElementById('containerSaida').style.display = 'none';
   document.getElementById('containerMenu').style.display = 'block';
}

function showFormEntrada() {
   document.getElementById('containerEntrada').style.display = 'block';
   document.getElementById('containerMenu').style.display = 'none';
}

function showFormSaida() {
   document.getElementById('containerSaida').style.display = 'block';
   document.getElementById('containerMenu').style.display = 'none';
}

buscarDadosResumo();