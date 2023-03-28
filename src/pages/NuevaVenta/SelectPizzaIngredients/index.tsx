import { useEffect, useState } from "react"
import { StepperButton } from "../../../components/Buttons/Buttons"
import { Container } from "../../../components/Card"
import { Ingredient } from "../../../interfaces/indegrient.interface"
import { Pizza, SalePizza } from "../../../interfaces/pizza.interface"
import SelectIngredients from "./SelectIngredients"
import SelectPizzas from "./SelectPizzas"
import { useSaleContext } from "../SaleContext"
import InformationCard from "./InformationCard"

const SelectPizzaIngredients = () => {
    const [ingredients, setIngredients] = useState<Array<Ingredient>>([])
    const [pizza, setPizza] = useState<Pizza>()
    const { salePizzas, setSalePizzas } = useSaleContext()

    const handleOnClick = () => {
        if(pizza){
            const newSalePizza: SalePizza = {
                pizza,
                ingredients
            }
            setSalePizzas([...salePizzas, newSalePizza])
            setPizza(undefined)
            setIngredients([])
        }
    }
console.log(salePizzas)
    return(
        <Container>
            <Container style={{ padding: '30px', display: 'flex', justifyContent: 'space-between' }}>
                <SelectPizzas pizza={pizza} setPizza={setPizza} />
                <SelectIngredients ingredients={ingredients} setIngredients={setIngredients} />
            </Container>

            <Container>
                <StepperButton onClick={handleOnClick} style={{ marginBottom: '16px' }}>
                    Añadir Pizza
                </StepperButton>
                <Container style={{ display: 'flex', gap: '20px' }}>
                    {
                        salePizzas && 
                            salePizzas.map((salePizza: SalePizza) => (
                                <InformationCard pizza={salePizza.pizza} ingredients={salePizza.ingredients} />
                            ))
                            
                            //salePizzas.map((salePizza: SalePizza) => (salePizza.pizza.size + salePizza.ingredients.map((ingredient: Ingredient) => (' '+ingredient.name))))
                    }
                </Container>
            </Container>
        </Container>
    )
}

export default SelectPizzaIngredients