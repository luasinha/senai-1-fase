programa {
  funcao inicio() {
  real analise = 500.00
  real cliente = 350.00
  real horas

  escreva("A quantidade estimada de horas é: ")
  leia(horas)

  real totaldehoras = (horas * cliente)
  real totaldelucro = totaldehoras - analise

  escreva("O total de horas cobradas será: " + totaldehoras)

  escreva("\nJunin ira cobrar: R$" + totaldelucro)
  }
}
