import { Container } from '../Card'
import { Table } from './Table'
import { getIngredients } from '../../api'
import { useEffect, useState } from 'react'
import { Ingredient } from '../../interfaces/indegrient.interface'

const Ingredients = () => {
    const [ingredients, setIngredients] = useState<Array<Ingredient>>()
    
    useEffect(() => {
        const getListIngredients = async() => {
            const response = await getIngredients()
            setIngredients(response.data)
        }
        getListIngredients()
    }, [])

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ingredientes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingredients &&
                            ingredients.map((ingredient: Ingredient) => (
                                <tr key={ingredient.name}>
                                    <td>{ingredient.name}</td>
                                    <tr>
                                        {ingredient.ingredients.map((ingredients: string) => (
                                            <td>{ingredients}</td>
                                        ))}
                                    </tr>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Ingredients