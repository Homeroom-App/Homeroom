// ================== MODULES =================== 
require('dotenv').config();
const express    = require('express')
    , bodyParser = require('body-parser')
    , massive    = require('massive')
    
// ======== IMPORT VARIABLES FROM .env =========
const {
      SESSION_PORT
    , CONNECTION_STRING
    , SESSION_SECRET
}   = process.env;

// ================ INVOKE EXPRESS ============= 
const app = express();
app.use(bodyParser.json());

// ============== MASSIVE DB CONNECTION ========
massive(CONNECTION_STRING).then(db => {
   app.set('db', db);
   app.listen(SESSION_PORT, () => console.log(`Listening on port ${SESSION_PORT}`))
})