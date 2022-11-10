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

router.get('/:id', (req,res) => {
    const {id} = req.params;

    const findBooking = flight.find((booking) => booking.id == id)

    res.send(findBooking);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const ticket = flight.filter((booking) => booking.id != id);

    res.send(ticket);
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const {title, time, price, date} = req.body;

    const UpDate = flight.find((booking) => booking.id === id);

    if(title) UpDate.title = title;
    if(time) UpDate.time = time;
    if(price) UpDate.price = price;
    if(date) UpDate.date = date;

    res.send(`Flight booking with id ${id} has been updated`);
})

module.exports = router;
