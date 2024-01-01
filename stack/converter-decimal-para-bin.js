// Convertendo numero decimal para binario

// Função para converter um número decimal em binário
function decimalToBinary1(decimal) {
    // Inicializa uma pilha vazia para armazenar os restos
    const stack = []
    // Inicializa a variável rest com o valor decimal
    let rest = decimal
    
    // Enquanto o valor de rest for maior que 0
    while (rest > 0) {
        // Empilha o resto da divisão de rest por 2
        stack.push(rest % 2)
        // Atualiza o valor de rest com a parte inteira da divisão de rest por 2
        rest = Math.floor(rest / 2)
    }
    
    // Inverte a ordem dos elementos na pilha e os une em uma string
    return stack.reverse().join('')
}

console.log('Coverter 10 em Binario')
console.log(decimalToBinary1(200))
console.log('----------------------------------------------------------------')


// ***********************************************
// Usar o metodo toString para converter dec para bin
// Uma forma facil e nativa do JS, apenas passo o argurmento (2) 
// indica que o valor deve ser "covertido" para binario


function decimalToBinary2(decimal) {
    var binario = decimal.toString(2)
    return binario
}

console.log(decimalToBinary2(200))
