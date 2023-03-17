import { Container } from '../Card'
import Pizzas from '../../data/pizzas.json'
import { Pizza } from '../../interfaces/pizza.interface'
import { Table } from './Table'

const PizzaTab = () => {
    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Tamaño</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Pizzas.map((pizza: Pizza) => (
                                <tr key={pizza.size}>
                                    <td>{pizza.size}</td>
                                    <td>{pizza.price}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default PizzaTab