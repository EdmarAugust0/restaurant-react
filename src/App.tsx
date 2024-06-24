import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Header from './components/Header'
import Footer from './components/Footer'
import Restaurants from './components/Restaurants'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Restaurants />
  }
])
function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <RouterProvider router={rotas} />
      </div>
      <Footer />
    </>
  )
}

export default App
