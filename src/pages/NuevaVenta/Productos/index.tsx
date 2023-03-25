import { Container } from "../../../components/Card"
import SelectDrinks from "./SelectDrinks"
import SelectIngredients from "./SelectIngredients"
import SelectPizzas from "./SelectPizzas"
import SelectSnacks from "./SelectSnacks"

const Productos = () => {
    return(
        <Container style={{ padding: '30px', display: 'flex', gap: '4%' }}>
            <SelectPizzas />
            <SelectIngredients />
            <SelectSnacks />
            <SelectDrinks />
        </Container>
    )
}

export default Productos