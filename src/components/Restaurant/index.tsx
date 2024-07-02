import { Card, Description, HeaderCard, Infos, Title } from './styles'

import Button from '../Button'
import Tag from '../Tag'

import estrela from '../../assets/image/estrela.svg'
import { useState } from 'react'
import { RestaurantModel } from '../../Pages/Home'

export type Props = {
  image: string
  title: string
  avaliation: number
  description: string
  tipo: string
  to: string
}

const Restaurant = ({
  avaliation,
  description,
  image,
  tipo,
  to,
  title
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 187) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        <Tag>{tipo}</Tag>
      </Infos>
      <HeaderCard>
        <Title>{title}</Title>
        <div>
          <span>{avaliation}</span>
          <img src={estrela} alt="estrela" />
        </div>
      </HeaderCard>
      <Description>{getDescricao(description)}</Description>
      <div>
        <Button type="link" to={to} title="Veja o menu">
          Saiba mais
        </Button>
      </div>
    </Card>
  )
}

export default Restaurant
