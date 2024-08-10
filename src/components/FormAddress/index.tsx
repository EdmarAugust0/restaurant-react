import Button from '../Button'
import { ButtonGroup, FormAddress, InputGroup, MiniInputGroup } from './styles'

type Props = {
  setNext: (open: boolean) => void
}

const Address = ({ setNext }: Props) => {
  return (
    <FormAddress>
      <h1 className="white">Entrega</h1>
      <div>
        <InputGroup>
          <label className="white" htmlFor="name">
            Quem irá receber
          </label>
          <input className="black" type="text" id="name" />
        </InputGroup>
        <InputGroup>
          <label className="white" htmlFor="address">
            Endereço
          </label>
          <input className="black" type="text" id="address" />
        </InputGroup>
        <InputGroup>
          <label className="white" htmlFor="city">
            Cidade
          </label>
          <input className="black" type="text" id="city" />
        </InputGroup>
        <MiniInputGroup>
          <InputGroup>
            <label className="white" htmlFor="cep">
              CEP
            </label>
            <input className="black" type="text" id="cep" />
          </InputGroup>
          <InputGroup>
            <label className="white" htmlFor="numberHouse">
              Número
            </label>
            <input className="black" type="text" id="numberHouse" />
          </InputGroup>
        </MiniInputGroup>
        <InputGroup>
          <label className="white" htmlFor="complement">
            Complemento (opcional)
          </label>
          <input className="black" type="text" id="complement" />
        </InputGroup>
      </div>
      <ButtonGroup>
        <Button type="submit" title="Continuar com o pagamento">
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
