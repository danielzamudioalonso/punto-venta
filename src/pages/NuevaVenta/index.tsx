import { useState } from 'react'
import { Container } from '../../components/Card'
import { ProviderSaleContext, useSaleContext } from './SaleContext'
import SelectCliente from './SelectCliente'
import Extras from './Extras'
import { StepperStep } from '../../components/Stepper/Stepper'
import styled from 'styled-components'
import { StepperButton } from '../../components/Buttons/Buttons'
import SummarySale from './SummarySale'
import Pizza from './SelectPizzaIngredients'

const ContainerStepper = styled(Container)({
    display: 'flex',
    justifyContent: 'space-between',
})

const ContainerContent = styled(Container)({
    marginTop: '16px',
})

const ContainerButtons = styled(Container)({
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
    bottom: '0',
    gap: '30px'
})

const NuevaVenta = () => {
    const [step, setStep] = useState<number>(1)

    const Steps = [
        <h1></h1>,
        <Pizza />,
        <Extras />,
        <SelectCliente />,
        <SummarySale />
    ]

    return(
        <ProviderSaleContext>
            <Container style={{ padding: '30px' }}>
                <ContainerStepper>
                    <StepperStep className={step === 1 ? 'ready' : ''}>Pizza</StepperStep>
                    <StepperStep className={step === 2 ? 'ready' : ''}>Extras</StepperStep>
                    <StepperStep className={step === 3 ? 'ready' : ''}>Cliente</StepperStep>
                    <StepperStep className={step === 4 ? 'ready' : ''}>Venta</StepperStep>
                </ContainerStepper>

                <ContainerContent>
                    {
                        Steps[step]   
                    }
                </ContainerContent>

                <ContainerButtons>
                    <StepperButton onClick={() => setStep(step - 1)} disabled={step == 1 && true}>
                        Atras
                    </StepperButton>
                    <StepperButton onClick={() => {
                        step === 4 ? 
                            console.log('comprado')
                        :
                            setStep(step + 1)
                    }}>
                        {
                            step === 4 ? 'Finalizar' : 'Siguiente'
                        }
                    </StepperButton>
                </ContainerButtons>
            </Container>
        </ProviderSaleContext>
    )
}

export default NuevaVenta