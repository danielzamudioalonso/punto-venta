import { Container } from '../Card'
import { Table } from './Table'
import { Cliente } from '../../interfaces/cliente.interface'
import { useEffect, useState } from 'react'
import { getClients } from '../../api'
import { Input } from '../Forms/Inputs'

const ClientesTab = () => {
    const [clientes, setClientes] = useState<Array<Cliente>>()

    const getListClientes = async() => {
        const response = await getClients()
        setClientes(response.data)
    }
    useEffect(() => {
        getListClientes()
    }, [])

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const searchWord = e.currentTarget.value
        if(clientes){
            const newListClientes = clientes.filter((cliente: Cliente) => 
                    cliente.nombre.toLowerCase().includes(searchWord.toLowerCase())
                || cliente.direccion.toLowerCase().includes(searchWord.toLowerCase())
                || cliente.referencia.toLowerCase().includes(searchWord.toLowerCase())
            )
            setClientes(newListClientes)
        }
        if(searchWord.length === 0) getListClientes()
    }

    return(
        <Container>
            <Container style={{ padding: '30px 0' }}>
                <Input 
                    type='text'
                    placeholder='Buscar Cliente'
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