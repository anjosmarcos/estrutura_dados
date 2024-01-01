# Map em JavaScript

O Map é uma coleção de pares chave valor onde que a chave pode ser qualquer tipo. O map lembra a ordem original em que os elemento s foram adicionados a ele, siguinifica que os dados podem ser recuperados da mesma ordem que foram inseridoos. 

## Caracteristicas do MAP (objeto e do Array)
- como um objeto, ele suporta estrutura de prares chave valor
- como um array, ele lembra da ordem de inserção

### MAP X Objeto
#### Quando usalos 

O map tem caracteristicas tanto do objeto quanto array. Entretanto, o map
é mais como um objeto do que um array devido sua natureza de armazenamento dos dados no formato de chave-valor 

Use mep quando:

- as suas necessidades não são tao simples assim, podemos criar chaves não sejam strings. Armazenar um obj como uma chave é uma abordagem muito poderosa. O map dá a você esse poder por padrão

- Precisa de uma estrutura de dados onde os elementos possam ser solicitados. Os objetos regulares não matêm a ordem suas entradads.

Use um objeto quando:

- Não tem nenhuma das necessidades acimas listadas
- Vc depende de JSON.parse(), asim um map não pode ser analisado por ele.