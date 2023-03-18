import { Container } from "../Card"
import { Snack } from "../../interfaces/snack.interface"
import { Table } from "./Table"
import { useEffect, useState } from "react"
import { getDrinks } from "../../api"
import { Drink } from "../../interfaces/drink.interface"

const DrinksTab = () => {
    const [drinks, setDrinks] = useState<Array<Drink>>()

    useEffect(() => {
        const getListDrinks = async() => {
            const response = await getDrinks()
            setDrinks(response.data)
        }
        getListDrinks()
    }, [])

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drinks &&
                            drinks.map((drink: Drink) => (
                                    <tr key={drink.name}>
                                        <td>{drink.name}</td>
                                        <td>{drink.brand}</td>
                                        <td>$ {drink.price}</td>
                                    </tr>
                                )
                            )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default DrinksTab