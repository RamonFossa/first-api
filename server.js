import app from "./src/app.js"
// const http = require("http"); MODULO NATIVO DO JS PARA TRABALHAR COM SERVER
const port = process.env.PORT || 3000;

// const rotas = {
//     '/': 'Server do Ramon',
//     '/livros': 'Redirecionando para pag de livros',
//     '/autores': 'Monteiro Lobato',
//     '/404': '404'
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(rotas[req.url]);
// })

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})