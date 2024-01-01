class Queue {

    constructor() {
        this.count = 0;
        this.lowestCount = 0; // manter controle do primeiro elemento da pilha 
        this.items = {};
    }

    enqueue(elemento){
        // Inserção de elementos na fila
        this.items[this.count] = elemento;
        this.count++;
    }
    dequeue(){
        // Remoção de elementos da fila
        if(this.isEmpty()){
            return undefined;
        }
        // Armazena o item a ser removido
        const result = this.items[this.lowestCount]
        
        // Remove o elemento do topo da pilha
        
        delete this.items[this.lowestCount]
        // Incrementa o contador 
        this.lowestCount++;

        // Diminuir a contagem de items (resolve o problema das posições vazias)
        this.count--;

        // Reindexa os elementos restantes (pode ser inificiente grandes conjuntos de dados)
        this.items = Object.values(this.items)

        // Retorna o elemento removido
        return result;
    }
    isEmpty(){
        return this.count === 0;
    }
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
    size(){
        // Retorna o tamanho da pilha
        return this.count;
    }
    peek(){
        // Retorna primeiro elemento da pilha
        return this.items[this.lowestCount];
    }
    last(){
        // Retorna ultimo elemento da pilha
        return this.items[this.count - 1];
    }
    showElementsPositions(){
        for(let i=0; i< this.count; i++){
            console.log(`Posicao: ${i} || Elemento: ${this.items[i]}`);
        }
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.toString());
console.log(`Elementros dentro da minha fila: [${queue.toString()}]`);

queue.enqueue('John');
queue.enqueue('Jack');
console.log(`Elementros dentro da minha fila: [${queue.toString()}]`);
// adicionar outro element
queue.enqueue('Camila');
console.log(`Elementros dentro da minha fila: [${queue.toString()}]`);
console.log('================================================================')
console.log(`Tamanho da fila: ${queue.size()}`);
console.log(`Está vazia? ${queue.isEmpty()}`);
console.log(`Primeiro elemento da fila: ${queue.peek()}`);
console.log(`Ultimo elemento da fila: ${queue.last()}`);
console.log('================================================================')
queue.showElementsPositions();
console.log('================================================================')

console.log(`Remover elemento da fila: ${queue.dequeue()}`);
console.log(`Elementros dentro da minha fila: [${queue.toString()}]`);
console.log('================================================================')

queue.showElementsPositions();
console.log('================================================================')

console.log(`Remover elemento da fila: ${queue.dequeue()}`);
console.log(`Elementros dentro da minha fila: [${queue.toString()}]`);
queue.showElementsPositions();
console.log('================================================================')
