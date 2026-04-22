programa {
  funcao inicio() {
  inteiro bombas = 7, shows
  real precobomba = 45.00
  real ingressos = 100.00

  escreva("Quantidade de shows marcados: ")
  leia(shows)

  inteiro totaldebombas = bombas*shows

  escreva("\nQuantidade de bombas necessarias: " + totaldebombas)

  escreva("\nIngressos vendidos: ")
  leia(ingressos)

  real custototal = totaldebombas * precobomba

  escreva("O custo total de bombas é R$" + custototal)
  
  }
}
