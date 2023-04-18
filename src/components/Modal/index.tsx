import { ReactNode, SetStateAction, useEffect } from 'react'
import styled from 'styled-components'
import { FormButton } from '../Buttons/Buttons'

const ContainerModal = styled('div')({
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
})

const ContentModal = styled('div')({
    backgroundColor: '#fff',
    margin: '15% auto',
    border: '1px solid #888',
    width: '50%'
})

const ContentChildren = styled('div')({
    padding: '30px 20px',
})

const HeaderModal = styled('div')({
    padding: '12px 20px',
    borderBottom: '1px solid gray'
})

const ButtonsModal = styled('div')({
    display: 'flex',
    justifyContent: 'end',
    padding: '10px 20px 20px',
    gap: '12px'
})

type Props = {
    handleOnClose: () => void
    title: string
    children: ReactNode
}

const Modal = ({ handleOnClose, title, children }:Props) => {

    return(
        <ContainerModal id='modal' >
            <ContentModal>
                <HeaderModal>
                    { title }
                </HeaderModal>
                <ContentChildren>
                    { children }
                </ContentChildren>
                <ButtonsModal>
                    <FormButton style={{ backgroundColor: 'gray' }}>Cancelar</FormButton>
                    <FormButton>Aceptar</FormButton>
                </ButtonsModal>
            </ContentModal>
        </ContainerModal>
    )
}

export default Modal