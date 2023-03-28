import { Ingredient } from "./indegrient.interface"

export interface Pizza {
    size: string
    price: number
}

export interface SalePizza {
    pizza: Pizza
    ingredients: Array<Ingredient>
}