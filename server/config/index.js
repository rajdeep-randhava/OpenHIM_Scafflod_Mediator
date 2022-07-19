const envFile = `.env.local`;
 //console.log("-"+( ENVIRONMENT_NAME)) export ENVIRONMENT_NAME=local && 
require('dotenv').config({
    path: envFile
});

module.exports = () => ({
        port: 8088,
        memory: true
    }
);
