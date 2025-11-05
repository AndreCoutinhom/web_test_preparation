let humans = ["Jax", "Ragatha", "Gangle", "Caim", "Kingur", "Zooble", "Bubble", "Kaufmo"];

console.log(humans);

console.log("Wait. Caim and Bubble and humans and Kaufmo... isn't human anymore. Also, Pomni is missing!");

humans.splice(3, 1);
humans.splice(6, 1);

humans.unshift("Pomni");

humans.pop();

console.log(humans);

for (let i of humans) {
  document.write("Tem " + i + "<br>");
}

/* OU
for (let i in humans) {
  document.write("Tem " + humans[i] + "<br>")
}
*/
