const http = require('http')

const server = http.createServer((req, res)=>{
  if (req.url === '/'){
    res.write('Welcome to our page')
  }
  if (req.url === '/about'){
    res.write('here is our short story')
  }
  res.end(
    `<h1>Oops!<h1>
    <p>We can't search for the page you are looking for.<p>
    <a href = "/">back home </a>
    `
  )
})
server.listen(5000)

// package.json manifest imp info about the packages
// npm init (step by step)
// npm init -y (everything default by default)