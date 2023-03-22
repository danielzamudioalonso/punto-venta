import { Card, Container } from '../../components/Card'
import {
    Cart,
    User,
    Basket,
    AddCircle
} from 'grommet-icons'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <Container style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', gap: '30px', padding: '30px' }}>
            <Card onClick={() => navigate('/nueva-venta')}>
                <Cart size='large' />
                <h1>Nueva Venta</h1>
            </Card>
            <Card onClick={() => {navigate('/productos')}}>
                <Basket size='large' />
                <h1>Poductos</h1>
            </Card>
            <Card onClick={() => navigate('/clientes')}>
                <User size='large' />
                <h1>Clientes</h1>
            </Card>
            <Card >
                <AddCircle size='large' />
                <h1>Nuevo Producto</h1>
            </Card>

        </Container>
    )
}

export default Home