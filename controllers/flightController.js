// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }

const {v4:uuidv4} = require('uuid')

const flight = []

exports.getBook = (req, res) => {
    res.send(flight); 
}


exports.flightBook = (req, res) => {
    const booking = req.body;

    flight.push({...booking, id: uuidv4() })

    res.send(`A new flight booking with ${booking.title} has been added`);

}

exports.getUserBook = (req,res) => {
    const {id} = req.params;

    const findBooking = flight.find((booking) => booking.id == id)

    res.send(findBooking);
}

exports.deleteBook = (req, res) => {
    const { id } = req.params;

    const ticket = flight.filter((booking) => booking.id != id);

    res.send(ticket);
}

exports.updateBook = (req, res) => {
    const { id } = req.params;
    const {title, time, price, date} = req.body;

    const UpDate = flight.find((booking) => booking.id === id);

    if(title) UpDate.title = title;
    if(time) UpDate.time = time;
    if(price) UpDate.price = price;
    if(date) UpDate.date = date;

    res.send(`Flight booking with id ${id} has been updated`);
}