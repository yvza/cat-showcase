import axios from 'axios'

const getData = async () => {
    let raw = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
    return raw.data
}

const getDataWithPage = async (page) => {
    let raw = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page='+page)
    return raw.data
}

const searchFromUser = async (query) => {
    let raw = await axios.get('https://api.thecatapi.com/v1/breeds/search?q='+query)
    return raw.data
}

export { getData, getDataWithPage, searchFromUser }