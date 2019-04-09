const express = require('express')
const { createElement, Fragment } = require('react')
const { renderToString } = require('react-dom/server')
const { Ellipsis, Ring, Ripple } = require('react-load-animations')

const port = 3000
const app = express()

const html = renderToString(
  createElement(
    Fragment,
    null,
    createElement(Ellipsis),
    createElement(Ring),
    createElement(Ripple)
  )
)

app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>CJS Example</title>
    </head>
    <body style="background-color:black;">
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
