export default async function getAllPokemon() {
    try {
        const promises = []
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const allPokemon = await resp.json()
        allPokemon.results.forEach(P => {
            const pokePromise = fetchPokeInfo(P)
            promises.push(pokePromise)
        })
        const ret = await Promise.all(promises)
        return ret
    } catch(e) {
        console.error(e)
        return []
    }
}

async function fetchPokeInfo(poke) {
    try {
        const resp = await fetch(poke.url)
        const pokeData = resp.json()
        return pokeData
    } catch(e) {
        console.error(e)
        return {}
    }
}