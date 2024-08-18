import React from 'react'

const CabecalhoPedidosMesa = () => {

  return (
    <>
      <div className="row my-2">
        <div className="col-md-3 d-flex align-items-center">
          <label className="small mx-1" htmlFor="id-input-mesa">Mesa:</label>
          <input className="form-control form-control-sm mx-1" type="text" id="id-input-mesa" />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <label className="small mx-1" htmlFor="id-input-estado">Estado:</label>
          <input className="form-control form-control-sm mx-1" type="text" id="id-input-estado" />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <label className="small mx-1" htmlFor="id-input-total">Total:</label>
          <input className="form-control form-control-sm mx-1" type="text" id="id-input-total" />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <label className="small mx-1" htmlFor="id-input-servico">Cobrar serviço?</label>
          <input className="form-check-input form-check-lg mx-1" type="checkbox" id="id-input-servico" />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <label className="small mx-1" htmlFor="id-input-total-calculado">Total calculado:</label>
          <input className="form-control form-control-sm mx-1" type="text" id="id-input-total-calculado" />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <label className="small mx-1" htmlFor="id-input-total-recebido">Total recebido:</label>
          <input className="form-control form-control-sm mx-1" type="text" id="id-input-total-recebido" />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <label className="small mx-1" htmlFor="id-input-total-receber">Total receber:</label>
          <input className="form-control form-control-sm mx-1" type="text" id="id-input-total-receber" />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <label className="small mx-1" htmlFor="id-input-total-selecionado">Total selecionado:</label>
          <input className="form-control form-control-sm mx-1" type="text" id="id-input-total-selecionado" />
        </div>
      </div>
    </>
  )

}

export default CabecalhoPedidosMesa