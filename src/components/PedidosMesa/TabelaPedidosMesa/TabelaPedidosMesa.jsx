import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setPedidosProdutosMesaSelecionados } from '../../../redux/pedidosMesa/pedidosMesaSlice'

const TabelaPedidosMesa = ({ pedidosProdutosMesa }) => {
    const { mesaSelecionada } = useSelector((state) => state.mesas);
    const { pedidosProdutosMesaSelecionados } = useSelector((state) => state.pedidosMesas);
    const dispatch = useDispatch();

    const handleRowClick = (linhaClicada) => {
        // Verifica se a linha já está selecionada
        const estaSelecionada = pedidosProdutosMesaSelecionados.includes(linhaClicada);
        if (estaSelecionada) {
            // Se já estiver selecionada, remove da lista de selecionadas
            const pedidosProdutosMesaSelecionadosAtualizados = pedidosProdutosMesaSelecionados.filter((linha) => linha !== linhaClicada);
            dispatch(setPedidosProdutosMesaSelecionados(pedidosProdutosMesaSelecionadosAtualizados));
            //console.log(pedidosProdutosMesaSelecionadosAtualizados);
        } else {
            dispatch(setPedidosProdutosMesaSelecionados([...pedidosProdutosMesaSelecionados, linhaClicada]));
            //console.log([...pedidosProdutosMesaSelecionados, linhaClicada]);
        }
    };

    // Apaga as mesas selecionadas quando troca de mesa
    useEffect(() => {
        dispatch(setPedidosProdutosMesaSelecionados([]));
        //console.log([]);
    }, [mesaSelecionada]);
    
    const corDaLinha = (pedidoProdutoMesa) => {
        if (pedidoProdutoMesa.estadoValorAnulado) return "table-secondary";
        if (pedidoProdutoMesa.estadoPago) return "table-success";
        if (pedidoProdutoMesa.estadoCupomImpresso) return "table-info";
        if (pedidoProdutoMesa.estadoComandaImpressa) return "table-warning";
        if (pedidoProdutoMesa.estadoRecebido) return "table-light";
        return "";
    } 

    return (
        <table className="table table-hover text-center">
            <thead className="table-secondary">
                <tr>
                    <th scope="col">ID Pedido <i className="fa fa-fw fa-sort"></i></th>
                    <th scope="col">Nome Item <i className="fa fa-fw fa-sort"></i></th>
                    <th scope="col">Quantidade <i className="fa fa-fw fa-sort"></i></th>
                    <th scope="col">Valor <i className="fa fa-fw fa-sort"></i></th>
                    <th scope="col">Horário <i className="fa fa-fw fa-sort"></i></th>
                    <th scope="col">Pago? <i className="fa fa-fw fa-sort"></i></th>
                </tr>
            </thead>
            <tbody>
                {pedidosProdutosMesa.map((pedidoProdutoMesa) => (
                    <tr
                        key={`${pedidoProdutoMesa.Pedido_id}/${pedidoProdutoMesa.Produto_id}`}
                        onClick={() => handleRowClick(`${pedidoProdutoMesa.Pedido_id}/${pedidoProdutoMesa.Produto_id}`)}
                        className={pedidosProdutosMesaSelecionados.includes(`${pedidoProdutoMesa.Pedido_id}/${pedidoProdutoMesa.Produto_id}`)
                            ? `border border-dark border-3 ${corDaLinha(pedidoProdutoMesa)}`
                            : `${corDaLinha(pedidoProdutoMesa)}`
                        }
                    >
                        <td>{pedidoProdutoMesa.Pedido_id}</td>
                        <td>{pedidoProdutoMesa.nome}</td>
                        <td>{pedidoProdutoMesa.quantidade}</td>
                        <td>{pedidoProdutoMesa.precoVenda}</td>
                        <td>{pedidoProdutoMesa.dataAtualizacao}</td>
                        <td>{pedidoProdutoMesa.estadoPago}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelaPedidosMesa