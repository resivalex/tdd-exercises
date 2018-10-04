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

export default function retrieveInitialValue() {
  return new Promise((resolve) => {
    request('/counter.json').then((data) => {
      resolve(JSON.parse(data).value)
    })
  })
}
