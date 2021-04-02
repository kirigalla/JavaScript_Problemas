const formatToMoney = (valor) => {
    return Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(valor);
  };
  
  const formulario = document.getElementById("formuilario1");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const nbr1 = parseInt(document.getElementById("nbr1").value);
    const nbr2 = parseInt(document.getElementById("nbr2").value);
    const resultado = document.getElementById("resultado1");
  
    let valor = 0;
  
    if (nbr1 && nbr2) {
      valor =
        nbr1 === nbr2 ? nbr1 * nbr2 : nbr1 > nbr2 ? nbr1 - nbr2 : nbr1 + nbr2;
  
      resultado.innerHTML = valor;
    } else {
      resultado.innerHTML = "Ingrese un valor correcto";
    }
  });
  
  const formulario2 = document.getElementById("formulario2");
  formulario2.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const nbr3 = parseInt(document.getElementById("nbr3").value);
    const nbr4 = parseInt(document.getElementById("nbr4").value);
    const nbr5 = parseInt(document.getElementById("nbr5").value);
  
    const resultado2 = document.getElementById("resultado2");
  
    if (nbr3 > nbr4 && nbr4 > nbr5) {
      resultado2.innerHTML = `El numero mayor es ${nbr3}`;
    } else if (nbr3 < nbr4 && nbr4 > nbr5) {
      resultado2.innerHTML = `El numero mayor es ${nbr4}`;
    } else {
      resultado2.innerHTML = `El numero mayor es ${nbr5}`;
    }
  });
  
  const formulario3 = document.getElementById("formulario3");
  formulario3.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const nbr6 = parseInt(document.getElementById("nbr6").value);
    const nbr7 = parseFloat(document.getElementById("nbr7").value);
    const resultado3 = document.getElementById("resultado3");
  
    let resultadoTotal = 0;
  
    if (nbr6 <= 40) {
      resultadoTotal = nbr6 * nbr7;
    } else if (nbr6 > 40 && nbr6 <= 48) {
      const horasExtrasAlDoble = nbr6 - 40;
      const costoHorasExtra = horasExtrasAlDoble * (nbr7 * 2);
      resultadoTotal = 40 * nbr7 + costoHorasExtra;
    } else {
      const horasExtrasAlTriple = nbr6 - 48;
      const costoHorasExtra1 = horasExtrasAlTriple * (nbr7 * 3);
      resultadoTotal = 40 * nbr7 + 8 * (nbr7 * 2) + costoHorasExtra1;
    }
  
    resultado3.innerHTML = `La paga es de ${formatToMoney(resultadoTotal)}`;
  });
  
  const formulario4 = document.getElementById("formulario4");
  formulario4.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const nbr8 = parseFloat(document.getElementById("nbr8").value);
    const nbr9 = parseFloat(document.getElementById("nbr9").value);
    const resultado4 = document.getElementById("resultado4");
  
    let resultadoTotal = 0;
  
    if (nbr9 < 1) {
      resultadoTotal = nbr8 * 0.05;
    } else if (nbr9 >= 1 && nbr9 < 2) {
      resultadoTotal = nbr8 * 0.07;
    } else if (nbr9 >= 2 && nbr9 < 5) {
      resultadoTotal = nbr8 * 0.1;
    } else if (nbr9 >= 5 && nbr9 < 10) {
      resultadoTotal = nbr8 * 0.15;
    } else {
      resultadoTotal = nbr8 * 0.2;
    }
  
    resultado4.innerHTML = `La utilidad es de ${formatToMoney(resultadoTotal)}`;
  });