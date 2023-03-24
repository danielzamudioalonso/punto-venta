import styled from 'styled-components';

export const MediumButton = styled('button')({
    height: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
    borderRadius: '20px',
    border: 'none',
    fontFamily: 'Poppins',
    cursor: 'pointer'
})

export const BackButton = styled('button')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    width: '100px',
    height: '40px',
    cursor: 'pointer'
})

export const StepperButton = styled(BackButton)({
    color: '#fff',
    backgroundColor: '#0bb0f8',
    borderRadius: '12px',
    border: 'none',
})