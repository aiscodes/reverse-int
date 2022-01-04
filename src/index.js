module.exports = function reverse(n) {
  n = n + ''
  let reversed = n.split('').reverse().join('')
  let result = parseInt(reversed, 10)
  console.log('reversed number: ', result)
  return result
}
