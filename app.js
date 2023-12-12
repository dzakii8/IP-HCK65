const { default: axios } = require('axios')
const express = require('express')
const app = express()
const port = 3000
const { User, SavedPassword } = require('./models')
const { comparePassword, hashPassword } = require('./bcrypt')
const { signToken } = require('./jwt')
const authentication = require('./middlewares/authentication')
const limit = require("express-limit").limit
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/register', async (req, res) => {
  try {
    req.body.password = hashedPassword;
    const result = await User.create(req.body)

    res
      .status(200)
      .json({
        email: result.email
      });
  } catch (error) {
    console.log(error);
  }
})
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      throw {
        name: 'BadRequest',
        message: 'email and password is required',
        status: 400
      }
    }
    const user = await User.findOne({
      where: {
        email
      }
    })
    if (!user) {
      throw {
        name: 'Unauthorized',
        message: 'Email wrong',
        status: 401
      }
    }
    const isValidPassword = comparePassword(password, user.password)
    if (!isValidPassword) {
      throw {
        name: 'Unauthorized',
        message: 'Password wrong',
        status: 401
      }
    }
    const access_token = signToken({ id: user.id })
    res
      .status(200)
      .json({ access_token })
  } catch (error) {
    console.log(error);
  }
})


app.use(authentication)
const l = limit({
  max: 1, // 5 requests
  period: 60 * 1000, // per minute (60 seconds)
})
const limiittt = function (req,res,next){

  if (false){
    return next()
  }

 l(req, res, next)
}

app.get('/',limiittt, (req, res) => {
  res.send('Hello World!')
})
app.get('/generatePasswordnp/:length',  limit({
  max: 1, // 5 requests
  period: 60 * 1000, // per minute (60 seconds)
}), async (req, res) => {
  try {
    //rqr length from params
    const { length } = req.params
    const result = await axios.get('https://api.api-ninjas.com/v1/passwordgenerator?length=' + length, {
        headers: {
          'X-Api-Key': "HYrG1yi3VRNawDJMapPiYw==Y83Ls0yTYG8ZGUYo",
          'Content-Type': 'application/json'
        }
      })
    res
      .status(200)
      .json({
        result: result.data.random_password
      });
  } catch (error) {
    console.log(error);
  }
})
app.get('/generatePasswordp/:length', async (req, res) => {
  try {
    //rqr length from params
    const { length } = req.params
    const result = await axios.get('https://api.api-ninjas.com/v1/passwordgenerator?length=' + length, {
        headers: {
          'X-Api-Key': "HYrG1yi3VRNawDJMapPiYw==Y83Ls0yTYG8ZGUYo",
          'Content-Type': 'application/json'
        }
      })
    res
      .status(200)
      .json({
        result: result.data.random_password
      });
  } catch (error) {
    console.log(error);
  }
})
app.post('/savePassword', async (req, res) => {
  try {
    //rqr name, password, user id, req,body
    req.body.userId = req.user.id

    const result = await SavedPassword.create(req.body)

    res
      .status(200)
      .json(result);
  } catch (error) {
    console.log(error);
  }
})


app.listen(port, () => {
  console.log(`running on port ${port}`)
})