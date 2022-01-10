
let URL = ""

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production' 
  ? URL
  : 'http://localhost:3000'

