import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4400/'
})

export const getPizzas = async() => {
    return await api.get('/pizzas')
}

export const getSnacks = async() => {
    return await api.get('/snacks')
}

export const getDrinks = async() => {
    return await api.get('/drinks')
}

export const getClients = async() => {
    return await api.get('/clientes')
}

export const getIngredients = async() => {
    return await api.get('/ingredients')
}