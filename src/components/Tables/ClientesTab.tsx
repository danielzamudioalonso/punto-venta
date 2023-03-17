import { Container } from "../Card"
import { Table } from "./Table"
import Clientes from '../../data/clientes.json'
import { Cliente } from "../../interfaces/cliente.interface"

const ClientesTab = () => {
    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Referencia</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Clientes.map((cliente: Cliente) => (
                            <tr key={cliente.nombre}>
                                <th>{cliente.nombre}</th>
                                <th>{cliente.direccion}</th>
                                <th>{cliente.referencia}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default ClientesTab