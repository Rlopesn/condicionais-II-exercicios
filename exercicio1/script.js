const number = Number(prompt('Insira um numero'));

if(number % 2 === 0){
    if(number % 3 === 0){
        console.log(`O ${number}, é divisivel por 2 e por 3`)
    }
}else{
    console.log(`o numero ${number}, não é divisivel por 2 e por 3`)  
}


if(number % 2 === 0 && number % 3 === 0){
    console.log(`O ${number}, é divisivel por 2 e por 3`)
}else{
    console.log(`o numero ${number}, não é divisivel por 2 e por 3`)
}