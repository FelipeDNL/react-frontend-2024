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
          <a className={`nav-link ${selectedIndex == 0 ? `active` : ``}`} href="/">Organização das Mesas</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${selectedIndex == 1 ? `active` : ``}`} href="/pedidosinativos">Pedidos Inativos</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${selectedIndex == 2 ? `active` : ``}`} href="/adicionarnovosrecursos">Adicionar novos recursos</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${selectedIndex == 3 ? `active` : ``}`} href="/relatorios">Relatórios</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar