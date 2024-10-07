alert("vamos testar a sua sorte");
let satoroGojo =  45377891;
let resposta;
let tentativas =1;

while (resposta != satoroGojo){
    resposta = prompt("escolha um número de 1 a 1000000000");

if(resposta== satoroGojo){
    console.log(`Para Bens ${satoroGojo} com ${satoroGojo} com ${tentativas}`); 
}
else{
   if(satoroGojo> resposta){
       alert(`o numero é maior que ${resposta}`);
   }

   else {
       alert(`o numero é menor que ${resposta}`);
   }

}

}