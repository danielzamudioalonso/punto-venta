import { Container } from "../Card"
import { Snack } from "../../interfaces/snack.interface"
import { Table } from "./Table"
import { useEffect, useState } from "react"
import { getSnacks } from "../../api"

const SnacksTab = () => {
    const [snacks, setSnacks] = useState<Array<Snack>>()

    useEffect(() => {
        const getListSnacks = async() => {
            const response = await getSnacks()
            setSnacks(response.data)
        }
        getListSnacks()
    }, [])

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        snacks &&
                            snacks.map((snack: Snack) => (
                                    <tr key={snack.name}>
                                        <td>{snack.name}</td>
                                        <td>$ {snack.price}</td>
                                    </tr>
                                )
                            )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default SnacksTab