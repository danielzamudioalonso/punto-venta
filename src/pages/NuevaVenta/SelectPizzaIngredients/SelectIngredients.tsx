import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { getIngredients } from "../../../api"
import { Container, ContainerSelectList } from "../../../components/Card"
import { Ingredient } from "../../../interfaces/indegrient.interface"

type Props = {
    ingredients: Array<Ingredient>
    setIngredients: Dispatch<SetStateAction<Array<Ingredient>>>
}

const SelectIngredients = ({ ingredients, setIngredients }:Props) => {
    const [listIngredients, setListIngredients] = useState<Array<Ingredient>>()

    useEffect(() => {
        const getListIngredients = async() => {
            const response = await getIngredients()
            setListIngredients(response.data)
        }
        getListIngredients()
    }, [])

    const handleOnClick = (select: Ingredient) => {
        if(ingredients.find((ingredient: Ingredient) => ingredient.name === select.name)){
            const filter = ingredients.filter((ingredient: Ingredient) => ingredient.name !== select.name)
            setIngredients(filter)
            return
        }
        setIngredients([...ingredients, select])
    }
    
    return(
        <ContainerSelectList>
            <Container style={{ color: '#fff', padding: '6px 12px', backgroundColor: '#0bb0f8' }}>
                Ingredientes
            </Container>
            <ul>
                {
                    listIngredients?.map((ingredient: Ingredient) => (
                        <li
                            key={ingredient.name}
                            onClick={() => handleOnClick(ingredient)} 
                            className={
                                ingredients.find((ingredientSelect: Ingredient) => ingredientSelect.name === ingredient.name)
                                    ? 'Select' : ''
                            }
                        >
                            {ingredient.name}
                        </li>   
                    ))
                }
            </ul>
        </ContainerSelectList>
    )
}

export default SelectIngredients