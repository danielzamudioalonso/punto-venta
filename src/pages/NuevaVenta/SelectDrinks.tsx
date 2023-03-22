import { useEffect, useState } from "react"
import { getDrinks } from "../../api"
import { Container, ContainerSelectList } from "../../components/Card"
import { Drink } from "../../interfaces/drink.interface"
import { useSaleContext } from "./SaleContext"

const SelectDrinks = () => {
    const [listDrinks, setListDrinks] = useState<Array<Drink>>()
    const { drinks, setDrinks } = useSaleContext()

    useEffect(() => {
        const getListDrinks = async() => {
            const response = await getDrinks()
            setListDrinks(response.data)
        }
        getListDrinks()
    }, [])

    const handleOnClick = (selectDrink: Drink) => {
        if(drinks.find((drink: Drink) => drink.name === selectDrink.name)){
            const filter = drinks.filter((drink: Drink) => drink.name !== selectDrink.name)
            setDrinks(filter)
            return
        }
        setDrinks([...drinks, selectDrink])
    }
    
    return(
        <ContainerSelectList>
            <Container style={{ color: '#fff', padding: '6px 12px', backgroundColor: '#0bb0f8' }}>
                Bebidas
            </Container>
            <ul>
                {
                    listDrinks?.map((drink: Drink) => (
                        <li 
                            onClick={() => handleOnClick(drink)} 
                            key={drink.name}
                            className={
                                drinks.find((drinkSelect: Drink) => drinkSelect.name === drink.name)
                                    ? 'Select' : ''
                            }
                        >
                            {drink.name}
                        </li>   
                    ))
                }
            </ul>
        </ContainerSelectList>
    )
}

export default SelectDrinks