import { useSelector, useDispatch } from 'react-redux'
import { setMesaSelecionada } from "../../../redux/mesas/mesasSlice"
import mesaAberta from './assets/mesaAberta.png'
import mesaOcupada from './assets/mesaOcupada.png'

const Mesa = ({ mesa }) => {
  const { mesaSelecionada } = useSelector((state) => state.mesas);
  const dispatch = useDispatch();
  const handleSelecionarMesa = () => {
    dispatch(setMesaSelecionada(mesa.id));
  }
  let imgEstadoMesa;
  switch (mesa.estado) {
    case 'O':
      imgEstadoMesa = mesaOcupada;
      break;
    default:
      imgEstadoMesa = mesaAberta;
      break;
  }
  return (
    <div className="text-center" role="button" onClick={handleSelecionarMesa}>
      <img className={`w-100 ${mesaSelecionada == mesa.id ? "border border-secondary rounded" : ""}`} id={`mesa-${mesa.id}`} src={imgEstadoMesa} />
      <span>{mesa.id}</span>
    </div>
  )
}

export default Mesa