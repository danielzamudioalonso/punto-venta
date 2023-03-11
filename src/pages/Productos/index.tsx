import { Container } from '../../components/Card'
import { Pizza } from '../../interfaces/pizza.interface'
import pizzas from '../../data/pizzas.json'
import Snacks from '../../data/snacks.json'
import Sodas from '../../data/sodas.json'
import Tabs from '../../components/Tabs'

const Productos = () => {
    
    return(
        <Container>
            <Tabs 
                titles={['Pizzas', 'Snaks', 'Refrescos']}
            />
        </Container>
    )
}

export default Productos