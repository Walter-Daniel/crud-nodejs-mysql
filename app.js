const express = require('express');
const app = express();
const port = 5000;

app.use(cors());
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/uploads', require('./routes/uploads'));


app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`)
});