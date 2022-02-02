const { HotelTicket } = require("../sequelize");
const sequelize = require("../sequelize");

module.exports.booking1 = async function (req, res) {
  console.log("candidat", req.body);

  try {
    console.log("id", req.body.id_user);
    await HotelTicket.sequelize.sync({ alter: true });
    const tickets = {
      id_user: req.body.id_user,
      name: req.body.name,
      address: req.body.address,
      locality: req.body.locality,
      price: req.body.price,
      url: req.body.url,
    };
    console.log("ticket", tickets);
    let ticket = HotelTicket.build({
      id_user: tickets.id_user,
      country: tickets.name,
      address: tickets.address,
      locality: tickets.locality,
      price: tickets.price,
      url: tickets.url,
    });
    await ticket.save();
    res.status(200).json({ name: ticket.name });
  } catch (err) {
    console.log("Error: " + err);
    console.log("error");
    res.status(404);
  }
};

module.exports.cancelBooking = async function (req, res) {
  try {
    await HotelTicket.sequelize.sync({ alter: true });
    const project = { id: req.body.id };
    const deleteProject = await HotelTicket.destroy({
      where: { id: project.id },
    });
    if (deleteProject === 1) res.status(200).json({ delete: true });
    else res.status(404).json({ delete: false });
  } catch (err) {
    console.log("Error: " + err);
    res.status(404).json({ delete: false });
  }
};

module.exports.showMyBookingTicket = async function (req, res) {
  try {
    await HotelTicket.sequelize.sync({ alter: true });
    const id = req.body.id;
    await HotelTicket.findAll({ where: { id_user: id }, raw: true })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log("Error: " + err);
    res.status(404).json({ flag: true });
  }
};
