// app.js

/**
 * Required External Modules
 */

 const express = require('express')

/**
 * App Variables
 */
 
 const app = express()
 const port = 3000

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */

 app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
  })

/**
 * Server Activation
 */

 app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
 })