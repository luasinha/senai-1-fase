programa {
  funcao inicio() {
    inteiro caminhoes
    real lucroporcaminhao, lucrototal
    lucroporcaminhao = (90 * 50) - 450
    // escreva(lucroporcaminhao)
    escreva("quantos caminhoes: ")
    leia(caminhoes)
    lucrototal = lucroporcaminhao * caminhoes
    escreva("lucro da temporada: " + lucrototal)
  }
}
