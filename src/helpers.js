module.exports = {
  createSlug: (str) => {
    return str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')
  }
}
