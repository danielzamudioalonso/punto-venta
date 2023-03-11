import { useState } from 'react'
import { MediumButton } from '../Buttons/Buttons'
import { Container } from '../Card'
import PizzaTab from './PizzaTab'
import SnackTab from './SnackTab'
import './styles.css'

type Props = {
    titles: Array<string>
}

const Tabs = ({ titles }:Props) => {
    const [tabSnacks, setTabSnacks] = useState<boolean>(false)

    return(
        <Container>
            <Container className='tabs'>
                <MediumButton onClick={() => setTabSnacks(false)}>Pizzas</MediumButton>
                <MediumButton onClick={() => setTabSnacks(true)}>Snacks</MediumButton>
            </Container>
            <Container>
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

export default Tabs