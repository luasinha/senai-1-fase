let pesobruto, tara, pesocarga

pesobruto = Number(prompt("Peso do caminhão e carga:"))
tara = Number(prompt("Peso total da tara:"))

pesocarga = pesobruto - tara

console.log("o peso total da carga é: " + pesocarga)