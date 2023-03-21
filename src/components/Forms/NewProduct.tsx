import { useState } from "react"
import styled from "styled-components"
import { postDrink, postPizza, postSnack } from "../../api/BM"
import { MediumButton } from "../../components/Buttons/Buttons"
import { Container } from "../../components/Card"
import { Drink } from "../../interfaces/drink.interface"
import { Pizza } from "../../interfaces/pizza.interface"
import { Snack } from "../../interfaces/snack.interface"
import { Input } from "./Inputs"

const ContainerForm = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    gap: '16px'
})

type Props = {
    typeOfForm: 'pizza' | 'snack' | 'drink'
}

const NewProduct = ({ typeOfForm }: Props) => {
    const [price, setPrice] = useState<number>(0)
    const [brand, setBrand] = useState<string>('')
    const [size, setSize] = useState<string>('')
    const [name, setName] = useState<string>('')

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
        setPrice(0)
        setBrand('')
        setName('')
        setSize('')
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

    return(
        <ContainerForm>
            {
                typeOfForm === 'pizza' &&
                    <Input 
                        type='text'
                        placeholder="Tamaño"
                        value={size}
                        onChange={(e) => handleOnChangeSize(e)}
                    />
            }
            {
                (typeOfForm === 'snack' || typeOfForm === 'drink') &&
                    <Input 
                        type='text'
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => handleOnChangeName(e)}
                    />
            }
            <Input 
                type='number'
                placeholder="Precio"
                value={price}
                onChange={(e) => handleOnChangePrecio(e)}
            />
            {
                typeOfForm === 'drink' &&
                    <Input 
                        type='text'
                        placeholder="Marca"
                        value={brand}
                        onChange={(e) => handleOnChangeBrand(e)}
                    />
            }
            <Container style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <MediumButton onClick={handleOnClick}>
                    Guardar
                </MediumButton>
            </Container>

            <Container style={{ marginTop: '30px' }}>
                {size + ' - ' +price}
            </Container>
        </ContainerForm>
    )
}

export default NewProduct