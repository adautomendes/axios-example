const restify = require('restify');
const axios = require('axios');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.post('/', (req, res) => {
    let { x } = req.body;
    console.log(`API => Service 2: ${x}`);
    
    let url = `http://localhost:3000/`;
    let postData = {
        x: ++x
    }
    let axiosConfig = {};
    console.log(`Service 2 => Service 1: ${postData.x}`);

    axios.post(url, postData, axiosConfig)
        .then((response) => {
            console.log(`Service 1 => Service 2: ${response.data.x}`);
            return res.json(response.data);
        })
        .catch((error) => {
            return res.json(error.response.data);
        });
});

server.listen(3001, () => {
    console.log(`Serviço 2 rodando`);
});