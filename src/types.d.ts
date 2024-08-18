declare type RestaurantModel = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

declare interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
