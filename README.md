# axios-example
An example with 3 servers communicating each other using Axios

## Dependencies
- [NodeJS/NPM](https://nodejs.org/en/): JavaScript runtime.

## Architecture
This project contains an didatic example of 3 distinct servers which can be deployed separately and communicate each other. All communication between these servers is realized by REST/HTTP.

## API Endpoint
`POST http://<api_host>:<api_port>/`: Sends a request with a number in the body:

### Request Sample
```json
{
    "x": 1
}
```

## Dependencies and Execution
Before run each server run the following command (once in each folder) to install the proper dependencies:

`npm install`

To run each server open a command window in each folder and run the command below:

`npm run dev`

In Windows you can run only `runServers.cmd` to run both three servers.
