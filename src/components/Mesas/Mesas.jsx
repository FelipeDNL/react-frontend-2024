import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMesas } from "../../redux/mesas/mesasSlice" // Pego a action setMesas para usar no componente
import Mesa from './Mesa/Mesa'

const Mesas = () => {
  // Pego uma informação do estado global slice mesas
  const { mesas } = useSelector((state) => state.mesas);
  const dispatch = useDispatch(); // Define o dispatch para usar as actions
  useEffect(() => {
    // Não podemos usar funções assíncronas no callback do useEffect, então podemos fazer isso para contornar
    const fetchData = async () => {
      try {
        const apiUrl = 'http://localhost:5000/api/mesa';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Não foi possível buscar as mesas");
        }
        const data = await response.json(); // converto o response em json, pq se não não consigo ver os dados
        dispatch(setMesas(data)); // Salva as informações no estado global slice mesas, usando uma action
      } catch (error) {
        console.error(`Erro: ${error}`);
      }
    }
    fetchData(); // Chama a função fetchData
  }, []);
  
  return (
    <div className="row">
      {/* Imprime os objetos dentro a array mesas */}
      {mesas.map((mesa) => (
        <div key={mesa.id} className="col-xl-4 col-lg-6">
          <Mesa mesa={mesa} />
        </div>
      ))}
    </div>
  )
}

export default Mesas