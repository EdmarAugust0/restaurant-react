import { useState } from 'react'
import { useFormik } from 'formik'

import Button from '../Button'

import * as Yup from 'yup'

import { ButtonGroup, FormAddress, InputGroup, MiniInputGroup } from './styles'

type Props = {
  setNext: (open: boolean) => void
}

const Address = ({ setNext }: Props) => {
  const [toPayment, setToPayment] = useState(true)

  const formAddress = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      numberHouse: '',
      complement: ''
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
      numberHouse: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const formPayment = useFormik({
    initialValues: {
      nameCard: '',
      numberCard: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      nameCard: Yup.string()
        .min(5, 'O nome deve ter no mínimo 5 caracteres')
        .required('Campo obrigatório'),
      numberCard: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string().required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessageAddress = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formAddress.touched
    const isInvalid = fieldName in formAddress.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const getErrorMessagePayment = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formPayment.touched
    const isInvalid = fieldName in formPayment.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  if (toPayment) {
    return (
      <form onSubmit={formPayment.handleSubmit}>
        <FormAddress>
          <h1>Pagamento - Valor a pagar R$ 200,00 </h1>
          <div>
            <InputGroup>
              <label htmlFor="nameCard">Nome no cartão</label>
              <input
                type="text"
                id="nameCard"
                name="nameCard"
                value={formPayment.values.nameCard}
                onChange={formPayment.handleChange}
                onBlur={formPayment.handleBlur}
              />
              <small>
                {getErrorMessagePayment(
                  'nameCard',
                  formPayment.errors.nameCard
                )}
              </small>
            </InputGroup>
            <MiniInputGroup>
              <InputGroup>
                <label htmlFor="numberCard">Número do cartão</label>
                <input
                  type="text"
                  id="numberCard"
                  name="numberCard"
                  value={formPayment.values.numberCard}
                  onChange={formPayment.handleChange}
                  onBlur={formPayment.handleBlur}
                />
                <small>
                  {getErrorMessagePayment(
                    'numberCard',
                    formPayment.errors.numberCard
                  )}
                </small>
              </InputGroup>
              <InputGroup maxWidth="88px">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formPayment.values.cvv}
                  onChange={formPayment.handleChange}
                  onBlur={formPayment.handleBlur}
                />
                <small>
                  {getErrorMessagePayment('cvv', formPayment.errors.cvv)}
                </small>
              </InputGroup>
            </MiniInputGroup>
            <MiniInputGroup>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={formPayment.values.expiresMonth}
                  onChange={formPayment.handleChange}
                  onBlur={formPayment.handleBlur}
                />
                <small>
                  {getErrorMessagePayment(
                    'expiresMonth',
                    formPayment.errors.expiresMonth
                  )}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={formPayment.values.expiresYear}
                  onChange={formPayment.handleChange}
                  onBlur={formPayment.handleBlur}
                />
                <small>
                  {getErrorMessagePayment(
                    'expiresYear',
                    formPayment.errors.expiresYear
                  )}
                </small>
              </InputGroup>
            </MiniInputGroup>
          </div>
          <ButtonGroup>
            <Button
              type="submit"
              title="Finalizar pagamento"
              onClick={formPayment.handleSubmit}
            >
              Finalizar pagamento
            </Button>
            <Button type="button" title="Voltar para a edição de endereço">
              Voltar para a edição de endereço
            </Button>
          </ButtonGroup>
        </FormAddress>
      </form>
    )
  }
  return (
    <form onSubmit={formAddress.handleSubmit}>
      <FormAddress>
        <h1>Entrega</h1>
        <div>
          <InputGroup>
            <label htmlFor="name">Quem irá receber</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formAddress.values.name}
              onChange={formAddress.handleChange}
              onBlur={formAddress.handleBlur}
            />
            <small>
              {getErrorMessageAddress('name', formAddress.errors.name)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formAddress.values.address}
              onChange={formAddress.handleChange}
              onBlur={formAddress.handleBlur}
            />
            <small>
              {getErrorMessageAddress('address', formAddress.errors.address)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formAddress.values.city}
              onChange={formAddress.handleChange}
              onBlur={formAddress.handleBlur}
            />
            <small>
              {getErrorMessageAddress('city', formAddress.errors.city)}
            </small>
          </InputGroup>
          <MiniInputGroup>
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formAddress.values.cep}
                onChange={formAddress.handleChange}
                onBlur={formAddress.handleBlur}
              />
              <small>
                {getErrorMessageAddress('cep', formAddress.errors.cep)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="numberHouse">Número</label>
              <input
                type="text"
                id="numberHouse"
                name="numberHouse"
                value={formAddress.values.numberHouse}
                onChange={formAddress.handleChange}
                onBlur={formAddress.handleBlur}
              />
              <small>
                {getErrorMessageAddress(
                  'numberHouse',
                  formAddress.errors.numberHouse
                )}
              </small>
            </InputGroup>
          </MiniInputGroup>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={formAddress.values.complement}
              onChange={formAddress.handleChange}
              onBlur={formAddress.handleBlur}
            />
          </InputGroup>
        </div>
        <ButtonGroup>
          <Button
            type="submit"
            title="Continuar com o pagamento"
            onClick={formAddress.handleSubmit}
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
    </form>
  )
}

export default Address
