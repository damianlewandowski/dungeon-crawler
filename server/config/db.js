require('dotenv').config()
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

module.exports = {
  url: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds255588.mlab.com:55588/my-sandbox`
}