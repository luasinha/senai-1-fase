programa {
  funcao inicio() {
    inteiro ordem = 1
    real gastos = 8000
    real faturamentoIng = 7500
    real faturamentoIt = 5000
    real faturamentototal = faturamentoIng + faturamentoIt
    real lucro = faturamentototal - gastos
    real porcentodelucro = (lucro / gastos) * 100

    escreva("quantidade gasta em suprimentos e mercadorias em R$: " + gastos)
    escreva("\nfaturamento em venda de ingressos em R$: " + faturamentoIng)
    escreva("\nfaturamento em venda de itens em R$: " + faturamentoIt)
    escreva("\no faturamento total é de: R$ " + faturamentototal)
    escreva("\no total de lucro obtido em R$: " + lucro)
    escreva("\no lucro percentual é de: " + porcentodelucro)



  }
}
