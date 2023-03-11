import { Container } from "../Card"
import Snacks from '../../data/snacks.json'
import { Snack } from "../../interfaces/snack.interface"

const SnackTab = () => {
    return(
        <Container>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
                {
                    Snacks.map((snack: Snack) => {
                        return (
                            <tr key={snack.name}>
                                <td>{snack.name}</td>
                                <td>{snack.price}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </Container>
    )
}

export default SnackTab