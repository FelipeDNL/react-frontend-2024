import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setPedidosProdutosMesa } from '../../redux/pedidosMesa/pedidosMesaSlice'
import TabelaPedidosMesa from './TabelaPedidosMesa/TabelaPedidosMesa';
import CabecalhoPedidosMesa from './CabecalhoPedidosMesa/CabecalhoPedidosMesa';
import BotoesPedidosMesa from './BotoesPedidosMesa/BotoesPedidosMesa';

const PedidosMesa = () => {
  const { mesaSelecionada } = useSelector((state) => state.mesas);
  const { pedidosProdutosMesa } = useSelector((state) => state.pedidosMesas);
  //console.log(pedidosProdutosMesa);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mesaSelecionada != -1) {
      // não podemos usar funções assíncronas no callback do useEffect, então podemos fazer isso para contornar
      const fetchData = async () => {
        try {
          const apiUrl = `http://localhost:5000/api/pedidoproduto/ativo/mesa/${mesaSelecionada}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error("Não foi possível buscar as mesas");
          }
          const data = await response.json(); // converto o response em json, pq se não não consigo ver os dados
          dispatch(setPedidosProdutosMesa(data));
        } catch (error) {
          console.error(`Erro: ${error}`);
        }
      }
      fetchData(); // Chama a função fetchData
    }
  }, [mesaSelecionada]);

  if (mesaSelecionada == -1) {
    return (
      <></>
    );
  }

  return (
    <div>
      <CabecalhoPedidosMesa />
      <TabelaPedidosMesa pedidosProdutosMesa={pedidosProdutosMesa} />
      <BotoesPedidosMesa />
    </div>
  )

}

export default PedidosMesa