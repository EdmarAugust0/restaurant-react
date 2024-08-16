import { ClipLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <ClipLoader color={colors.orange} />
    </Container>
  )
}

export default Loader
