const server = require('./server.js');

const PORT = process.env.PORT || 4000;

if(!module.parent) {
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}