const { AviaTicket } = require('../sequelize') 
const sequelize = require("../sequelize");

module.exports.booking = async function(req,res){
  try{
    await AviaTicket.sequelize.sync({ alter: true}); 
    console.log('req.body', req.body)
    const aviaTicket = {
      id_user: req.body.id_user, 
      num_stops: req.body.num_stops, 
      price: req.body.price, 
      trip_duration: req.body.trip_duration, 
      departure_date: req.body.departure_date,
      departure_time: req.body.departure_time, 
      arrival_time: req.body.arrival_time, 
      cabin_class: req.body.cabin_class, 
      airlines: req.body.airlines, 
      arrival_date: req.body.arrival_date
    }


    let ticket = AviaTicket.build({
      id_user: aviaTicket.id_user, 
      num_stops: aviaTicket.num_stops, 
      price: aviaTicket.price, 
      trip_duration: aviaTicket.trip_duration, 
      departure_date: aviaTicket.departure_date,
      departure_time: aviaTicket.departure_time, 
      arrival_time: aviaTicket.arrival_time, 
      cabin_class: aviaTicket.cabin_class, 
      airlines: aviaTicket.airlines, 
      arrival_date: aviaTicket.arrival_date      
    }); 
    await ticket.save(); 
    res.status(200).json({ airlines: ticket.airlines })
  }catch(err){
    console.log('Error: ' + err)  
    res.status(404)
  }
} 

module.exports.cancelBooking = async function(req,res){
  try{
    await AviaTicket.sequelize.sync({ alter: true}); 
    const aviaTick = {id: req.body.id}; 
    const deleteTicket = await AviaTicket.destroy({where: {id: aviaTick.id}})
    if(deleteTicket===1) res.status(200).json({ delete: true })
    else res.status(404).json({ delete: false })
  }catch(err){
    console.log('Error: ' + err)  
    res.status(404).json({ delete: false })
  }
}

module.exports.aviaShowAdmin = async function(req,res,next){
  try{
    await AviaTicket.sequelize.sync({ alter: true}); 
    await AviaTicket.findAll({ raw: true}).then(result=>{
      res.send(result);    
    }).catch(err=>console.log(err));
  }catch(err){
    console.log('Error: ' + err)     
    res.status(404).json({ flag: true })
  }
}  

module.exports.showMyBookingAviaTicket = async function(req,res){
  try{
    await AviaTicket.sequelize.sync({ alter: true}); 
    const id = req.body.id
    await AviaTicket.findAll({where: {id_user: id}, raw: true}).then(result=>{
      res.send(result);    
    }).catch(err=>console.log(err));
  }catch(err){
    console.log('Error: ' + err)     
    res.status(404).json({ flag: true })
  }
}  