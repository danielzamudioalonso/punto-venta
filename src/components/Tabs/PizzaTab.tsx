import { Container } from '../Card'
import Pizzas from '../../data/pizzas.json'
import { Pizza } from '../../interfaces/pizza.interface'

const PizzaTab = () => {
    return(
        <Container>
            <table>
                <tr>
                    <th>Tamaño</th>
                    <th>Precio</th>
                </tr>
                {
                    Pizzas.map((pizza: Pizza) => {
                        return (
                            <tr key={pizza.size}>
                                <td>{pizza.size}</td>
                                <td>{pizza.price}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </Container>
    )
}

export default PizzaTab