import styled from "styled-components"
import { Container } from "../../../components/Card"
import { Ingredient } from "../../../interfaces/indegrient.interface"
import { Pizza } from "../../../interfaces/pizza.interface"

const CardInfo = styled(Container)({
    width: '350px',
    backgroundColor: '#0bb0f8',
    padding: '30px 0',
    borderRadius: '30px',
    boxShadow: '0 -3px 8px rgba(0,0,0,0.3) inset',
    '& > div': {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    '& > div > h3': {
        color: '#0bb0f8',
        margin: '12px',
    },
    '& > div > ul': {
        //color: '#555',
        listStyleType: 'none',
        margin: '0 0 12px',
        padding: '0',
    }
})

type Props = {
    pizza: Pizza
    ingredients: Array<Ingredient>
}

const InformationCard = ({ pizza, ingredients }:Props) => {
    return(
        <CardInfo>
            <Container>
                <h3>{pizza.size}</h3>
                <ul>
                    {
                        ingredients.map((ingredient: Ingredient) => (
                            <li key={ingredient.name}>
                                {ingredient.name}
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </CardInfo>
    )
}

export default InformationCard