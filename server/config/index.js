 
const envFile = `../../.env.local`;
 //console.log("-"+( ENVIRONMENT_NAME))
require('dotenv').config({
    path: envFile
});

module.exports = () => ({
        port: 8088,
        memory: true
    }
);
