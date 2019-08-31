const restify = require('restify');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use((req, res, next) => {
    console.log(`Middleware do Service 1 recebeu => ${req.body.x}`);
    req.body.x++;
    console.log(`Middleware do Service 1 enviou => ${req.body.x}`);
    next();
});

server.post('/', (req, res) => {
    let { x } = req.body;
    console.log(`Rota do Service 1 recebeu => ${x}`);
    return res.json({ x: ++x });
});

server.listen(3000, () => {
    console.log(`Serviço 1 rodando`);
});