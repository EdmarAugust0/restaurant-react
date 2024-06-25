class RestaurantModel {
  image: string
  title: string
  avaliation: string
  description: string
  infos: string[]
  to: string
  id: number

  constructor(
    image: string,
    title: string,
    avaliation: string,
    description: string,
    infos: string[],
    to: string,
    id: number
  ) {
    this.image = image
    this.title = title
    this.avaliation = avaliation
    this.description = description
    this.infos = infos
    this.to = to
    this.id = id
  }
}

export default RestaurantModel
