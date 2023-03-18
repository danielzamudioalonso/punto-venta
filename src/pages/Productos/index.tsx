import { useState } from 'react'
import { Container } from '../../components/Card'
import { MediumButton } from '../../components/Buttons/Buttons'
import SnackTab from '../../components/Tables/SnacksTab'
import PizzaTab from '../../components/Tables/PizzasTab'
import styled from 'styled-components'
import DrinksTab from '../../components/Tables/DrinksTab'

const ContainerTabs = styled(Container)({
    backgroundColor: 'antiquewhite',
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
    gap: '16px',
})

const Productos = () => {
    const [tabActive, setTabActive] = useState<string>('pizzas')
    
    return(
        <Container>
            <ContainerTabs>
                <MediumButton onClick={() => setTabActive('pizzas')}>Pizzas</MediumButton>
                <MediumButton onClick={() => setTabActive('snacks')}>Snacks</MediumButton>
                <MediumButton onClick={() => setTabActive('drinks')}>Drinks</MediumButton>
            </ContainerTabs>
            <Container style={{ padding: '30px' }}>
                {
                    tabActive === 'pizzas' ? 
                        <PizzaTab />
                    : tabActive === 'snacks' ?
                        <SnackTab /> : <DrinksTab />
                }
            </Container>
        </Container>
    )
}

export default Productos