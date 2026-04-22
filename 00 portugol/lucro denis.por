programa {
  funcao inicio() {
  //informacoes - variaveis
  real precototal, custo = 500, valorhora = 360, lucro
  inteiro horas
  // leituras - entradas
  escreva("Quantas horas foram estimadas? ")
  leia(horas)
  //processamentos - cálculos
  precototal = custo + horas * valorhora
  lucro = custo - valorhora
  // precototal = 500 + horas * 350
  // apresentar resultados
  escreva("O valor total recebido é: R$" + precototal)
  escreva("\nO lucro total recebido é: R$" + lucro)

  }
}
