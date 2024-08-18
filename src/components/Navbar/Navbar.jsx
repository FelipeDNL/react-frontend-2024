import { Link } from 'react-router-dom'
import trigo from './assets/trigo.png'
import trigo2 from './assets/trigo2.png'

const Navbar = ({ selectedIndex }) => {
  return (
    <div className="container">

      <div className="row text-center my-3">
        <div className="col-md-2 d-none d-md-block">
          <img src={trigo} alt="trigo.png" />
        </div>
        <div className="col-md-8 my-auto">
          <h1>Ristorante e Pizzaria Fornatto</h1>
        </div>
        <div className="col-md-2 d-none d-md-block">
          <img src={trigo2} alt="trigo2.png" />
        </div>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className={`nav-link ${selectedIndex == 0 ? `active` : ``}`} to={"/"}>Organização das Mesas</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${selectedIndex == 1 ? `active` : ``}`} to={"/pedidosinativos"}>Pedidos Inativos</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${selectedIndex == 2 ? `active` : ``}`} to={"/adicionarnovosrecursos"}>Adicionar novos recursos</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${selectedIndex == 3 ? `active` : ``}`} to={"/relatorios"}>Relatórios</Link>
        </li>
      </ul>
      
    </div>
  )
}
export default Navbar