import { useState } from 'react'
import { Container } from '../../components/Card'
import { MediumButton } from '../../components/Buttons/Buttons'
import SnackTab from '../../components/Tables/SnackTab'
import PizzaTab from '../../components/Tables/PizzaTab'
import styled from 'styled-components'

const ContainerTabs = styled(Container)({
    backgroundColor: 'antiquewhite',
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
    gap: '16px',
})

const Productos = () => {
    const [tabSnacks, setTabSnacks] = useState<boolean>(false)
    
    return(
        <Container>
            <ContainerTabs>
                <MediumButton onClick={() => setTabSnacks(false)}>Pizzas</MediumButton>
                <MediumButton onClick={() => setTabSnacks(true)}>Snacks</MediumButton>
            </ContainerTabs>
            <Container style={{ padding: '30px' }}>
                {
                    tabSnacks ?
                        <SnackTab />
                    : 
                        <PizzaTab />
                }
            </Container>
        </Container>
    )
}

export default Productos