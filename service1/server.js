const restify = require('restify');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use((req, res, next) => {
    console.log(`Service 2 => Middleware 1: ${req.body.x}`);
    req.body.x++;
    console.log(`Middleware 1 => Service 1: ${req.body.x}`);
    next();
});

server.post('/', (req, res) => {
    let { x } = req.body;

    let resposta = {
        x: ++x
    };

    console.log(`Service 1 => Service 2: ${resposta.x}`);
    return res.json(resposta);
});

server.listen(3000, () => {
    console.log(`Serviço 1 rodando`);
});