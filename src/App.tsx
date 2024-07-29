import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Rotas from './routes'
import { store } from './store'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div>
          <Rotas />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
