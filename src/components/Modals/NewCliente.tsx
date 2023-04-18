import { Dispatch, SetStateAction } from 'react'
import Modal from '../Modal'
import { Container } from '../Card'
import { InputForm, TextArea, ContainerInputForm } from '../Forms/Inputs'

type Props = {
    open: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalNewClient = ({ open, setOpenModal }:Props) => {
    const handleOnClose = () => {
        setOpenModal(false)
    }
    return(
        <>
            {
                open && 
                    <Modal title='Nuevo Cliente' handleOnClose={handleOnClose}>
                        <Container style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <ContainerInputForm>
                                <label>Nombre</label>
                                <InputForm 
                                    type='text'
                                    
                                />
                            </ContainerInputForm>
                            <TextArea 
                                placeholder='Dirección'
                            />
                            <InputForm 
                                type='text'
                                placeholder='Referencia'
                            />
                        </Container>
                    </Modal>
            }
        </>
    )
}

export default ModalNewClient