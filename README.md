# JSChallenger


## Objetivo

##### A importância do desafio está em mostrar maturidade de código, raciocínio em enfrentar um problema que talvez não tenha passado ainda, fomentar o estudo/busca pelo conhecimento!

## 1 - Desafio Storage 

##### No sistema de storage locker da empresa X os lockers são agrupados por categorias e seus conteúdos. Este ano ao passar por uma vistoria no sistema foi descoberto que seus dados estão duplicados.(Veja o output 1 do sistema ).
##### Seu objetivo é ajudar essa empresa agrupando esses dados por categorias. (Veja o output 2 do sistema )  

##### Na primeira etapa (deve-se utilizar js)

## // OUTPUT 1

```{
    type: 'Categoria1',
    content[
      "xxxxx 1",
      "xxxxx 2"
    ]
  },
  {
    type: 'Categoria2',
    content[
      "xxxxx 1",
      "xxxxx 2"
    ]
  },
  {
    type: 'Categoria1',
   content: [
      "xxxxx 3",
    ]
  },
  {
    type: 'Categoria1',
    content: [
      "xxxxx 4",
    ]
  },
  {
    type: 'Categoria2',
    content: [
      "xxxxx 3",
    ]
  },
  {
    type: 'Categoria3',
    content: [
      "xxx 1",
    ]
  },
] ```

## OUTPUT 2

```{
    type: 'Categoria1',
    content: [
      "xxxxx 1",
      "xxxxx 2",
      "xxxxx 3",
      "xxxxx 4"
    ]
  },
  {
    type: 'Categoria2',
    content: [
      "xxxxx 1",
      "xxxxx 2",
      "xxxxx 3"
    ]
  },
  {
    type: 'Categoria3',
    content: [
      "xxxxx 1",
    ]
  } ```
