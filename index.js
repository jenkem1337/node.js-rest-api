const express = require('express')
const {UserRouter} = require('./router/userRouter')


const app = express()
app.use(express.json())
app.use('/api', UserRouter)


app.listen(3333 , () => console.log('listening port on 3333')
)
