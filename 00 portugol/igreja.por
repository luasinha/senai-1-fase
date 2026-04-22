programa {
  funcao inicio() {
    real custosmensais = 2000
    real doacoes = 500
    real dizimos = 800
    real doacoesedizimos = doacoes + dizimos
    real falta = custosmensais - doacoesedizimos

    escreva("o total de custos mensais da igreja é de: R$" + custosmensais)
    escreva("\no total de doaçoes e dizimos recebidos no dia é de: R$" + doacoesedizimos)
    escreva("\nfalta R$" + falta)
    escreva(" para pagar completamente os custos mensais")
  }
}
