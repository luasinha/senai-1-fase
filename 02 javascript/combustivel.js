let mediaconsumo, distanciatotal, combustiveltotal

distanciatotal = Number(prompt("Quantos km total percorrida?"))
combustiveltotal = Number(prompt("Qual o total de combustível gasto?"))

mediaconsumo = distanciatotal/combustiveltotal

console.log("O consumo medio de litros por km será: " + mediaconsumo.toFixed(3) + "km/l")