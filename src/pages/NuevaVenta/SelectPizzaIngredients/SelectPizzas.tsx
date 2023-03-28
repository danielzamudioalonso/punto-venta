import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { getPizzas } from "../../../api"
import { Container, ContainerSelectList } from "../../../components/Card"
import { Pizza } from "../../../interfaces/pizza.interface"
import { useSaleContext } from "../SaleContext"

type Props = {
    pizza: Pizza | undefined
    setPizza: Dispatch<SetStateAction<Pizza | undefined>>
}

const SelectPizzas = ({ pizza, setPizza }:Props) => {
    const [listPizzas, setListPizzas] = useState<Array<Pizza>>()

    useEffect(() => {
        const getListPizzas = async() => {
            const response = await getPizzas()
            setListPizzas(response.data)
        }
        getListPizzas()
    }, [])

    const handleOnClick = (select: Pizza) => {
        /*if(pizzas.find((drink: Pizza) => drink.size === select.size)){
            const filter = pizzas.filter((drink: Pizza) => drink.size !== select.size)
            setPizzas(filter)
            return
        }*/
        setPizza(select)
    }
    
    return(
        <ContainerSelectList>
            <Container style={{ color: '#fff', padding: '6px 12px', backgroundColor: '#0bb0f8' }}>
                Pizzas
            </Container>
            <ul>
                {
                    listPizzas?.map((pizzaList: Pizza) => (
                        <li
                            key={pizzaList.size}
                            onClick={() => handleOnClick(pizzaList)} 
                            className={
                                pizzaList.size === pizza?.size
                                    ? 'Select' : ''
                            }
                        >
                            {pizzaList.size}
                        </li>   
                    ))
                }
            </ul>
        </ContainerSelectList>
    )
}

export default SelectPizzas