import { Container } from '../Card'
import { Pizza } from '../../interfaces/pizza.interface'
import { Table } from './Table'
import { getPizzas } from '../../api'
import { useEffect, useState } from 'react'

const PizzasTab = () => {
    const [pizzas, setPizzas] = useState<Array<Pizza>>()
    
    useEffect(() => {
        const getListPizzas = async() => {
            const response = await getPizzas()
            setPizzas(response.data)
        }
        getListPizzas()
    }, [])

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
                        pizzas && 
                            pizzas.map((pizza: Pizza) => (
                                    <tr key={pizza.size}>
                                        <td>{pizza.size}</td>
                                        <td>$ {pizza.price}</td>
                                    </tr>
                                )
                            )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default PizzasTab