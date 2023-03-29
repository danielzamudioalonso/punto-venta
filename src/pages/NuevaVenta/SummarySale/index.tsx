import { Container } from "../../../components/Card"
import { SummaryTable } from "../../../components/Tables/Table"
import { Drink } from "../../../interfaces/drink.interface"
import { Ingredient } from "../../../interfaces/indegrient.interface"
import { SalePizza } from "../../../interfaces/pizza.interface"
import { Snack } from "../../../interfaces/snack.interface"
import { useSaleContext } from "../SaleContext"

const SummarySale = () => {
    const { cliente, salePizzas, drinks, snacks, total } = useSaleContext()

    return(
        <Container style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Container style={{ width: '500px', display: 'flex', flexDirection: 'column' }}>
                <Container style={{ width: '100%', display: 'flex', justifyContent:'center'}}>
                    <h1>Resumen de Venta</h1>
                </Container>

                <Container style={{marginBottom: '16px'}}>
                        {
                            salePizzas &&
                            (
                                <SummaryTable>
                                    <thead>
                                        <tr>
                                            <th>Pizza</th>
                                            <th>Ingredientes</th>
                                            <th>Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {salePizzas.map((pizza: SalePizza) => 
                                            (
                                                <tr key={pizza.pizza.size}>
                                                    <td>{pizza.pizza.size}</td>
                                                    <td className='ingredients'>{pizza.ingredients.map((ingredient: Ingredient) => (
                                                        <td>{ingredient.name}</td>
                                                    ))}</td>
                                                    <td className='price'>${pizza.pizza.price}</td>
                                                </tr>
                                                
                                            )
                                        )}
                                    </tbody>
                                </SummaryTable>
                            )
                        }
                </Container>
                <Container>
                    {
                        drinks && (
                            <Container>
                                <h3>Bebidas</h3>
                                <Container style={{ padding: '0 7px' }}>
                                    {
                                        drinks.map((drink: Drink) => (
                                            <Container style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', marginBottom: '16px' }}>
                                                <Container>{drink.name}</Container>
                                                <Container>${drink.price}</Container>
                                            </Container>
                                        ))
                                    }
                                </Container>
                            </Container>
                            
                        )
                    }
                </Container>
                <Container>
                    {
                        snacks && (
                            <Container style={{ padding: '0 7px' }}>
                                <h3>Snacks</h3>
                                {snacks.map((snack: Snack) => (
                                    <Container style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', marginBottom: '16px' }}>
                                        <Container>{snack.name}</Container>
                                        <Container>${snack.price}</Container>
                                    </Container>
                                ))}
                            </Container>
                        )
                    }
                </Container>
                <Container>
                    <h3>Cliente</h3>
                    {
                        cliente && (
                            <Container>
                                <Container>Cliente: {cliente.nombre}</Container>
                                Domicilio: 
                                    <Container style={{ padding: '0 20px' }}>{cliente.direccion}</Container>
                                Referencia:
                                    <Container style={{ padding: '0 20px' }}>{cliente.referencia}</Container>
                            </Container>
                        )
                    }
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', borderBottom: '1px solid #ddd', marginBottom: '16px' }}>
                    <h3>Total</h3>
                    ${total}
                </Container>
            </Container>

        </Container>
    )
}

export default SummarySale