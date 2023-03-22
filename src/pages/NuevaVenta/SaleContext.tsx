import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"
import { Cliente } from "../../interfaces/cliente.interface"
import { Drink } from "../../interfaces/drink.interface"
import { Pizza } from "../../interfaces/pizza.interface"
import { Snack } from "../../interfaces/snack.interface"

interface saleContext {
    pizzas: Array<Pizza>
    setPizzas: Dispatch<SetStateAction<Array<Pizza>>>
    drinks: Array<Drink>
    setDrinks: Dispatch<SetStateAction<Array<Drink>>>
    snacks: Array<Snack>
    setSnacks: Dispatch<SetStateAction<Array<Snack>>>
    cliente: Cliente | undefined
    setCliente: Dispatch<SetStateAction<Cliente | undefined>>
    total: number | undefined
    setTotal: Dispatch<SetStateAction<number | undefined>>
}

export const createSaleContext = createContext<saleContext>({
    pizzas: [],
    setPizzas: () => [],
    drinks: [],
    setDrinks: () => [],
    snacks: [],
    setSnacks: () => [],
    cliente: undefined,
    setCliente: () => undefined,
    total: undefined,
    setTotal: () => undefined,
})

export const ProviderSaleContext = ({ children }: any) => {
    const [pizzas, setPizzas] = useState<Array<Pizza>>([])
    const [drinks, setDrinks] = useState<Array<Drink>>([])
    const [snacks, setSnacks] = useState<Array<Snack>>([])
    const [cliente, setCliente] = useState<Cliente>()
    const [total, setTotal] = useState<number>()

    const values: saleContext = {
        pizzas,
        setPizzas,
        drinks,
        setDrinks,
        snacks,
        setSnacks,
        cliente,
        setCliente,
        total,
        setTotal
    }

    return(
        <createSaleContext.Provider value={values}>
            {children}
        </createSaleContext.Provider>
    )
}

export const useSaleContext = () => {
    return useContext(createSaleContext)
}