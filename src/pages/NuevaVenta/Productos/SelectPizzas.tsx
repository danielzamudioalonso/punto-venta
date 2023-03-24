import { useEffect, useState } from "react"
import { getPizzas } from "../../../api"
import { Container, ContainerSelectList } from "../../../components/Card"
import { Pizza } from "../../../interfaces/pizza.interface"
import { useSaleContext } from "../SaleContext"

const SelectPizzas = () => {
    const [listPizzas, setListPizzas] = useState<Array<Pizza>>()
    const { pizzas, setPizzas } = useSaleContext()

    useEffect(() => {
        const getListPizzas = async() => {
            const response = await getPizzas()
            setListPizzas(response.data)
        }
        getListPizzas()
    }, [])

    const handleOnClick = (select: Pizza) => {
        if(pizzas.find((drink: Pizza) => drink.size === select.size)){
            const filter = pizzas.filter((drink: Pizza) => drink.size !== select.size)
            setPizzas(filter)
            return
        }
        setPizzas([...pizzas, select])
    }
    
    return(
        <ContainerSelectList>
            <Container style={{ color: '#fff', padding: '6px 12px', backgroundColor: '#0bb0f8' }}>
                Pizzas
            </Container>
            <ul>
                {
                    listPizzas?.map((pizza: Pizza) => (
                        <li
                            key={pizza.size}
                            onClick={() => handleOnClick(pizza)} 
                            className={
                                pizzas.find((pizzasSelect: Pizza) => pizzasSelect.size === pizza.size)
                                    ? 'Select' : ''
                            }
                        >
                            {pizza.size}
                        </li>   
                    ))
                }
            </ul>
        </ContainerSelectList>
    )
}

export default SelectPizzas