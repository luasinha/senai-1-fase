programa {
  funcao inicio() {
   real salario
   real moradia
   real agua
   real luz 
   real internet 
   real gasolina 
   real streaming
   real telefone

  escreva("Quanto Juca recebe de salário? R$")
  leia(salario)
  escreva("\nQuanto juca gasta com moradia? R$")
  leia(moradia)
  escreva("\nQuanto juca gasta com água? R$")
  leia(agua)
  escreva("\nQuanto juca gasta com luz? R$")
  leia(luz)
  escreva("\nQuanto juca gasta com internet? R$")
  leia(internet)
  escreva("\nQuanto juca gasta com gasolina? R$")
  leia(gasolina)
  escreva("\nQuanto juca gasta com streaming? R$")
  leia(streaming)
  escreva("\nQuanto juca gasta com telefone? R$")
  leia(telefone)
  
  real sobrou = salario - moradia - agua - luz - internet - gasolina - streaming - telefone

  escreva("\nJuca ainda tem R$" + sobrou + " restante")
  
    
  }
}
