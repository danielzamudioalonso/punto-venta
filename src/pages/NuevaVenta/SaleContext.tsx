import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
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
    total: number
    setTotal: Dispatch<SetStateAction<number>>
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
    total: 0,
    setTotal: () => 0,
})

export const ProviderSaleContext = ({ children }: any) => {
    const [pizzas, setPizzas] = useState<Array<Pizza>>([])
    const [drinks, setDrinks] = useState<Array<Drink>>([])
    const [snacks, setSnacks] = useState<Array<Snack>>([])
    const [cliente, setCliente] = useState<Cliente>()
    const [total, setTotal] = useState<number>(0)

    
    useEffect(() => {
        let totalPizzas = 0
        if(pizzas.length > 0){
            pizzas.map((pizza: Pizza) => {
                totalPizzas = totalPizzas + pizza.price
            })
        }
        setTotal(totalPizzas)
        //console.log('pizzas: '+totalPizzas)

        let totalDrinks = totalPizzas
        if(drinks.length > 0){
            drinks.map((drink: Drink) => {
                totalDrinks = totalDrinks + drink.price
            })
        }
        setTotal(totalDrinks)
        //console.log('drinks: '+totalDrinks)

        let totalSnacks = totalDrinks
        if(snacks.length > 0){
            snacks.map((snack: Snack) => {
                totalSnacks = totalSnacks + snack.price
            })
        }
        setTotal(totalSnacks)
        //console.log('snacks: '+totalSnacks)

        totalPizzas = 0
        totalDrinks = 0
        totalSnacks = 0
    }, [pizzas, drinks, snacks])

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