alert("vamos testar a sua sorte");
let satoroGojo =  21;
let resposta;

while (resposta != satoroGojo){
    chute = prompt("escolha um número de 1 a 100")

if(resposta== satoroGojo){
    console.log(`Para Bens ${resposta}`)
}
else{
   if(satoroGojo> resposta){
       alert(`o numero é menor maior que ${resposta}`)
   }
   else {
       alert(`o numero é menor que ${resposta}`)
   }
}
}