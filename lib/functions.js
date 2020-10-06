const fetch = require('node-fetch')
const { fetchBase64, fetchJson } = require("../utils/fetcher")

const liriklagu = async (lagu) => {
    const response = await fetch(`http://scrap.terhambar.com/lirik?word=${lagu}`)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const json = await response.json()
    if (json.status === true) return `Lirik Lagu ${lagu}\n\n${json.result.lirik}`
    return `[ Error ] Lirik Lagu ${lagu} tidak di temukan!`
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const quotemaker = async (quotes, author = 'EmditorBerkelas', type = 'random') => {
    var q = quotes.replace(/ /g, '%20').replace('\n','%5Cn')
    const response = await fetch(`https://terhambar.com/aw/qts/?kata=${q}&author=${author}&tipe=${type}`)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
    const json = await response.json()
    if (json.status) {
        if (json.result !== '') {
            const base64 = await fetchBase64(json.result)
            return base64
        }
    }
}

const chord = (query) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', query)
    fetchJson('https://mhankbarbar.herokuapp.com/api/chord?q=' + query)
        .then((hasil) => {
            if (hasil.status != 200) return resolve(hasil.status)
            const chordlagu = hasil.result

            resolve(chordlagu)
            }).catch((err) => {
                console.error(err)
                reject(err)
            })
})

module.exports = {
    chord,
    liriklagu,
    quotemaker,
    sleep
}
