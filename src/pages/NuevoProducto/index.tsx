import { useState } from "react"
import styled from "styled-components"
import { MediumButton } from "../../components/Buttons/Buttons"
import { Container } from "../../components/Card"
import Pizzas from '../../data/pizzas.json'

const ContainerForm = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px'
})

const NuevoProducto = () => {
    const [precio, setPrecio] = useState<number>(0)
    const [tamaño, setTamaño] = useState<string>('')

    const handleOnClick = async() => {
        Pizzas.push({
            'size': tamaño,
            'price': precio
        })
        const newPizzas = JSON.stringify(Pizzas)
        const file = new Blob([newPizzas], {type: 'application/json'})
        const href = URL.createObjectURL(file)
        const link = document.createElement('a')
        link.download = 'nuevas.json'
        link.href = href
        link.click()
        //new File([file], 'nuevasPizzas.json')
    }

    const handleOnChangeTamaño = (e: React.FormEvent<HTMLInputElement>) => {
        setTamaño(e.currentTarget.value)
    }

    const handleOnChangePrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrecio(e.target.valueAsNumber)
    }

    return(
        <ContainerForm>
            <input type="text" name="tamño" id="tamño" placeholder="Tamaño" onChange={(e) => handleOnChangeTamaño(e)} />
            <input type="number" name="precio" id="precio" placeholder="Precio" onChange={(e) => handleOnChangePrecio(e)} />
            <MediumButton onClick={handleOnClick}>
                Guardar
            </MediumButton>

            <Container style={{ marginTop: '30px' }}>
                {tamaño + ' - ' +precio}
            </Container>
        </ContainerForm>
    )
}

export default NuevoProducto