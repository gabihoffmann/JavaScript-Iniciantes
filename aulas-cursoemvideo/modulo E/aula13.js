// Repetições

/*
A declaração while cria um laço que executa uma rotina especifica enquanto 
a condição de teste for avaliada como verdadeira.
 A condição é avaliada antes da execução da rotina.
*/

var cont  = 1;
while (cont <= 5){
    console.log(`Olá, tudo bem? cont = ${cont}`);
    cont++
}// cuidado com o loopinfinito !


/**
 * A instrução do ... while cria um loop que executa uma instrução especificada até 
 * que a condição de teste seja avaliada como falsa.
 * A condição é avaliada após a execução da instrução,
 *  resultando na execução da instrução especificada pelo menos uma vez.
 */

 var aux = 1;
 do {
     console.log(`Olá, do while n: ${aux}`);
     aux++
 }while(aux <=5)
