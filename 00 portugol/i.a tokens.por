programa {
  funcao inicio() {
  real prompt, caracters
  real valortoken = 5
  real valorcaracter = 1
  
  escreva("Quantos prompt serão enviados? ")
  leia(prompt)

  real totalprompt = valortoken * prompt
  
  escreva("Quantos caracters terão em cada prompt? ")
  leia(caracters)

  real totalcaracter = valorcaracter * caracters 
  real totaltoken = (totalcaracter * prompt) + totalprompt
  real dinheiro = totaltoken * 0.150

  escreva("O total de tokens que vai custar: " + totaltoken)
  escreva("\nO valor que será gasto em dinheiro: R$" + dinheiro)
    
  }
}
