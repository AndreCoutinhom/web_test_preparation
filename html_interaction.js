const nome = "Caim";

  document.title = "SEM PARADA";

  var risada = function() {
    if (true) {
      let oi = "Hello! ";
      let fala = "Welcome to the Internet!";
      
      document.write(oi);

      console.log(fala);
    }
  }

  risada();

  let nomeDaEmpresa = document.getElementById("fName");

  document.write("<br>" + "Welcome to " + nomeDaEmpresa.innerHTML + "!!!" + "<br>");
