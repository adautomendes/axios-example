const restify = require('restify');
const axios = require('axios');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.post('/', (req, res) => {
    let { x } = req.body;
    
    let url = `http://localhost:3000/`;
    let postData = {
        x: ++x
    }
    let axiosConfig = {};

    console.log(`Service 2 enviou p/ Service 1 => ${postData.x}`);

    axios.post(url, postData, axiosConfig)
        .then((response) => {
            console.log(`Service 2 recebeu do Service 1 => ${response.data.x}`);
            return res.json(response.data);
        })
        .catch((error) => {
            return res.json(error.response.data);
        });
});

server.listen(3001, () => {
    console.log(`Serviço 2 rodando`);
});