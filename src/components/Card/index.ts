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