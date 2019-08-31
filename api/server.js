const restify = require('restify');
const axios = require('axios');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.post('/', (req, res) => {
    let { x } = req.body;
    
    let url = `http://localhost:3001/`;
    let postData = {
        x: ++x
    }
    let axiosConfig = {};

    console.log(`API enviou p/ Service 2 => ${postData.x}`);

    axios.post(url, postData, axiosConfig)
        .then((response) => {
            console.log(`API recebeu do Service 2 => ${response.data.x}`);
            return res.json(response.data);
        })
        .catch((error) => {
            return res.json(error.response.data);
        });
});

server.listen(3333, () => {
    console.log(`API rodando`);
});