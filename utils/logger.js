const info = (...params) => {
  console.log(...params)
  if (process.env.NODE_ENV !== 'test') {
  }
}

const error = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(...params)
  }
}

module.exports = {
  info,
  error,
}
