export default function retrieveInitialValue(index) {
  return new Promise((resolve) => {
    resolve(3 * index + 15)
  })
}
