import styled from 'styled-components'

export const Table = styled('table')({
    width: '100%',
    borderCollapse: 'collapse',
    //margin: '25px 0',
    //fontSize: '0.6em',
    textAlign: 'left',
    fontFamily: 'sans-serif',
    minWidth: '400px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
    '& > thead > tr': {
        color: '#fff',
        backgroundColor: '#0d8fc8',
        //borderBottom: 'solid 2px #000'
    },
    'th, td': {
        padding: '12px 15px'
    },
    '& > tbody > tr': {
        borderBottom: '1px solid #ddd'
    },
    '& > tbody > tr:nth-of-type(even)': {
        backgroundColor: '#f3f3f3'
    },
    '& > tbody > tr:last-of-type': {
        borderBottom: '2px solid #0d8fc8'
    },
    '& > tbody > tr.select': {
        color: '#fff',
        backgroundColor: '#0bb0f8'
    }
})

export const SummaryTable = styled('table')({
    width: '100%',
    textAlign: 'center',
    'th, td': {
        borderBottom: '1px solid #ddd',
        padding: '7px'
    },
    '& > tbody > tr > td.price': {
        textAlign: 'right'
    },
    '& > tbody > tr > td.ingredients': {
        display: 'flex',
        flexDirection: 'column',
    },
    '& > tbody > tr > td.ingredients > td': {
        border: 'none'
    }
})