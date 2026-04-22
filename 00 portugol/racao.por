programa {
  funcao inicio() {
  real racao = 10
  real gramas
  
  escreva("Quantas gramas de ração granel você vai querer? ")
  leia(gramas)

  real kg = (gramas / 100) * racao

  escreva("\nCustou R$" + kg)

  }
}
