import { Container } from "../Card"
import { Table } from "./Table"
import { Cliente } from "../../interfaces/cliente.interface"
import { useEffect, useState } from "react"
import { getClients } from "../../api"

const ClientesTab = () => {
    const [clientes, setClientes] = useState<Array<Cliente>>()

    useEffect(() => {
        const getListClientes = async() => {
            const response = await getClients()
            setClientes(response.data)
        }
        getListClientes()
    }, [])

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const searchWord = e.currentTarget.value
        if(clientes){
            const newListClientes = clientes.filter((cliente: Cliente) => 
                cliente.nombre.toLowerCase().includes(searchWord.toLowerCase())
            )
            setClientes(newListClientes)
        }
    }

    return(
        <Container>
            <Container style={{ padding: '30px 0' }}>
                <input 
                    type="text"
                    placeholder="Buscar Cliente"
                    onChange={(e) => handleOnChange(e)}
                />
            </Container>
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
                        clientes  &&
                            clientes.map((cliente: Cliente) => (
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