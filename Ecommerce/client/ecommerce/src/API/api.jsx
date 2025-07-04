import axios from 'axios'

export const BASE_URL = 'http://localhost:7000/api/'

const api = axios.create({baseURL:BASE_URL})



export const apiRequest = async(endpoint, data={}, method='get') =>{
    try {
        const response = await api.request({
            url:endpoint,
            method,
            data,
        })
        return response.data
    } catch (error) {
        console.log("Error",error)
        throw error
    }
}

export const getAllProduct = async()=>{
    const AllProduct = await apiRequest('/product/getAllProduct')
    // const tPopByCont = popContinet.tPopByCont
    console.log(AllProduct,"in api file");
    return AllProduct.AllPro;
}

//total population
// export const totalPopulation = async() =>{
//    const totalPopu =  await apiRequest('/total-population')
//    return totalPopu
// }

//total countries
// export const totalCountries=async()=>{
//    const tCountries =  await apiRequest('/total-countries')
//    return tCountries
// }

//populationByContinent
// export const populationByContient = async()=>{
//     const popContinet = await apiRequest('/total-population-by-continent')
//     // const tPopByCont = popContinet.tPopByCont
//     console.log(popContinet,"in api file");
//     return popContinet;
// }