import { Container } from "../../../components/Card"
import { Drink } from "../../../interfaces/drink.interface"
import { Ingredient } from "../../../interfaces/indegrient.interface"
import { Pizza } from "../../../interfaces/pizza.interface"
import { Snack } from "../../../interfaces/snack.interface"
import { useSaleContext } from "../SaleContext"

const SummarySale = () => {
    const { cliente, ingredients, pizzas, drinks, snacks, total } = useSaleContext()

    return(
        <Container>
            <h1>Resumen de Venta</h1>
            <Container>
                <h3>Pizza</h3>
                {
                    pizzas && pizzas.map((pizza: Pizza) => (pizza.size + ' -- $' +pizza.price))
                }
            </Container>
            <Container>
                <h3>Ingrediente/s</h3>
                {
                    ingredients && ingredients.map((ingredient: Ingredient) => (ingredient.name+ ' '))
                }
            </Container>
            <Container>
                <h3>Bebidas</h3>
                {
                    drinks && drinks.map((drink: Drink) => (drink.name+ ' -- $' +drink.price))
                }
            </Container>
            <Container>
                <h3>Snacks</h3>
                {
                    snacks && snacks.map((snack: Snack) => (snack.name+ ' -- $' +snack.price))
                }
            </Container>
            <Container>
                <h3>Cliente</h3>
                {
                    cliente && cliente.nombre + ' -- ' + cliente.direccion
                }
            </Container>
            <Container>
                <h3>Total</h3>
                ${total}
            </Container>

        </Container>
    )
}

export default SummarySale