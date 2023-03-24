import { useEffect, useState } from "react"
import { getClients } from "../../api"
import { Container, ContainerSelectList } from "../../components/Card"
import ClientesTab from "../../components/Tables/ClientesTab"
import { Cliente } from "../../interfaces/cliente.interface"
import { useSaleContext } from "./SaleContext"

const SelectCliente = () => {
    const { cliente, setCliente } = useSaleContext()

    const handleOnClick = (selectClient: Cliente) => {
        setCliente(selectClient)
    }
    
    return(
        <ClientesTab nameSelect={cliente} onClick={handleOnClick} />
    )
}

export default SelectCliente