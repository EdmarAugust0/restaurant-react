import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Cardapio from './Pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio/:id" element={<Cardapio />} />
  </Routes>
)

export default Rotas
