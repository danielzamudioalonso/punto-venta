import axios from "axios";
import { Drink } from "../interfaces/drink.interface";
import { Pizza } from "../interfaces/pizza.interface";
import { Snack } from "../interfaces/snack.interface";

const api = axios.create({
    baseURL: 'http://localhost:4400/'
})

export const postPizza = async(body: Pizza) => {
    return await api.post('/pizza', body)
}

export const postSnack = async(body: Snack) => {
    return await api.post('/snack', body)
}

export const postDrink = async(body: Drink) => {
    return await api.post('/drink', body)
}