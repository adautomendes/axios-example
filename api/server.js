const restify = require('restify');
const axios = require('axios');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.post('/', (req, res) => {
    let { x } = req.body;
    console.log(`Client => API: ${x}`);
    
    let url = `http://localhost:3001/`;
    let postData = {
        x: ++x
    }
    let axiosConfig = {};

    console.log(`API => Service 2: ${postData.x}`);

    axios.post(url, postData, axiosConfig)
        .then((response) => {
            console.log(`Service 2 => API: ${response.data.x}`);
            return res.json(response.data);
        })
        .catch((error) => {
            return res.json(error.response.data);
        });
});

server.listen(3333, () => {
    console.log(`API rodando`);
});