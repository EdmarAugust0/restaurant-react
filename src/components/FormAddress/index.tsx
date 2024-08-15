import { useState } from 'react'
import { useFormik } from 'formik'

import Button from '../Button'

import * as Yup from 'yup'

import {
  ButtonGroup,
  Feedback,
  FormAddress,
  InputGroup,
  MiniInputGroup
} from './styles'
import { usePurchaseMutation } from '../../services/api'

type Props = {
  setNext: (open: boolean) => void
}

const Address = ({ setNext }: Props) => {
  const [toPayment, setToPayment] = useState(false)
  const [purchase, { isError, isLoading, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      numberHouse: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome deve ter no mínimo 5 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'Favor informar todos os numeros contando com o traço')
        .required('Campo obrigatório'),
      numberHouse: Yup.string().required('Campo obrigatório'),

      nameCard: Yup.string()
        .min(5, 'O nome deve ter no mínimo 5 caracteres')
        .required('Campo obrigatório'),
      numberCard: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string().required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log('aaa')

      purchase({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: values.numberHouse,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: values.cvv,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  if (isSuccess) {
    return (
      <Feedback>
        <h1>Pedido realizado - {data.orderId}</h1>
        <p className="margin-top">
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p className="margin-top">
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p className="margin-top">
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p className="margin-top">
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>

        <Button type="button" title="Concluir o pedido">
          Concluir
        </Button>
      </Feedback>
    )
  }

  if (toPayment) {
    return (
      <FormAddress onSubmit={form.handleSubmit}>
        <h1>Pagamento - Valor a pagar R$ 200,00 </h1>
        <div>
          <InputGroup>
            <label htmlFor="nameCard">Nome no cartão</label>
            <input
              type="text"
              id="nameCard"
              name="nameCard"
              value={form.values.nameCard}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('nameCard', form.errors.nameCard)}</small>
          </InputGroup>
          <MiniInputGroup>
            <InputGroup>
              <label htmlFor="numberCard">Número do cartão</label>
              <input
                type="text"
                id="numberCard"
                name="numberCard"
                value={form.values.numberCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('numberCard', form.errors.numberCard)}
              </small>
            </InputGroup>
            <InputGroup maxWidth="88px">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
            </InputGroup>
          </MiniInputGroup>
          <MiniInputGroup>
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                type="text"
                id="expiresMonth"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                type="text"
                id="expiresYear"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </small>
            </InputGroup>
          </MiniInputGroup>
        </div>
        <ButtonGroup>
          <Button
            type="submit"
            title="Finalizar pagamento"
            onClick={form.handleSubmit}
          >
            Finalizar pagamento
          </Button>
          <Button
            type="button"
            title="Voltar para a edição de endereço"
            onClick={() => setToPayment(false)}
          >
            Voltar para a edição de endereço
          </Button>
        </ButtonGroup>
      </FormAddress>
    )
  }
  return (
    <FormAddress onSubmit={form.handleSubmit}>
      <h1>Entrega</h1>
      <div>
        <InputGroup>
          <label htmlFor="name">Quem irá receber</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('name', form.errors.name)}</small>
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('address', form.errors.address)}</small>
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('city', form.errors.city)}</small>
        </InputGroup>
        <MiniInputGroup>
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cep', form.errors.cep)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="numberHouse">Número</label>
            <input
              type="text"
              id="numberHouse"
              name="numberHouse"
              value={form.values.numberHouse}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('numberHouse', form.errors.numberHouse)}
            </small>
          </InputGroup>
        </MiniInputGroup>
        <InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </InputGroup>
      </div>
      <ButtonGroup>
        <Button
          type="submit"
          title="Continuar com o pagamento"
          onClick={() => setToPayment(true)}
        >
          Continuar com o pagamento
        </Button>
        <Button
          type="button"
          title="Voltar para o carrinho"
          onClick={() => setNext(false)}
        >
          Voltar para o carrinho
        </Button>
      </ButtonGroup>
    </FormAddress>
  )
}

export default Address
