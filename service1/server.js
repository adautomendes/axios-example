const restify = require('restify');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use((req, res, next) => {
    console.log(`Middleware do Service 1 recebeu do Service 2 => ${req.body.x}`);
    req.body.x++;
    console.log(`Middleware do Service 1 enviou p/ roda do Service 1 => ${req.body.x}`);
    next();
});

server.post('/', (req, res) => {
    let { x } = req.body;
    console.log(`Rota do Service 1 recebeu do Middleware do Service 1 => ${x}`);

    let resposta = {
        x: ++x
    };

    console.log(`Rota do Service 1 enviou p/ o Service 2 => ${resposta.x}`);
    return res.json(resposta);
});

server.listen(3000, () => {
    console.log(`Serviço 1 rodando`);
});