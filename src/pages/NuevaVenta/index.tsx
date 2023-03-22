import { useState } from 'react'
import { Container } from '../../components/Card'
import SelectPizzas from './SelectPizzas'
import { ProviderSaleContext, useSaleContext } from './SaleContext'
import SelectSnacks from './SelectSnacks'
import SelectDrinks from './SelectDrinks'

const NuevaVenta = () => {
    const [step, setStep] = useState<number>(0)

    return(
        <ProviderSaleContext>
            <Container style={{ padding: '30px', display: 'flex', gap: '4%' }}>
                <SelectPizzas />
                <SelectSnacks />
                <SelectDrinks />
            </Container>
        </ProviderSaleContext>
    )
}

export default NuevaVenta