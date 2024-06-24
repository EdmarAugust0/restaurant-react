import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Header from './components/Header'
import Footer from './components/Footer'
import RestaurantList from './components/RestaurantList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <RestaurantList />
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
