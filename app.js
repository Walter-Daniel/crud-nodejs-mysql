const express = require('express');
const app = express();
const cors = require('cors');


const PORT = 5000;

app.use(cors());
app.use( express.json() );

//Rutas
app.use('/api', require('./routes/crud.routes'));

app.listen(PORT, () => {
    console.log(`Escuchando desde el puerto ${PORT}`)
});