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
  age: DataTypes.INTEGER,
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
});

const SaleHotelTicket = sequelize.define("saleTickets", {
  country: DataTypes.TEXT,
  address: DataTypes.TEXT,
  locality: DataTypes.TEXT,
  priceBefore: DataTypes.INTEGER,
  priceAfter: DataTypes.INTEGER,
  discount: DataTypes.INTEGER,
});

const AviaTicket = sequelize.define("aviaTickets", {
  id_user: DataTypes.INTEGER,  
  num_stops: DataTypes.INTEGER,
  price: DataTypes.INTEGER,    
  trip_duration: DataTypes.TEXT,
  departure_date: DataTypes.TEXT,
  departure_time: DataTypes.TEXT,
  arrival_time: DataTypes.TEXT,
  cabin_class: DataTypes.TEXT,
  airlines: DataTypes.TEXT,
  arrival_date: DataTypes.TEXT,
});

module.exports = {
  User: User,
  HotelTicket: HotelTicket,
  AviaTicket: AviaTicket,
  SaleHotelTicket: SaleHotelTicket,
};
