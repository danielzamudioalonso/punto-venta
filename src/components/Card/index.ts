import styled from 'styled-components'

export const Container = styled('div')({})

export const Card = styled(Container)(
    {
        minWidth: '300px',
        height: '170px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efefef',
        borderRadius: '10px',
        padding: '16px',
        '&:hover': {
            backgroundColor: '#afafaf',
            cursor: 'pointer'
        }
    }
)

export const ContainerSelectList = styled(Container)({
    width: '40%',
    border: '1px solid #000',
    '& > ul': {
        margin: '0',
        listStyleType: 'none',
        padding: '0',
    },
    '& > ul > li': {
        padding: '12px',
        backgroundColor: '#fff'
    },
    '& > ul > li:hover': {
        backgroundColor: '#0bb0f8',
        color: '#fff'
    },
    '& > ul > .Select': {
        backgroundColor: '#0bb0f8',
        color: '#fff'
    }
})