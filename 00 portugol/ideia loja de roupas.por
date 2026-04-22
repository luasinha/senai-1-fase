programa {
  funcao inicio() {
 // Em uma loja, cada peça de roupa possui um preço fixo + uma taxa que varia de acordo com o material do utilizado na peça.

  inteiro opcao
  real camisa = 30.00
  real regata = 25.00
  real calca = 30.00
  real casaco = 35.00
  real precopagar 

  escreva("\n--- OPCOES DE ROUPAS ---\n")
  escreva("1 - R$30.00 Camisa\n")
  escreva("2 - R$25.00 Regata\n")
  escreva("3 - R$30.00 Calça\n")
  escreva("4 - R$35.00 Casaco\n")
  escreva("Escolha uma opção: ")
  leia(opcao)

  escolha(opcao) {
  caso 1:
  escreva("Peça selecionada: R$30.00 Camisa\n")
  precopagar = 30
  pare
  caso 2:
  escreva("Peça selecionada: R$25.00 Regata\n")
  precopagar = 25
  pare
  caso 3:
  escreva("Peça selecionada: R$30.00  Calça\n")
  precopagar = 30
  pare
  caso 4:
  escreva("Peça selecionada: R$35.00 Casaco\n")
  precopagar = 35
  pare

  }


 inteiro opcao2


  escreva("\n--- OPCOES DE TECIDOS ---\n")
  escreva("1 - taxa 20% poliester\n")
  escreva("2 - taxa 50% seda\n")
  escreva("3 - taxa 35% jeans\n")
  escreva("4 - taxa 75% couro\n")
  escreva("5 - taxa 35% algodão\n")
  escreva("Escolha uma opção: ")
  leia(opcao2)

  escolha(opcao2) {
  caso 1: 
  escreva("Tecido selecionado: poliester\n")
  precopagar = precopagar * 1.2
  pare
  caso 2:
  escreva("Tecido selecionado: seda\n")
  precopagar = precopagar * 1.5
  pare
  caso 3:
  escreva("Tecido selecionado: jeans\n")
  precopagar = precopagar * 1.35
  pare
  caso 4:
  escreva("Tecido selecionado: couro\n")
  precopagar = precopagar * 1.75
  pare
  caso 5:
  escreva("Tecido selecionado: algodão\n")
  precopagar = precopagar * 1.35
  pare

  }

 escreva("O total a pagar será: R$" + precopagar)

 }
}
