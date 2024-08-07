import Navbar from '../components/Navbar/Navbar'
import Mesas from '../components/Mesas/Mesas'
import PedidosMesa from '../components/PedidosMesa/PedidosMesa'

const OrganizacaoDasMesas = () => {
    return (
        <>
            <Navbar selectedIndex={0} />
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <Mesas />
                    </div>
                    <div className='col-10'>
                        <PedidosMesa />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrganizacaoDasMesas