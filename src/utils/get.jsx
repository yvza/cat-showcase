import axios from 'axios'

const getData = async () => {
    let raw = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
    return raw.data
}

export { getData }