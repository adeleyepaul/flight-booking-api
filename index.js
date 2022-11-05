const express = require('express')
const bodyParser = require('body-parser')

const flightRoutes = require('./routes/flightRoute.js')
// import flightRoutes from './routes/flightRoute.js'

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/flights", flightRoutes);

app.get('/', (req,res) => { res.send('Hello')});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
