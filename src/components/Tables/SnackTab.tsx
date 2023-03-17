import { Container } from "../Card"
import Snacks from '../../data/snacks.json'
import { Snack } from "../../interfaces/snack.interface"
import { Table } from "./Table"

const SnackTab = () => {
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
                        Snacks.map((snack: Snack) => (
                                <tr key={snack.name}>
                                    <td>{snack.name}</td>
                                    <td>{snack.price}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default SnackTab