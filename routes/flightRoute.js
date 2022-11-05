const express = require('express')
const {v4:uuidv4} = require('uuid')

const router = express.Router();

const flight = []

router.get('/', (req, res) => {

    res.send(flight);
})

router.post('/', (req, res) => {
    const booking = req.body;

    flight.push({...booking, id: uuidv4() })

    res.send(`A new flight booking with ${booking.title} has been added`);

    // console.log("post reached")

    // res.send("post reached")
})

module.exports = router;

