const { AviaTicket } = require('../sequelize') 
const { Ticket } = require('../sequelize') 
const sequelize = require("../sequelize");

module.exports.showAviaTicketsAdmin = async function(req,res){
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

module.exports.showTicketsAdmin = async function(req,res){
  try{
    await Ticket.sequelize.sync({ alter: true}); 
      await Ticket.findAll({ raw: true}).then(result=>{
      res.send(result);    
    }).catch(err=>console.log(err));
  }catch(err){
    console.log('Error: ' + err)     
    res.status(404).json({ flag: true })
  }
} 