function Stack() {
    var itens = []

    this.push = function(item){ 
        // adiciona um novo item a pilha
        itens.push(item)
    }
    this.pop = function() {
        // remove o elemento que esta no topo da pilha
        return itens.pop()
    }
    this.peek = function() {
        // retorna o elemento que esta no topo da pilha
        return itens[itens.length - 1]
    }
    this.isEnpty = function() {
        // informa se a pilha esta vazia ou não
        return itens.length == 0
    }
    this.clear = function() {
        // limpa a pilha
        itens = []
    }
    this.size = function() {
        // retorna o tamanho da pilha
        return itens.length
    }
    this.print = function() {
        // imprime a pilha no console
        console.log(itens.toString())
    }
    this.full = function() {
        // verifica se a pilha esta cheia
        return itens.length >= this.maxSize
    }

}


var pilha = new Stack()
console.log(pilha.isEnpty())

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.print()
console.log(`Topo da pilha: ${pilha.peek()}`)
console.log(`Tamanho da pilha: ${pilha.size()}`)
console.log(`Pilha vazia: ${pilha.isEnpty()}`)
console.log(`Removendo o topo da pilha: ${pilha.pop()}`)
pilha.print()
console.log(`Pilha cheia: ${pilha.full()}`)
console.log(`Topo da pilha: ${pilha.peek()}`)
console.log(`Limpando a pilha ...`)
pilha.clear()
console.log(`Pilha vazia: ${pilha.isEnpty()}`)
