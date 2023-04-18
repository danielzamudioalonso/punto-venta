import styled from 'styled-components';

export const Input = styled('input')({
    //border: 'none',
    outline: 'none',
    height: '32px',
    borderRadius: '22px',
    padding: '0 18px'
})

export const InputForm = styled('input')({

})

export const TextArea = styled('textarea')({

})

export const ContainerInputForm = styled('div')({
    position: 'relative',
    height: '45px',
    width: '90%',
    '& > input': {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        border: '1px solid #DADCE0',
        borderRadius: '7px',
        padding: '0 20px',
        outline: 'none',
        background: 'none',
        zIndex: 1
    },
    '& > label': {
        position: 'relative',
        top: '-8px',
        left: '16px',
        padding: '0 4px',
        backgroundColor: 'white',
        color: 'blue',
        fontSize: '16px',
        transition: '0.5s',
        zIndex: 10
    }
})

export const ContainerTextarea = styled('div')({
    position: 'relative',
    height: '100px',
    width: '90%',
    '& > textArea': {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '70%',
        width: '100%',
        border: '1px solid #DADCE0',
        borderRadius: '7px',
        padding: '12px 20px',
        outline: 'none',
        background: 'none',
        zIndex: 1
    },
    '& > label': {
        position: 'relative',
        top: '-8px',
        left: '16px',
        padding: '0 4px',
        backgroundColor: 'white',
        color: 'blue',
        fontSize: '16px',
        transition: '0.5s',
        zIndex: 10
    }
})