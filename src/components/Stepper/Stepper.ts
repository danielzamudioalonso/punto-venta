import styled from "styled-components";

export const StepperStep = styled('div')({
    width: '150px',
    display: 'flex',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#858c8f',
    padding: '12px',
    border: 'none',
    borderRadius: '12px',
    '&.ready': {
        backgroundColor: '#0bb0f8',
    }
})