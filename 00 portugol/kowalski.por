programa {
  funcao inicio() {
    real relatoriospf = 40
    real relatoriospj = 33
    real tempopf = 12
    real tempopj = 42
    real valorpf = 2350.00
    real valorpj = 8900.00

    real relatorios = relatoriospf + relatoriospj
    real tempo = tempopf + tempopj
    real valorRelatorios = valorpf + valorpj

    escreva("A quantidade total de relatorios é: " + relatorios)
    escreva("\nO tempo total trabalhado é: " + tempo + " horas")
    escreva("\nO valor total recebido é: R$" + valorRelatorios)

    escreva("\nA media de valor recebido para cada relatorio pf é: " + valorpf / relatoriospf)
    escreva("\nA media de valor recebido para cada relatorio pj é: " + valorpj / relatoriospj)

    escreva("\nA media de tempo gasto por relatorio pf é: " + tempopf / relatoriospf)
    escreva("\nA media de tempo gasto por relatorio pj é: " + tempopj / relatoriospj)

  }
}
