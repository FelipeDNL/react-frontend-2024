import React from 'react'
import BotaoAlterarRecebimentoItens from './BotaoAlterarRecebimentoItens/BotaoAlterarRecebimentoItens'
import BotaoAlterarEstadoImpressoItens from './BotaoAlterarEstadoImpressoItens/BotaoAlterarEstadoImpressoItens'
import BotaoAnularValorItens from './BotaoAnularValorItens/BotaoAnularValorItens'
import BotaoAlterarEstadoCupomGeradoItens from './BotaoAlterarEstadoCupomGeradoItens/BotaoAlterarEstadoCupomGeradoItens'
import BotaoNovoPedido from './BotaoNovoPedido/BotaoNovoPedido'
import BotaoAlterarPedido from './BotaoAlterarPedido/BotaoAlterarPedido'
import BotaoInativarPedido from './BotaoInativarPedido/BotaoInativarPedido'
import BotaoImprimirComandas from './BotaoImprimirComandas/BotaoImprimirComandas'
import BotaoGerarCupom from './BotaoGerarCupom/BotaoGerarCupom'
import BotaoInativarTodosPedidos from './BotaoInativarTodosPedidos/BotaoInativarTodosPedidos'

const BotoesPedidosMesa = () => {

  return (
    <>
      <div className="row">
        <div className="col-md-3 col-6 my-1">
          <BotaoAlterarRecebimentoItens />
        </div>
        <div className="col-md-4 col-6 my-1">
          <BotaoAlterarEstadoImpressoItens />
        </div>
        <div className="col-md-2 col-6 my-1">
          <BotaoAnularValorItens />
        </div>
        <div className="col-md-3 col-6 my-1">
          <BotaoAlterarEstadoCupomGeradoItens />
        </div>
        <div className="col-md-2 col-6 my-1">
          <BotaoNovoPedido />
        </div>
        <div className="col-md-2 col-6 my-1">
          <BotaoAlterarPedido />
        </div>
        <div className="col-md-2 col-6 my-1">
          <BotaoInativarPedido />
        </div>
        <div className="col-md-2 col-6 my-1">
          <BotaoImprimirComandas />
        </div>
        <div className="col-md-2 col-6 my-1">
          <BotaoGerarCupom />
        </div>
        <div className="col-md-2 col-6 my-1">
          <BotaoInativarTodosPedidos />
        </div>
      </div>
    </>
  )

}

export default BotoesPedidosMesa