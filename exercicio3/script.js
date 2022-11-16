const nome = prompt('Qual seu nome?')
const idade = Number(prompt('Qual a sua idade?'))

if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}




nome === 'José' ? console.log('Oi, Zé') : console.log(`Olá, ${nome}`)

idade >= 18 ? console.log('pode tirar CNH') : console.log('ainda não pode tirar CNH')