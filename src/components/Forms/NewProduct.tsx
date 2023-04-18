import React, { useState } from 'react'
import styled from 'styled-components'
import { postDrink, postIngredient, postPizza, postSnack } from '../../api/BM'
import { MediumButton } from '../../components/Buttons/Buttons'
import { Container } from '../../components/Card'
import { Drink } from '../../interfaces/drink.interface'
import { Ingredient } from '../../interfaces/indegrient.interface'
import { Pizza } from '../../interfaces/pizza.interface'
import { Snack } from '../../interfaces/snack.interface'
import { Input } from './Inputs'

const ContainerForm = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    gap: '16px'
})

const ContainerInputIngredients = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    '& > small': {
        padding: '10px 20px',
        color: 'gray'
    }
})

type Props = {
    typeOfForm: 'pizza' | 'snack' | 'drink' | 'ingredients'
}

const NewProduct = ({ typeOfForm }: Props) => {
    const [price, setPrice] = useState<number>(0)
    const [brand, setBrand] = useState<string>('')
    const [size, setSize] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [ingredients, setIngredients] = useState<Array<string>>([])

    const handleOnClick = async() => {
        if(typeOfForm === 'pizza'){
            const newPizza: Pizza = {
                size,
                price
            }
            const { status } = await postPizza(newPizza)
            console.log(status)
        }
        if(typeOfForm === 'snack'){
            const newSnack: Snack = {
                name,
                price
            }
            const { status } = await postSnack(newSnack)
            console.log(status)
        }
        if(typeOfForm === 'drink'){
            const newDrink: Drink = {
                brand,
                name,
                price
            }
            const { status } = await postDrink(newDrink)
            console.log(status)
        }
        if(typeOfForm === 'ingredients'){
            const newIngredient: Ingredient = {
                name,
                ingredients
            }
            const { status } = await postIngredient(newIngredient)
            console.log(status)
        }
        setPrice(0)
        setBrand('')
        setName('')
        setSize('')
        setIngredients([])
    }

    const handleOnChangeSize = (e: React.FormEvent<HTMLInputElement>) => {
        setSize(e.currentTarget.value)
    }

    const handleOnChangeBrand = (e: React.FormEvent<HTMLInputElement>) => {
        setBrand(e.currentTarget.value)
    }

    const handleOnChangeName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const handleOnChangePrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.valueAsNumber)
    }

    const handleOnChangeIngredients = (e: React.FormEvent<HTMLInputElement>) => {
        const ingredients = e.currentTarget.value
        setIngredients(ingredients.split(','))
    }

    return(
        <ContainerForm>
            {
                typeOfForm === 'pizza' &&
                    <Input 
                        type='text'
                        placeholder='Tamaño'
                        value={size}
                        onChange={(e) => handleOnChangeSize(e)}
                    />
            }
            {
                (typeOfForm === 'snack' || typeOfForm === 'drink' || typeOfForm === 'ingredients') &&
                    <Input 
                        type='text'
                        placeholder='Nombre'
                        value={name}
                        onChange={(e) => handleOnChangeName(e)}
                    />
            }
            {
                typeOfForm !== 'ingredients' &&
                    <Input 
                        type='number'
                        placeholder='Precio'
                        value={price}
                        onChange={(e) => handleOnChangePrecio(e)}
                    />
            }
            {
                typeOfForm === 'drink' &&
                    <Input 
                        type='text'
                        placeholder='Marca'
                        value={brand}
                        onChange={(e) => handleOnChangeBrand(e)}
                    />
            }
            {
                typeOfForm === 'ingredients' &&
                    <ContainerInputIngredients>
                        <Input 
                            type='text'
                            placeholder='Ingredientes'
                            value={ingredients}
                            onChange={(e) => handleOnChangeIngredients(e)}
                        />
                        <small>Separar cada ingrediente por comas</small>
                    </ContainerInputIngredients>
            }
            <Container style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <MediumButton onClick={handleOnClick}>
                    Guardar
                </MediumButton>
            </Container>
        </ContainerForm>
    )
}

export default NewProduct