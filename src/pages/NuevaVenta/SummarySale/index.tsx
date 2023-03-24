import { useState } from "react"
import { Container } from "../../../components/Card"
import { Drink } from "../../../interfaces/drink.interface"
import { Pizza } from "../../../interfaces/pizza.interface"
import { Snack } from "../../../interfaces/snack.interface"
import { useSaleContext } from "../SaleContext"

const SummarySale = () => {
    const { cliente, pizzas, drinks, snacks, total } = useSaleContext()

    
    /*pizzas.map((pizza: Pizza) => {  
        console.log(pizza.size)
        const a = pizza.price + totalPizzas
        setTotalPizzas(a)
        console.log(a)
    })*/

    return(
        <Container>
            <h1>Resumen de Venta</h1>
            <Container>
                <h3>Pizza</h3>
                {
                    pizzas && pizzas.map((pizza: Pizza) => (pizza.size))
                }
            </Container>
            <Container>
                <h3>Bebidas</h3>
                {
                    drinks && drinks.map((drink: Drink) => (drink.name))
                }
            </Container>
            <Container>
                <h3>Snacks</h3>
                {
                    snacks && snacks.map((snack: Snack) => (snack.name))
                }
            </Container>
            <Container>
                <h3>Cliente</h3>
                {
                    cliente && cliente.nombre
                }
            </Container>
            <Container>
                <h3>Total</h3>
                {total}
            </Container>

        </Container>
    )
}

export default SummarySale