// Atividade 1 – Verificar item no mercado

let mercado = ["arroz", "feijão", "macarrão", "açúcar", "leite"];

function verificarItem(item) {
  if (mercado.includes(item)) {
    console.log("✅ Item encontrado");
  } else {
    console.log("❌ Item não está na lista");
  }
}

console.log("\n--- Atividade 1 ---");
verificarItem("arroz");   // ✅
verificarItem("carne");   // ❌



// Atividade 2 – Sistema de login simples

let usuarios = ["Levi", "joao", "maria"];

function login(nome) {
  if (usuarios.includes(nome)) {
    console.log(`Bem-vindo, ${nome}!`);
  } else {
    console.log("Usuário não encontrado");
  }
}

console.log("\n--- Atividade 2 ---");
login("Levi");   // Bem-vindo
login("pedro");  // Não encontrado



// Atividade 3 – Filtrar jogadores maiores de 18 anos

let idades = [15, 17, 19, 22, 30, 14];

function filtrarMaiores(idades) {
  return idades.filter(idade => idade >= 18);
}

console.log("\n--- Atividade 3 ---");
console.log("Maiores de 18:", filtrarMaiores(idades)); // [19, 22, 30]

// ⚽ Atividade 4 – Trabalhando com .length

let times = ["Flamengo", "Corinthians", "Palmeiras", "São Paulo", "Grêmio"];

console.log("\n--- Atividade 4 ---");
console.log("Times:", times);
console.log("Quantidade de times:", times.length);

times.push("Cruzeiro", "Atlético-MG");
console.log("Novo tamanho do array:", times.length);
console.log("Times atualizados:", times);



// Atividade 5 – Usando includes + filter

let numeros = [1,2,3,4,5,6,7,8,9,10];

console.log("\n--- Atividade 5 ---");
console.log("O número 7 está no array?", numeros.includes(7));

let maioresQue5 = numeros.filter(num => num > 5);
console.log("Números maiores que 5:", maioresQue5);
