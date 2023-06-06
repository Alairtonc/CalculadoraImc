 // Função para calcular o IMC (Índice de Massa Corporal)

 function calcularIMC() {

    var peso = document.getElementById('peso').value;

    var altura = document.getElementById('altura').value;

    var resultado = document.getElementById('resultado');


  if (peso > 0 && altura > 0) {

     var imc = peso / (altura * altura);

     resultado.innerHTML = 'Seu IMC :  ' +  imc.toFixed(2);

     if (imc < 18.5) {
        classificacao.innerHTML = 'Você está abaixo do peso.';
      } else if (imc >= 18.5 && imc < 25) {
        classificacao.innerHTML = 'Seu peso está dentro do normal.';
      } else if (imc >= 25 && imc < 30) {
        classificacao.innerHTML = 'Você está acima do peso.';
      } else {
        classificacao.innerHTML = 'Você está obeso(a).';
      }

  } else {

    resultado.innerHTML = 'Por favor, insira valores válidos.';

  }

}