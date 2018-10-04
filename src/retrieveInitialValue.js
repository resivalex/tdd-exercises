import http from 'http'

function request(url) {
  return new Promise((resolve) => {
    http.get({ path: url }, (response) => {
      let data = ''
      response.on('data', (chunk) => (data += chunk))
      response.on('end', () => resolve(data))
    })
  })
} 

export default function retrieveInitialValue(index) {
  return new Promise((resolve, reject) => {
    request(`/counters/${index}.json`).then((data) => {
      try {
        resolve(JSON.parse(data).value)
      } catch (e) {
        reject(e)
      }
    })
  })
}
