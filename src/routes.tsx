import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import LaDolceVita from './Pages/LaDolceVita'
import HiokiSushi from './Pages/HiokiSushi'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/la-dolce-vita-trattoria" element={<LaDolceVita />} />
    <Route path="/hioki-sushi" element={<HiokiSushi />} />
  </Routes>
)

export default Rotas
