const express = require('express');
const {Router} = require('express');
const cors = require('cors');
const app = express();

//config 
app.set('PORT', 3000);
const route = Router();

//middlewares
app.use(cors());
//routes

route.get('/pruebas', (req, res)=>{

    res.send('HOLA MUNDO');
});

app.use(route);

//point 
app.listen(app.get('PORT'),()=>{
    console.log(`http://localhost:${app.get('PORT')}`);
});