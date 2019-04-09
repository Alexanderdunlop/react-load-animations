const { createElement } = require('react')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { Ring } = require('react-load-animations')

const app = express()
const port = 3000

app.get('*', (req, res) => {
  const html = renderToString(createElement(Ring))

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body style="background-color:black;">
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
