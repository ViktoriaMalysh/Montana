const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("booking_db", "admin", "admin", {
  host: "db",
  dialect: "postgres",
});

module.exports = sequelize

const User = sequelize.define("users", {
  name: DataTypes.TEXT, 
  surname: DataTypes.TEXT,
  gender: DataTypes.TEXT,
  country: DataTypes.TEXT,
  dateOfBirth: DataTypes.TEXT,
  phone: DataTypes.INTEGER,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT,
  role: {
    type: DataTypes.INTEGER, 
    defaultValue: 1
  } 
});

const HotelTicket = sequelize.define("hotelTickets", {
  id_user: DataTypes.INTEGER,
  country: DataTypes.TEXT,
  address: DataTypes.TEXT,
  locality: DataTypes.TEXT,
  price: DataTypes.INTEGER,
  url: DataTypes.TEXT,
});

const SaleHotelTicket = sequelize.define("saleTickets", {
  country: DataTypes.TEXT,
  address: DataTypes.TEXT,
  locality: DataTypes.TEXT,
  priceBefore: DataTypes.INTEGER,
  priceAfter: DataTypes.INTEGER,
  discount: DataTypes.INTEGER,
});

module.exports = {
  User: User,
  HotelTicket: HotelTicket,
  SaleHotelTicket: SaleHotelTicket,
};
