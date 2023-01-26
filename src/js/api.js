async function fetchCep(search){
    const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
    const url = `https://viacep.com.br/ws/${search}/json/`;
    const response = await fetch(url, options)
    const data = await response.json()
    return showData(data)
}