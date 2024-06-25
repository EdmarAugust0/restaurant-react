import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'

import { GlobalCss } from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Rotas />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
