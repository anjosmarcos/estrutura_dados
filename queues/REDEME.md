# Filas em JavaScript

Uma fila é uma estrutura de dados que segue o princípio do "primeiro a entrar, primeiro a sair" (FIFO - First-In-First-Out). Em JavaScript, podemos implementar filas utilizando arrays ou listas encadeadas.

## Operações básicas

As operações básicas em uma fila são:

- `enqueue(item)`: adiciona um elemento ao final da fila.
- `dequeue()`: remove e retorna o elemento do início da fila.
- `isEmpty()`: verifica se a fila está vazia.
- `size()`: retorna o número de elementos na fila.
- `front()`: retorna o elemento do início da fila sem removê-lo.


### Utilizando arrays

Podemos implementar uma fila utilizando um array em JavaScript. O elemento adicionado ao final da fila é removido do início da fila.
