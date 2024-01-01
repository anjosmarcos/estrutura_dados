// Algoritmo para converter base 

// Função para converter um número decimal para uma base especificada
function baseConverter(decimal, base) {
    // Inicializa uma pilha vazia para armazenar os restos
    var stack = []
    // Inicializa a variável rest com o valor decimal
    var rest = decimal
    // String com os dígitos possíveis para representar números em bases até 16
    var digits = '0123456789ABCDEF'

    // Enquanto o valor de rest for maior que 0
    while (rest > 0) {
        // Empilha o resto da divisão de rest pela base
        stack.push(rest % base)
        // Atualiza o valor de rest com a parte inteira da divisão de rest pela base
        rest = Math.floor(rest / base)
    }

    // Inicializa uma string vazia para representar o número na base especificada
    var baseString = ''
    // Enquanto a pilha não estiver vazia
    while (stack.length > 0) {
        // Remove o elemento do topo da pilha, usa ele como índice na string digits e adiciona o dígito correspondente à baseString
        baseString += digits[stack.pop()]
    }

    // Retorna a string que representa o número na base especificada
    return baseString
}

// Testa a função baseConverter com diferentes bases
console.log('BaseConverter - NUM = 200')
console.log(baseConverter(200, 16)) // Converte o número 200 para base 16 (hexadecimal)
console.log(baseConverter(200, 10)) // Converte o número 200 para base 10 (decimal)
console.log(baseConverter(200, 8))  // Converte o número 200 para base 8 (octal)
console.log(baseConverter(200, 2))  // Converte o número 200 para base 2 (binário)
console.log(baseConverter(200, 3))  // Converte o número 200 para base 3 (triângulo)
console.log(baseConverter(200, 4))  // Converte o número 200 para base 4 (quadrado)
console.log(baseConverter(200, 5))  // Converte o número 200 para base 5 (pentagonal)
console.log(baseConverter(200, 6))  // Converte o número 200 para base 6 (hexagonal)