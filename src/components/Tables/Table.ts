import styled from 'styled-components'

export const Table = styled('table')({
    borderCollapse: 'collapse',
    //margin: '25px 0',
    //fontSize: '0.6em',
    textAlign: 'left',
    fontFamily: 'sans-serif',
    minWidth: '400px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
    '& > thead > tr': {
        color: '#fff',
        backgroundColor: '#009879'
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
        borderBottom: '2px solid #009879'
    }
})