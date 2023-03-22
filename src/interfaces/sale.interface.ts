import { Cliente } from "./cliente.interface";
import { Drink } from "./drink.interface";
import { Pizza } from "./pizza.interface";
import { Snack } from "./snack.interface";

export interface Sale {
    pizzas: Array<Pizza>
    drinks: Array<Drink>
    snacks: Array<Snack>
    cliente: Cliente
    total: number
}