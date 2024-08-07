import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OrganizacaoDasMesas from '../pages/OrganizacaoDasMesas.jsx'
import PedidosInativos from '../pages/PedidosInativos'
import AdicionarNovosRecursos from '../pages/AdicionarNovosRecursos'
import Relatorios from '../pages/Relatorios'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<OrganizacaoDasMesas />} />
                    <Route path={"/pedidosinativos"} element={<PedidosInativos />} />
                    <Route path={"/adicionarnovosrecursos"} element={<AdicionarNovosRecursos />} />
                    <Route path={"/relatorios"} element={<Relatorios />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App