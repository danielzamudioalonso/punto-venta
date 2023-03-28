import { Container } from "../../../components/Card"
import SelectDrinks from "./SelectDrinks"
import SelectSnacks from "./SelectSnacks"

const Extras = () => {
    return(
        <Container style={{ padding: '30px', display: 'flex', justifyContent: 'space-between' }}>
            <SelectSnacks />
            <SelectDrinks />
        </Container>
    )
}

export default Extras