import { useState } from 'react'
import { Container } from '../../components/Card'
import { MediumButton } from '../../components/Buttons/Buttons'
import SnackTab from '../../components/Tables/SnacksTab'
import PizzaTab from '../../components/Tables/PizzasTab'
import styled from 'styled-components'
import DrinksTab from '../../components/Tables/DrinksTab'
import NewProduct from '../../components/Forms/NewProduct'
import Ingredients from '../../components/Tables/Ingredients'

const ContainerTabs = styled(Container)({
    backgroundColor: 'antiquewhite',
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
    gap: '16px',
})

const ContainerForm = styled(Container)({
    width: '100%',
    display: 'flex',
    marginTop: '30px',
    justifyContent: 'center'
})

const Productos = () => {
    const [tabActive, setTabActive] = useState<'pizza' | 'snack' | 'drink' | 'ingredients'>('pizza')
    
    return(
        <Container>
            <ContainerTabs>
                <MediumButton onClick={() => setTabActive('pizza')}>Pizzas</MediumButton>
                <MediumButton onClick={() => setTabActive('ingredients')}>Ingredients</MediumButton>
                <MediumButton onClick={() => setTabActive('snack')}>Snacks</MediumButton>
                <MediumButton onClick={() => setTabActive('drink')}>Drinks</MediumButton>
            </ContainerTabs>
            <Container style={{ padding: '30px' }}>
                {
                    tabActive === 'pizza' ? 
                        <PizzaTab />
                    : tabActive === 'snack' ?
                        <SnackTab /> 
                    : tabActive === 'ingredients' ?
                       <Ingredients /> : <DrinksTab />
                }
                <ContainerForm>
                    <NewProduct typeOfForm={tabActive} />
                </ContainerForm>
            </Container>

        </Container>
    )
}

export default Productos