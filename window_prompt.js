let idade = parseInt(window.prompt("Qual a sua idade criança??"));

  if (window.confirm("Tem certeza que sua idade é " + idade + "?")) {true};
  
  console.log("O usuário tem " + idade + " anos de idade" + "<br>");

  if (idade > 18) {
    document.write("Já sabe de onde vem os bebês... não é?");
  } else {
    document.write("A Internet é um ambiente familiar para ser desfrutado por todas as idades!");
  }
