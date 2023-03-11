import { FormPreviousLink } from 'grommet-icons'
import styled from 'styled-components'
import { BackButton } from '../Buttons/Buttons'
import { Container } from '../Card'

const CustomHeader = styled(Container)({
    top: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px 0 16px',
    backgroundColor: 'black',
    height: '70px',
    '& > img': {
        height: '100%'
    }
})

const Header = () => {
    return(
        <CustomHeader >
            <img src="https://i.pinimg.com/originals/e5/86/37/e5863725548e750c121f4ff1171e163d.png" />
            <BackButton>
                <FormPreviousLink />
                Atras
            </BackButton>
        </CustomHeader>
    )
}

export default Header